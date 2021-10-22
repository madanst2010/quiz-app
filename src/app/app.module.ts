import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { PostDataComponent } from './post-data/post-data.component';
import { HomeComponent } from './home/home.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    PostDataComponent,
    HomeComponent,
    StartQuizComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
    MatPaginatorModule,
    NgxPaginationModule,
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
