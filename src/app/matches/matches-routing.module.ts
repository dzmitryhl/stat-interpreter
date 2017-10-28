import { MatchListComponent } from './match-list.component';
import { RouterModule } from '@angular/router';
import { DataImportComponent } from './data-import/data-import.component';
import { MatchesComponent } from './matches.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const matchesRoutes: Routes = [
    { path: '', component: MatchesComponent, children: [
        { path: '', component: MatchListComponent },
        { path: 'data-import', component: DataImportComponent}
    ] }
];

@NgModule({
    imports: [
        RouterModule.forChild(matchesRoutes)
    ],
    exports: [RouterModule]
})

export class MatchesRoutingModule {}
