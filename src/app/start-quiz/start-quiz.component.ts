import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Question {
  id:string,
  question : string,
  option1 : string,
  option2 : string,
  option3 : string,
  option4 : string,
  ans: string,
}
@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent implements OnInit {
  p: number = 1;
  last : any
  Questions : Question[] = [];
  tempAns : string[] = [];
  correctAns : string[] = [];
  correct : number = 0;
  notAttempt : number = 0;
  wrong : number = 0;
  result : boolean = false;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  getData() {
    let url = "http://127.0.0.1:8000/start"
    return this.http.get(url, {observe: "response"});
  }
  fun($event?: any) {
    if($event)
      $event.preventDefault();
      this.getData().subscribe((data : any)=>{
      if(data.status == 200) {
        this.Questions = [];
        this.last = data.body.length;
        console.log(this.last);
        
        data = data.body;
        data.map((res : any, index: number) => {
        this.Questions.push(res) 
        this.correctAns.push(res.ans);
        this.tempAns.push('')
       })
      }
    })
  }
  submitQuiz() {
    let len = this.Questions.length;
    for (let i = 0; i < len; i++) {
      if (this.correctAns[i] == this.tempAns[i]) {
        this.correct++;
      } else if (this.tempAns[i] == '' || this.notAttempt == undefined) {
        this.notAttempt++;
      }
    }
    this.wrong = len - this.notAttempt - this.correct;
    this.result = true;
  }
  
}
