import { Component, OnInit } from '@angular/core';
import { IndianewsService } from '../indianews.service';

@Component({
  selector: 'app-indianewssingle',
  templateUrl: './indianewssingle.page.html',
  styleUrls: ['./indianewssingle.page.scss'],
})
export class IndianewssinglePage implements OnInit {

  article;

  constructor(private indianewsService: IndianewsService) { }

  ngOnInit() {
    this.article = this.indianewsService.currentArticle;
    console.log(this.indianewsService.currentArticle);
  }

}
