import { Article } from "../models/article.model";
import { data } from "./seed";

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = [];

        for (let article of data) {

            articles.push(article);
        }

        return articles;
    }
}

