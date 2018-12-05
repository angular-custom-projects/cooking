import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {map} from 'rxjs/internal/operators';

import {Video} from '../models/video';

@Injectable({
    providedIn: 'root'
})
export class VideoService {
    sTerm = new Subject();
    newest = new Subject();
    oldest = new Subject();
    sortRate = new Subject();

    constructor(private httpClient: HttpClient) {
    }

    getVideoData1() {
        return this.httpClient.get('assets/source1.json')
            .pipe(map((data) => data as Video[]));
    }

    getVideoData2() {
        return this.httpClient.get('assets/source2.json')
            .pipe(map((data) => data as Video[]));
    }
}
