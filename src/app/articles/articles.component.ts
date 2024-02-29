import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article.model';



@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  data: Article[] = [];


  constructor(
    public articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(data => this.data = data);
    console.log(this.data);
  }

}
