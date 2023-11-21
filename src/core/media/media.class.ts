export default class Media {
    readonly config
    public folder = ''

    public raw
    public type

    public data = {} as IMediaData

    constructor(
        config: IRawUser,
        rawMedia: string | IRawMedia
    ) {
        this.config = config

        this.raw = rawMedia
        this.type = this.detectMediaType()
    }

    public setMediaFolder(folderName: string) {
        this.folder = folderName
    }

    private detectMediaType() {
        let mediaType = ''

        switch (typeof this.raw) {
            case "string":
                switch(getFileExtension(this.raw)) {
                    case 'mp4':
                        mediaType = 'video'
                        break;
                    default:
                        mediaType = 'image'
                        break;
                }
                return mediaType

            case "object":
                if (Array.isArray(this.raw)) {
                    return 'album'
                } else {
                    return this.raw.type
                }
        }
    }

    public getMediaFile(fileName: string) {
        let filePath = ''

        if (fileName.startsWith("http")) {
            filePath = fileName
        } else {
            filePath = this.getMediaPath(fileName)
        }

        return {
            name: fileName,
            path: filePath,
        };
    }

    private getMediaPath(filename: string) {
        if (filename.startsWith("http")) {
            return "";
        }

        return `${import.meta.env.BASE_URL}user/${this.config.profile.username}${this.folder}/${filename}`;
    }
}