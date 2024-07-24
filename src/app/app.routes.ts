import { Routes } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: 'roadmap', pathMatch: 'full' },
    { path: 'roadmap', loadChildren: () => import('./roadmap/roadmap.routes').then((m) => m.RoadmapRoutes) },
    { path: 'guesser', loadChildren: () => import('./guesser/guesser.routes').then((m) => m.GuesserRoutes) },
];