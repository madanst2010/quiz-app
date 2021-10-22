import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  postData(formData: any) {
    console.log(formData);
    
    let url = "http://127.0.0.1:8000/post"
    return this.http.post(url, formData ,{observe: "response"});
  }
  postQuestion(formData: any) {
    this.postData(formData).subscribe((data :any)=>{
      if(data.status == 200) {
        console.log("successfully posted");
      }
      
    })
  }

}
