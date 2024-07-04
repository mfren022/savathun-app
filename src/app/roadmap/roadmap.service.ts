import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RoadmapService {

    constructor(private http: HttpClient) {
        
    }

    public getReleaseContent(url: string) {
        return this.http.get(url, {responseType: 'text'});
    }
}