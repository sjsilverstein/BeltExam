import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets : any[];

  constructor(private _httpService: HttpService) {
    this.getPets();
   }

  ngOnInit() {
  }
  getPets(){
    console.log("Get all the Pets");
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      this.pets = data['pets'];
      console.log(this.pets)
      this.pets.sort(function(a, b){
        var typeA=a.type.toLowerCase(), typeB=b.type.toLowerCase()
        if (typeA < typeB){ //sort string ascending
         return -1 
        }
        if (typeA > typeB){
          return 1
        }
        return 0 //default return value (no sorting)
      });
      console.log(this.pets)
    });
  }
  // hashCode(string){
  //   var hash = 0, i, chr;
  //   if (string.length === 0) return hash;
  //   for (i = 0; i < string.length; i++) {
  //     chr   = string.charCodeAt(i);
  //     hash  = ((hash << 5) - hash) + chr;
  //     hash |= 0; // Convert to 32bit integer
  //   }
  //   return hash;
  // };
  
}
