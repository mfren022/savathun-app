import { Routes } from '@angular/router';
import { RoadmapComponent, RoadmapService } from './index';

export const RoadmapRoutes: Routes = [
    { path: '', component: RoadmapComponent, providers: [RoadmapService], pathMatch: 'full' }
]