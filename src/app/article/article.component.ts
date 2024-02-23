import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';




@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  private symbols: number = 250;
  @Input() article: any;
  @Input() articleDesc: any;
  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = true;
  imageButtonTitle: string = "Show Image";

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(){

  }

  hideDesc(){

  }

  toggleImage(){
    
  }
}
