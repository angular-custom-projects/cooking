import {Tag} from './tag';

export class Video {
    constructor(public id: number,
                public title: string,
                public video_url: string,
                public thumbnail_url: string,
                public posttime: string,
                public tags: Tag[],
                public rating?: number) {
    }
}
