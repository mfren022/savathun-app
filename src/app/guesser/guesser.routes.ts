import { Routes } from '@angular/router';
import { GuesserComponent, GuesserService } from './index';

export const GuesserRoutes: Routes = [
    { path: '', component: GuesserComponent, providers: [GuesserService], pathMatch: 'full' }
]