import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { CustomCompComponent } from './custom-comp/custom-comp.component';
import { ArticleService } from './services/article.service';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    CustomCompComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
