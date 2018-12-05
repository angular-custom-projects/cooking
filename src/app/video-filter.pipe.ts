import {Pipe, PipeTransform} from '@angular/core';
import {Video} from './models/video';

@Pipe({
    name: 'videoFilter'
})

export class VideoFilterPipe implements PipeTransform {
    transform(videos: Video[], searchTerm: string): Video[] {
        if (!videos || !searchTerm) {
            return videos;
        }
        return videos.filter(video => video.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
