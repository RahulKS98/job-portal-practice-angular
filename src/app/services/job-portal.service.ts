import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class JobPortalService {

  constructor(public http: HttpClient) {
  }

  public headers: any = new HttpHeaders({
    'Content-Type': 'json'
  })

  /**
   * Get Job postings
   */
  getJobPostings(): Observable<any> {
    return this.http.get('https://hacker-news.firebaseio.com/v0/jobstories.json', {headers: this.headers});
  }

  /**
   * Get Individual job posting
   * @param data
   */
  getIndividualJobPosting(data: any): Observable<any> {
    return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + data + '.json', {headers: this.headers});
  }
}
