import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Release, RoadmapService } from '../index';

@Component({
  selector: 'app-release',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './release.component.html',
  styleUrl: './release.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ReleaseComponent implements OnInit {

    @Input() data: Release;
    content: string;

    constructor(private roadmapService: RoadmapService) {}
  
    ngOnInit(): void {
        this.roadmapService.getReleaseContent(this.data.contentSrc).subscribe(
            (data) => {
                this.content = data;
            }
        );
    }
}
