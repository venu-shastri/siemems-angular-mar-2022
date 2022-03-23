import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { HtmlComponent } from './html/html.component';
import { HeadComponent } from './head/head.component';
import { TitleComponent } from './title/title.component';
import { BodyComponent } from './body/body.component';
import { H1Component } from './h1/h1.component';
import { ParagraphComponent } from './paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    HtmlComponent,
    HeadComponent,
    TitleComponent,
    BodyComponent,
    H1Component,
    ParagraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
