import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Pet Shelter';
  authors;
  constructor(private _httpService: HttpService, 
              private _route: ActivatedRoute,
              private _router: Router) {
    this.getAuthors();
   }
   getAuthors(){
    //  console.log('Getting all of the Authors');
    //  let observable = this._httpService.getPets();
    //  observable.subscribe(data => {
    //    this.authors = data['authors'];
    //  })
   }
   ngOnInit(){
    this._router.navigate(['/']);
   }
}
