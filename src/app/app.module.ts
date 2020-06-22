import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { AudiComponent } from './audi/audi.component';
import { MercComponent } from './merc/merc.component';

import { NavbarComponent } from './navbar/navbar.component';

const carRouter: Routes = [
  {path: "", component: Demo2Component},
  {path: "audi", component: AudiComponent},
  {path: "merc", component: MercComponent},
  {path: "cont", component: DemoComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    AudiComponent,
    MercComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(carRouter),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
