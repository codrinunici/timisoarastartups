import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ApiService } from './../../api/api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  providers: [ApiService]
})
export class ArticleComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean>;
  content = '';

  constructor(private api: ApiService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.destroy$ = new Subject();
    this.api.getArticle(this.activeRoute.snapshot.params.id)
      .pipe(
        takeUntil(this.destroy$))
      .subscribe(article => this.content = article.data().content)
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}

export interface Article {
  uid: string,
  title: string,
  subtitle: string,
  content: string
}
