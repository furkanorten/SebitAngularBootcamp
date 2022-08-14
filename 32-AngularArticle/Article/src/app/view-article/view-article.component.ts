import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.css']
})
export class ViewArticleComponent implements OnInit {

  articleId: any
  articlesData:Array<any> = []
  username: string  =""
  comment: string  =""

  constructor(
    private route:ActivatedRoute,
    private articleSercive:ArticleService,
    private _snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('articleIndex')
    this.articleSercive.getArticles().subscribe((res) => {
      this.articlesData = res
    })
  }

  addComment() {
    if(this.username == '' || this.comment == '') {
      this._snackBar.open('Lütfen tüm alanları doldurunuz', 'Kapat')
    }
    else {
      const request = {
        username: this.username,
        comment: this.comment
      }
      this.articlesData[this.articleId].comments.push(request)
      this.articleSercive.updateArticle(this.articlesData[this.articleId]).subscribe((res) => {
        this.username = ''
        this.comment = ''
      })
    }

  }

}
