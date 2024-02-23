import { Component } from '@angular/core';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {

  data = new ArticleData().getData();;

  constructor() { }
  
}
