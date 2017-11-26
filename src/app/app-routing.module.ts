import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    { path: '', component: StartPageComponent, pathMatch: 'full' },
    { path: 'signup', component: SignupComponent, pathMatch: 'full' },
    { path: 'signin', component: SigninComponent, pathMatch: 'full' },
    { path: 'matches', loadChildren: './matches/matches.module#MatchesModule' }
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule {

}