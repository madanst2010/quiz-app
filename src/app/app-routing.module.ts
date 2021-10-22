import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDataComponent } from './post-data/post-data.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';

const routes: Routes = [
  { path : 'post', component :  PostDataComponent},
  { path : 'home', component :  HomeComponent},
  { path : 'start', component :  StartQuizComponent},
  { path : 'signup', component :  SignupComponent},
  { path : 'signin', component :  SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
