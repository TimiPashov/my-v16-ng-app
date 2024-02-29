import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "../models/article.model";


@Injectable()
export class ArticleService {
    constructor(
        private http: HttpClient
    ) { }

    getAllArticles(): Observable<Article[]> {
        const url = 'http://localhost:3000/';
        return this.http.get<Article[]>(url, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }

}