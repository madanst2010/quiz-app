import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }
  signInD(formData : any) {
    let url = "http://127.0.0.1:8000/signin"
    return this.http.post(url, formData, {observe: "response"})

  }
  signIn(formData : any) {
    console.log('submitted', formData);
    this.signInD(formData).subscribe((data : any)=>{
      console.log(data);
      
      if (data.status == 200) {
        console.log('successfully logged in ');
        
      } else if (data.status == 401){
        console.log('username password not match ');
        
      } else {
        console.log('error');
        
      }
    })
  }
}
