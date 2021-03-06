import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LckparentComponent } from './lifecyclehooks/lckparent/lckparent.component';
import { LckchildComponent } from './lifecyclehooks/lckchild/lckchild.component';
import { InputoutputparentComponent } from './inputoutput/inputoutputparent/inputoutputparent.component';
import { InputoutputchildComponent } from './inputoutput/inputoutputchild/inputoutputchild.component';
import { TemplaterefparentComponent } from './templatereference/templaterefparent/templaterefparent.component';
import { StructdirparentComponent } from './structuraldirectives/structdirparent/structdirparent.component';
import { StylesparentComponent } from './styles/stylesparent/stylesparent.component';
import { StyleschildComponent } from './styles/styleschild/styleschild.component';
import { HostparentComponent } from './hostbinding/hostparent/hostparent.component';
import { HostchildComponent } from './hostbinding/hostchild/hostchild.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomstructuralDirective } from './directives/customstructural.directive';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { AppendPipe, FilterPipe } from './pipes/pipe/custom.pipe';
import { ObservableComponent } from './observables/observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    LckparentComponent,
    LckchildComponent,
    InputoutputparentComponent,
    InputoutputchildComponent,
    TemplaterefparentComponent,
    StructdirparentComponent,
    StylesparentComponent,
    StyleschildComponent,
    HostparentComponent,
    HostchildComponent,
    HighlightDirective,
    CustomstructuralDirective,
    PipeComponent,
    AppendPipe,
    FilterPipe,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
