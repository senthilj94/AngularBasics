import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LckparentComponent } from './lifecyclehooks/lckparent/lckparent.component';
import { LckchildComponent } from './lifecyclehooks/lckchild/lckchild.component';
import { InputoutputparentComponent } from './inputoutput/inputoutputparent/inputoutputparent.component';
import { InputoutputchildComponent } from './inputoutput/inputoutputchild/inputoutputchild.component';
import { TemplaterefparentComponent } from './templatereference/templaterefparent/templaterefparent.component';
import { StructdirparentComponent } from './structuraldirectives/structdirparent/structdirparent.component';


@NgModule({
  declarations: [
    AppComponent,
    LckparentComponent,
    LckchildComponent,
    InputoutputparentComponent,
    InputoutputchildComponent,
    TemplaterefparentComponent,
    StructdirparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
