import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { AppModule } from './app.module';
import {ServerModule} from '@angular/platform-server'
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
