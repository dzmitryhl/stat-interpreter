import {Routes, RouterModule} from "@angular/router";
import {MatchesComponent} from "./matches.component";
import {MatchListComponent} from "./match-list.component";
import {DataImportComponent} from "./data-import/data-import.component";
const MATCHES_ROUTES: Routes = [
  { path: '', component: MatchesComponent, children: [
    { path: '', component: MatchListComponent },
    { path: 'data-import', component: DataImportComponent }
  ]}
];

export const matchesRouting = RouterModule.forChild(MATCHES_ROUTES);
