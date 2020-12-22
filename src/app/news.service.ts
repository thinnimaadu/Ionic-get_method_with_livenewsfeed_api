import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://newsapi.org/v2";
const API_KEY = "d0b5a6dbb3b348d6a81341951ddea42c";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(url){

    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);

  }

}
