import {Component, OnInit} from '@angular/core';

import {VideoService} from './services/video.service';
import {Video} from './models/video';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    term: string;
    videoData1: Video[];
    videoData2: Video[];
    fullVideoData: Video[] = [];
    asc: boolean;
    des: boolean;
    rate: boolean;

    constructor(private videoService: VideoService) {
    }

    ngOnInit() {
        this.videoService.getVideoData1()
            .subscribe((data) => {
                this.videoData1 = data;
                console.log(this.videoData1);
                this.videoData1.forEach(item => this.fullVideoData.push(item));
            });

        this.videoService.getVideoData2()
            .subscribe((data) => {
                this.videoData2 = data;
                console.log(this.videoData2);
                this.videoData2.forEach(item => this.fullVideoData.push(item));
            });

        this.videoService.sTerm.subscribe((t: string) => this.term = t);
        this.videoService.newest.subscribe((data: boolean) => this.des = data);
        this.videoService.oldest.subscribe((data: boolean) => this.asc = data);
        this.videoService.sortRate.subscribe((data: boolean) => this.rate = data);
    }

    get allData() {
        if (this.des) {
            return this.fullVideoData.sort((a, b) => new Date(b.posttime).getTime() - new Date(a.posttime).getTime());
        } else if (this.asc) {
            return this.fullVideoData.sort((a, b) => new Date(a.posttime).getTime() - new Date(b.posttime).getTime());
        } else if (this.rate) {
            this.fullVideoData.sort((a, b) => new Date(b.posttime).getTime() - new Date(a.posttime).getTime());
            return this.fullVideoData.sort((a, b) => new Date(b.rating).getTime() - new Date(a.rating).getTime());
        } else {
            return this.fullVideoData;
        }
    }
}
