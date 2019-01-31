import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const articles = [
      {id:1, name:'Wiko esperance 9550', code_sap:'0000001234'},
      {id:2, name:'Nokia 3310', code_sap:'0000008526'},
      {id:3, name:'Microsoft Lumia 950', code_sap:'0000004567'},
      {id:4, name:'Samsung Galaxy J5', code_sap:'0000009516'},
      {id:5, name:'Huawei Econom X5', code_sap:'0000002564'},
      {id:6, name:'Huawei Honor 6', code_sap:'0000005465'}
    ];
    return {articles};
  }

  genId(articles: Article[]): number {
    return articles.length > 0 ? Math.max(...articles.map(x => x.id)) + 1 : 10;
  }
}
