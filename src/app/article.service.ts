import { Injectable } from '@angular/core';
import { Article } from './article';
import { LISTE_ARTICLES } from './article_mock';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles() : Observable<Article[]> {
    return of(LISTE_ARTICLES);
  }
}
