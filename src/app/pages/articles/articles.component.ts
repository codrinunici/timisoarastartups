import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { ApiService } from './../../api/api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ApiService]
})
export class ArticlesComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean>;
  articles: Article[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.destroy$ = new Subject();
    this.api.getArticles()
      .pipe(
        takeUntil(this.destroy$),
        map(data => data.docs.map(doc => ({ uid: doc.id, ...doc.data() })))
      ).subscribe((articles: Article[]) => {
        this.articles = articles;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}

export interface Article {
  uid: string,
  title: string,
  content: string
}
