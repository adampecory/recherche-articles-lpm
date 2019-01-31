import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Article } from './article';
import { LISTE_ARTICLES } from './article_mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor( private messageService : MessageService ) {}
  

  getArticles() : Observable<Article[]> {
    //this.messageService.clear();
    //this.messageService.add('Tous les articles');
    return of(LISTE_ARTICLES);
  }
}