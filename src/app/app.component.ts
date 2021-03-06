import { Component } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz';
  Questions : Question[] = [];
  tempAns : string[] = [];
  correctAns : string[] = [];
  correct : number = 0;
  notAttempt : number = 0;
  wrong : number = 0;
  result : boolean = false;
  constructor(private http: HttpClient) { }
  getData() {
    let url = "http://127.0.0.1:8000/start"
    return this.http.get(url, {observe: "response"});
  }
  // postData(formData: any) {
  //   console.log(formData);
    
  //   let url = "http://127.0.0.1:8000/post"
  //   return this.http.post(url, formData ,{observe: "response"});
  // }
  deleteData(id :string) {
    let url = `http://127.0.0.1:8000/delete?id=${id}`;
    return this.http.delete(url, {observe:'response'});
  }
  updateData(id :string, formData : any) {
    console.log(formData);
    let url = `http://127.0.0.1:8000/update?id=${id}`;
    return this.http.put(url, formData, {observe:'response'});
  }
  fun($event?: any) {
    if($event)
      $event.preventDefault();
      this.getData().subscribe((data : any)=>{
      if(data.status == 200) {
        this.Questions = [];
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
  // postQuestion(formData: any) {
  //   this.postData(formData).subscribe((data :any)=>{
  //     if(data.status == 200) {
  //       console.log("successfully posted");
  //     }
      
  //   })
  // }
  deleteQ(id:string) {
    console.log(id);
    this.deleteData(id).subscribe((data:any)=>{
     if(data.status == 200) {
      this.fun();
      console.log("staus");
      
     }
    })
    
  }
  updateQ(id:string) {
    console.log(id);
    let formData = {
      question : 'hello',
      option1 : '1',
      option2 : '2',
      option3 : '3',
      option4 : '4',
    }
    this.updateData(id, formData).subscribe((data:any)=>{
     if(data.status == 200) {
      this.fun();
      console.log("staus");
     }
    })
    
  }
}
