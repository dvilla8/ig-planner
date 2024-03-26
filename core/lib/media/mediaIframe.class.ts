import Media from "./media.class"
import MediaImage from "./mediaImage.class"
import User from "../user/user.class"

export default class MediaIframe extends Media implements IMediaIframe {
  public reel: boolean = false
  public href: string = ""
  public cover: IMediaImage

  constructor(user: User, raw: IRawMedia, collection?: IMediaCollection, from?: IMediaFrom) {
    super(user, raw, collection, from)

    this.setMediaType("iframe")
    this.parseMediaIframe()
  }

  public fetch() {
    this.fetchMediaIframe()
  }

  private parseMediaIframe() {
    if (typeof this.raw === 'string' || this.raw instanceof File) {
      return
    }

    // set max quality to youtube embed videos
    if (this.raw.href) {
      let href = this.raw.href

      if (href.startsWith("https://youtube.com/embed/")) {
        href = href + "?autoplay=1&version=3&vq=hd1080"
      }

      this.href = href
    }

    if (this.raw.reel) {
      this.reel = this.raw.reel
    }

    if (this.raw.cover && typeof this.raw.cover !== "number") {
      this.cover = new MediaImage(this.user, this.raw.cover, this.collection, this.from)
    }
  }

  private fetchMediaIframe() {
    if (this.cover) {
      this.cover.fetch()
    }
  }

  public async setCover(file: File) {
    this.cover = new MediaImage(this.user, { file })

    this.user.setChanged(true)
  }

  public async removeCover() {
    this.cover = undefined

    this.user.setChanged(true)
  }

  public get isReel() {
    return this.collection === 'reels' || this.reel
  }

  public async cloneToReel() {
    if (this.reel) {
      throw Error("Media is already defined as reel")
    }

    if (typeof this.raw === "string") {
      throw Error("Cannot clone a media if its raw is a string")
    }

    const mediaToBeCloned = await this.export()

    if (mediaToBeCloned && !Array.isArray(mediaToBeCloned)) {
      mediaToBeCloned.reel = true

      // @ts-ignore
      this.user.media.addMedia(mediaToBeCloned, "reels", {
        addMethod: 'push',
        from: 'client'
      })
    }

    this.user.setChanged(true)
  }

  public exportConfig(): IMediaIframeExportConfig {
    return {
      ...this.exportCommonConfig,
      reel: this.reel,
      href: this.href,
    }
  }

  public async exportFiles(): Promise<IMediaIframeExportMedia> {
    let cover = undefined

    // fulfill cover
    if (this.cover && this.cover.file) {
      cover = {
        file: await this.cover.file,
      }
    }

    return {
      cover,
    }
  }

  public async export() {
    return {
      ...this.exportConfig(),
      ...await this.exportFiles()
    }
  }
}
