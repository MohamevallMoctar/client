import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  http = inject(HttpClient)
  title = 'Dating app';
  users : any;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res) => {
        this.users = res
        console.log(this.users[0])
      },
      error: (error) => {console.log(error)},
      complete: () => {console.log('completed')}
    })
  }
}
