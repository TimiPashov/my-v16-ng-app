import { Component } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'custom-comp',
  templateUrl: './custom-comp.component.html',
  styleUrls: ['./custom-comp.component.css']
})
export class CustomCompComponent {
  data = new ArticleData().getData();
}

