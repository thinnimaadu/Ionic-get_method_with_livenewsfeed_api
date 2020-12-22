import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndianewsService } from '../indianews.service';

@Component({
  selector: 'app-indianews',
  templateUrl: './indianews.page.html',
  styleUrls: ['./indianews.page.scss'],
})
export class IndianewsPage implements OnInit {

  data: any;

  constructor(private indianewsService: IndianewsService, private router: Router) { }

  ngOnInit() {
    this.indianewsService.getData('top-headlines?country=in').subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  onGoToNewsSinglePageIndia(article){
    this.indianewsService.currentArticle = article;
    this.router.navigate(['/indianewssingle']);
    
  }
}
