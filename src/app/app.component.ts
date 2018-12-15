import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  quizes: any[] = [];
  index: number;
  question: any;
  answers: any;
  counter: number = 0;
  priv: number;
  next: number;

  constructor(private quizService: QuizService) { }

  ngOnInit():void {
    // this.index= 0;
    // var i = this.index;
    this.quizService.getQuestions().subscribe(res => {
      this.quizes.push(res.data);

      console.log(this.quizes);
    }, error => {
      console.log(error);
    })
  }
  nextQuestion():void {
    this.priv = this.counter;
    // console.log(this.question);
    if (this.quizes[0].length > this.counter) {
      // const element = this.quizes[0].this.counter
      // this.question = element[this.counter].Question;
      this.counter = this.counter + 1;
    } else {
      console.log(this.quizes);
    }
  }
  previousQuestion():void {

    if (this.quizes[0].data > this.priv) {
      // console.log(this.question);
      const element = this.quizes[0].this.counter
      this.question = element[this.counter].Question;

    } else {
      this.counter = this.counter - 1;
    }

  }
}

