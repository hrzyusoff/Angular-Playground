import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../../_services/news/news.service';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.css'],
  providers: [NewsService]
})
export class SocialShareComponent implements OnInit {

  news = { 
    articles: [] 
  };
  
  constructor(private http: HttpClient, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadlines().subscribe(response => { console.log(this.news = response.json())});
  }

}
