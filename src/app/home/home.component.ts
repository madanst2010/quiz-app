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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Questions : Question[] = [];
  constructor(private http: HttpClient) { }
  isDisabled : boolean = true
  showAns : boolean[] = []
  ngOnInit(): void {
  }
  getData() {
    let url = "http://127.0.0.1:8000/start"
    return this.http.get(url, {observe: "response"});
  }
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
        this.showAns = []
        data = data.body;
        data.map((res : any, index: number) => {
        this.Questions.push(res) 
        this.showAns.push(false)
       })
      }
    })
  }
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
  showAnswer(id : number) {
    this.showAns[id] = true;
  }
}
