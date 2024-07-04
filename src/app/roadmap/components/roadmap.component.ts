import { Component, OnInit } from '@angular/core';
import { Release } from '../models/release.model';
import { ReleaseComponent } from './release.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roadmap',
  standalone: true,
  imports: [CommonModule, FormsModule, ReleaseComponent],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.scss'
})
export class RoadmapComponent implements OnInit {

  showExpansions: boolean = true;
  showSeasons: boolean = true;

  releases: Release[] = [
    {
      title: 'Year 1: The Red War',
      type: 'majorRelease',
      releaseDate: '2017-09-06',
      imageSrc: 'media/red-war.webp',
      contentSrc: 'content/red-war.html'
    },
    {
      title: 'Curse of Osiris (Season 2)',
      type: 'season',
      releaseDate: '2017-12-05',
      imageSrc: 'media/s2.jpg',
      contentSrc: 'content/s2.html'
    },
    {
      title: 'Warmind (Season 3)',
      type: 'season',
      releaseDate: '2018-05-08',
      imageSrc: 'media/s3.webp',
      contentSrc: 'content/s3.html'
    },
    {
      title: 'Year 2: Forsaken',
      type: 'majorRelease',
      releaseDate: '2018-09-04',
      imageSrc: 'media/forsaken.jpg',
      contentSrc: 'content/forsaken.html'
    },
    {
      title: 'Season of the Forge (Season 5)',
      type: 'season',
      releaseDate: '2018-12-04',
      imageSrc: 'media/s5.webp',
      contentSrc: 'content/s5.html'
    },
    {
      title: 'Season of the Drifter (Season 6)',
      type: 'season',
      releaseDate: '2019-03-05',
      imageSrc: 'media/s6.jpg',
      contentSrc: 'content/s6.html'
    },
    {
      title: 'Season of Opulence (Season 7)',
      type: 'season',
      releaseDate: '2019-06-04',
      imageSrc: 'media/s7.jpg',
      contentSrc: 'content/s7.html'
    },
    {
      title: 'Year 3: Shadowkeep',
      type: 'majorRelease',
      releaseDate: '2019-10-01',
      imageSrc: 'media/shadowkeep.webp',
      contentSrc: 'content/shadowkeep.html'
    },
    {
      title: 'Season of the Undying (Season 8)',
      type: 'season',
      releaseDate: '2019-10-05',
      imageSrc: 'media/s8.jpg',
      contentSrc: 'content/s8.html'
    },
    {
      title: 'Season of Dawn (Season 9)',
      type: 'season',
      releaseDate: '2019-12-10',
      imageSrc: 'media/s9.jpg',
      contentSrc: 'content/s9.html'
    },
    {
      title: 'Season of the Worthy (Season 10)',
      type: 'season',
      releaseDate: '2020-03-10',
      imageSrc: 'media/s10.jpg',
      contentSrc: 'content/s10.html'
    },
    {
      title: 'Season of Arrivals (Season 11)',
      type: 'season',
      releaseDate: '2020-06-09',
      imageSrc: 'media/s11.jpg',
      contentSrc: 'content/s11.html'
    },
    {
      title: 'Year 4: Beyond Light',
      type: 'majorRelease',
      releaseDate: '2020-11-10',
      imageSrc: 'media/beyond-light.jpg',
      contentSrc: 'content/beyond-light.html'
    },
    {
      title: 'Season of the Hunt (Season 12)',
      type: 'season',
      releaseDate: '2020-11-17',
      imageSrc: 'media/s12.jpg',
      contentSrc: 'content/s12.html'
    },
    {
      title: 'Season of the Chosen (Season 13)',
      type: 'season',
      releaseDate: '2021-02-09',
      imageSrc: 'media/s13.jpg',
      contentSrc: 'content/s13.html'
    },
    {
      title: 'Season of the Splicer (Season 14)',
      type: 'season',
      releaseDate: '2021-05-11',
      imageSrc: 'media/s14.jpg',
      contentSrc: 'content/s14.html'
    },
    {
      title: 'Season of the Lost (Season 15)',
      type: 'season',
      releaseDate: '2021-08-24',
      imageSrc: 'media/s15.webp',
      contentSrc: 'content/s15.html'
    },
    {
      title: 'Bungie 30th Anniversary',
      type: 'season-dlc',
      releaseDate: '2021-12-07',
      imageSrc: 'media/30th.webp',
      contentSrc: 'content/bungie-30.html'
    },
    {
      title: 'Year 5: The Witch Queen',
      type: 'majorRelease',
      releaseDate: '2022-02-22',
      imageSrc: 'media/witch-queen.jpg',
      contentSrc: 'content/witch-queen.html'
    },
    {
      title: 'Season of the Risen (Season 16)',
      type: 'season',
      releaseDate: '2022-02-22',
      imageSrc: 'media/s16.webp',
      contentSrc: 'content/s16.html'
    },
    {
      title: 'Season of the Haunted (Season 17)',
      type: 'season',
      releaseDate: '2022-05-24',
      imageSrc: 'media/s17.webp',
      contentSrc: 'content/s17.html'
    },
    {
      title: 'Season of Plunder (Season 18)',
      type: 'season',
      releaseDate: '2022-08-23',
      imageSrc: 'media/s18.jpg',
      contentSrc: 'content/s18.html'
    },
    {
      title: 'Season of the Seraph (Season 19)',
      type: 'season',
      releaseDate: '2022-12-06',
      imageSrc: 'media/s19.webp',
      contentSrc: 'content/s19.html'
    },
    {
      title: 'Year 6: Lightfall',
      type: 'majorRelease',
      releaseDate: '2023-02-28',
      imageSrc: 'media/lightfall.jpeg',
      contentSrc: 'content/lightfall.html'
    },
    {
      title: 'Season of Defiance (Season 20)',
      type: 'season',
      releaseDate: '2023-02-28',
      imageSrc: 'media/s20.jpg',
      contentSrc: 'content/s20.html'
    },
    {
      title: 'Season of the Deep (Season 21)',
      type: 'season',
      releaseDate: '2023-05-23',
      imageSrc: 'media/s21.jpg',
      contentSrc: 'content/s21.html'
    },
    {
      title: 'Season of the Witch (Season 22)',
      type: 'season',
      releaseDate: '2023-08-22',
      imageSrc: 'media/s22.jpg',
      contentSrc: 'content/s22.html'
    },
    {
      title: 'Season of the Wish (Season 23)',
      type: 'season',
      releaseDate: '2023-11-28',
      imageSrc: 'media/s23.jpg',
      contentSrc: 'content/s23.html'
    },
    {
      title: 'Into the Light',
      type: 'season-dlc',
      releaseDate: '2024-04-09',
      imageSrc: 'media/into-the-light.jpg',
      contentSrc: 'content/into-the-light.html'
    },
    {
      title: 'Year 7: The Final Shape',
      type: 'majorRelease',
      releaseDate: '2024-06-04',
      imageSrc: 'media/final-shape.png',
      contentSrc: 'content/final-shape.html'
    },
    {
      title: 'Episode: Echoes',
      type: 'season',
      releaseDate: '2024-06-11',
      imageSrc: 'media/e1.webp',
      contentSrc: 'content/e1.html'
    },
    {
      title: 'Episode: Revenant',
      type: 'season',
      releaseDate: '2024-10-08',
      imageSrc: 'media/e2.webp',
      contentSrc: 'content/e2.html'
    },
    {
      title: 'Episode: Heresy',
      type: 'season',
      releaseDate: '',
      imageSrc: 'media/e3.webp',
      contentSrc: 'content/e3.html'
    }
  ];

  constructor() {}

  ngOnInit(): void {
      
  }
}
