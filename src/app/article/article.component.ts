import { Component, Input } from '@angular/core';





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
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore() {
    this.articleDescLen += this.symbols;
    if (this.articleDescLen > this.articleDesc.length) {
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    }
    this.descToShow = this.articleDesc.slice(0, this.articleDescLen);
  }

  hideDesc() {
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageIsShown ? 'Hide Image' : 'Show Image';
  }
}
