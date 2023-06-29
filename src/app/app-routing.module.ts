import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full",
  }, 
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "trip",
    loadChildren: () =>
      import("./pages/trips/trips.module").then((m) => m.TripsPageModule),
  },
  {
    path: "tripproposals",
    loadChildren: () =>
      import("./pages/tripproposals/tripproposals.module").then(
        (m) => m.TripproposalsPageModule
      ),
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
 
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
