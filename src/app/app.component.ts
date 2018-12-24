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
  answers: any[];
  slide: any;
  counter: number = 0;
  priv: number;
  next: number;
  saveanswer: any[] = [];
  Value: any;
  option: any;
  selectedopt: any;

  
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    // this.index= 0;
    // var i = this.index;
    this.quizService.getQuestions().subscribe(res => {
      this.quizes.push(res.data);
      this.answers = res.data;
      this.slide = res.data;
    
      // console.log(this.answers);
      console.log(this.quizes);
    }, error => {
      console.log(error);
    })
  }

  nextQuestion(value: any): void {
    console.log(value)
    this.priv = this.counter;
    // console.log(this.question);
    if (this.quizes[0].length > this.counter) {
      // const element = this.quizes[0].this.counter
      // this.question = element[this.counter].Question;
      this.counter = this.counter + 1;
      this.saveanswer.push(this.option);
      // this.saveanswer.push(this.slide);
      console.log(this.saveanswer);
    } else {
      console.log(this.quizes);
    }
  }

  previousQuestion(): void {

    if (this.quizes[0].data > this.priv) {
      
      // console.log(this.question); 
      
      const element = this.quizes[0].this.counter
        this.question = element[this.counter].Question;
        this.selectedopt = this.saveanswer[this.priv].option;
        if(element.Control.MetaData) {
          this.next = this.counter;
          // this.priv = this.next;
          this.selectedopt = this.saveanswer[this.priv];
          console.log(this.selectedopt);
        }
      // if(this.quizes[0].data > this.priv) {
      //   const element = this.quizes[0].this.counter
      //   this.question = element[this.counter].Question;
      //   this.selectedopt = this.saveanswer[this.priv].option;
      // }
      
      
      // console.log(this.selectedopt);

    } else {
      this.counter = this.counter - 1;
    }

  }
}

