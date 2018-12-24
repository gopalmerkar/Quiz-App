import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {} from './'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = `http://139.162.231.12:8090/api/`;

  constructor(private httpClient: HttpClient) { }

  /////////////////////// Get All Questions and 4 options ////////////////////////////////////////////////////////
        getQuestions(): Observable<any> {
          return this.httpClient.get<any>(this.baseUrl + `v1/getallquestionslist`);
        }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

}





