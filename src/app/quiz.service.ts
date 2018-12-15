import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
// import {} from './'
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl= `http://139.162.231.12:8090/api/`;
  // C:\Users\stackmint-11\Desktop\quiz\quizApp\src\data\question.json
  constructor(private httpClient: HttpClient) { }

  // getQuizes (): Observable<any> {
  //   return this.httpClient.get<any>(this.baseUrl + `question.json`)
  // }


  getQuestions(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + `v1/getallquestionslist`);
  }
}

