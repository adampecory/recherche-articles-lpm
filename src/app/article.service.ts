import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from './article';
import { LISTE_ARTICLES } from './article_mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private apiUrl = 'api/articles';  // URL to web api

  constructor( private http:HttpClient,
     private messageService : MessageService ) {}
  

  getArticles() : Observable<Article[]> {
    //this.messageService.clear();
    //this.messageService.add('Tous les articles');
    //return of(LISTE_ARTICLES);
    return this.http.get<Article[]>(this.apiUrl);
  }
}