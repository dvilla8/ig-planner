export function parseProfile(config: IConfigUser): IUser {
  const data: IUser = {
    profile: {},
  } as IUser;

  // set fields
  data.profile.name = config.profile.name;
  data.profile.username = config.profile.username;

  data.profile.posts_count = 0;
  data.profile.followers_count = Number(config.profile.followers_count);
  data.profile.follows_count = Number(config.profile.follows_count);

  data.profile.website = !config.profile.website
    ? null
    : {
        href: config.profile.website,
        label: new URL(config.profile.website).hostname,
      };

  // parse fields biography
  if (config.profile.biography) {
    data.profile.biography = config.profile.biography?.replace(
      /(?:\r\n|\r|\n)/g,
      "<br>",
    );
  }

  // set parsed avatar
  data.profile.avatar = getProfileAvatar(config);

  // set empty media
  data.profile.media = {
    posts: [],
    stories: [],
    reels: [],
    highlights: [],
  };

  // check for media property
  if (Object.prototype.hasOwnProperty.call(config.profile, "media")) {
    // parse media posts
    if (config.profile.media.posts) {
      data.profile.media.posts = parseProfilePosts(config);
    }

    // parse media reels
    if (config.profile.media.reels) {
      // data.profile.media.reels = parseProfileReels(config)
    }
  }

  return data;
}

function parseProfilePosts(config: IConfigUser) {
  const parsedPosts: any = [];

  let mediaAlbum: IProfileMediaAlbumList = [];

  for (let mediaPost of config.profile.media.posts) {
    switch (typeof mediaPost) {
      case "string":
        parsedPosts.push({
          file: getProfileMediaImage(config, mediaPost),
          type: "image",
        });
        break;

      case "object":
        switch (mediaPost.type) {
          case "image":
            parsedPosts.push({
              file: getProfileMediaImage(config, mediaPost.file),
              type: "image",
            });
            break;
          case "video":
            parsedPosts.push({
              file: getProfileMediaVideo(config, mediaPost.file),
              type: "video",
            });
            break;
          case "iframe":
            parsedPosts.push({
              href: getProfileMediaIframe(config, mediaPost.href),
              type: "iframe",
            });
            break;
          case "album":
            mediaAlbum = [];

            // parse albums
            if (Array.isArray(mediaPost.list)) {
              for (let albumMediaPost of mediaPost.list) {
                switch (typeof albumMediaPost) {
                  case "string":
                    mediaAlbum.push({
                      file: getProfileMediaImage(config, albumMediaPost),
                      type: "image",
                    });
                    break;
                  case "object":
                    switch (albumMediaPost.type) {
                      case "image":
                        mediaAlbum.push({
                          file: getProfileMediaImage(
                            config,
                            albumMediaPost.file,
                          ),
                          type: "image",
                        });
                        break;
                      case "video":
                        mediaAlbum.push({
                          file: getProfileMediaVideo(
                            config,
                            albumMediaPost.file,
                          ),
                          type: "video",
                        });
                        break;
                      case "iframe":
                        parsedPosts.push({
                          href: getProfileMediaIframe(
                            config,
                            albumMediaPost.href,
                          ),
                          type: "iframe",
                        });
                        break;
                    }
                    break;
                }
              }
            }

            parsedPosts.push({
              list: mediaAlbum,
              type: "album",
            });
            break;
        }

        break;
    }
  }

  return parsedPosts;
}

function getMediaPath(config: IConfigUser, filename: string) {
  if (filename.startsWith("http")) {
    return "";
  }

  return `profiles/${config.profile.username}/media/${filename}`;
}

export function getProfileAvatar(config: IConfigUser): IProfileMediaFile {
  let avatarFilename = "avatar.jpg";
  let path = "";

  if (config.profile.avatar) {
    avatarFilename = config.profile.avatar;
  }

  if (avatarFilename.startsWith("http")) {
    path = avatarFilename;
  } else {
    path = `profiles/${config.profile.username}/${avatarFilename}`;
  }

  return {
    filename: avatarFilename,
    path,
  };
}

export function getProfileMediaImage(
  config: IConfigUser,
  filename: string,
): IProfileMediaFile {
  return {
    filename,
    path: getMediaPath(config, filename),
  };
}

export function getProfileMediaIframe(
  config: IConfigUser,
  href: string,
): string {
  return href;
}

export function getProfileMediaVideo(
  config: IConfigUser,
  filename: string,
): IProfileMediaFile {
  return {
    filename,
    path: getMediaPath(config, filename),
  };
}
