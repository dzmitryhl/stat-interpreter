import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";

const APP_ROUTES = [
  {path: '', component: AppComponent},
  {path: 'matches', loadChildren: 'app/matches/matches.module#MatchesModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
