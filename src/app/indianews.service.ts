import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL_INDIA = "http://newsapi.org/v2";
const API_KEY_INDIA = "d0b5a6dbb3b348d6a81341951ddea42c";

@Injectable({
  providedIn: 'root'
})
export class IndianewsService {

  currentArticle: any;

  constructor(private http: HttpClient) { }

  getData(url){

    return this.http.get(`${API_URL_INDIA}/${url}&apiKey=${API_KEY_INDIA}`);

  }

}
