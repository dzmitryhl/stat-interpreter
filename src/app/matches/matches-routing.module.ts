import { MatchListComponent } from './match-list/match-list.component';
import { RouterModule } from '@angular/router';
import { DataImportComponent } from './data-import/data-import.component';
import { MatchesComponent } from './matches.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth-guard.service';

const matchesRoutes: Routes = [
    { path: '', component: MatchesComponent, children: [
        { path: '', component: MatchListComponent }, //, canActivate: [AuthGuard]
        { path: 'data-import', component: DataImportComponent } //, canActivate: [AuthGuard]
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(matchesRoutes)
    ],
    exports: [RouterModule]
})

export class MatchesRoutingModule {}
