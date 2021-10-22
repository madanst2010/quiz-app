import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  postData(formData : any) {
    let url = "http://127.0.0.1:8000/signup"
    return this.http.post(url, formData, {'observe' : 'response'})

  }
  submitData(formData : any) {
    console.log('submitted', formData);
    this.postData(formData).subscribe((data)=>{
      if (data.status == 200) {
        console.log('success', data.body);
        
      }
    })
  }
}
