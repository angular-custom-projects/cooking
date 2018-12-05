import {Component, OnChanges, OnInit} from '@angular/core';
import {VideoService} from '../services/video.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
    searchTerm: string;
    newest = false;
    oldest = false;
    rating = false;

    constructor(private videoService: VideoService) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        this.videoService.sTerm.next(this.searchTerm);
    }

    onNewest() {
        this.newest = true;
        this.oldest = false;
        this.rating = false;
        this.videoService.newest.next(this.newest);
        this.videoService.oldest.next(this.oldest);
        this.videoService.sortRate.next(this.rating);
    }

    onOldest() {
        this.newest = false;
        this.oldest = true;
        this.rating = false;
        this.videoService.newest.next(this.newest);
        this.videoService.oldest.next(this.oldest);
        this.videoService.sortRate.next(this.rating);
    }

    onRating() {
        this.newest = false;
        this.oldest = false;
        this.rating = true;
        this.videoService.newest.next(this.newest);
        this.videoService.oldest.next(this.oldest);
        this.videoService.sortRate.next(this.rating);
    }

    test() {
        this.videoService.sTerm.next(this.searchTerm);
    }
}
