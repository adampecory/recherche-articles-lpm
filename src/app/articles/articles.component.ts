import { Component, OnInit } from '@angular/core';
import { LISTE_ARTICLES } from "../article_mock";
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles = LISTE_ARTICLES;

  constructor() { }

  ngOnInit() {
  }

}
