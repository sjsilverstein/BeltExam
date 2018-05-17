import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  //name: "", type: "" , description: "", skill1: "", skill2:"", skill3:""
  newPet = {};
  errorL;
  constructor(private _httpService: HttpService,
              private _route: ActivatedRoute,
              private _router: Router) {}

  ngOnInit() {
  }
  newPetForm(){
    let observable = this._httpService.createPet(this.newPet);
    observable.subscribe(data=>{
      console.log(data);
      if(data['status'] == 'errors'){
        this.errorL = data['errors']
        console.log(this.errorL);
      }else{
      this._router.navigate(['/'])
      }
    });
  }

}
