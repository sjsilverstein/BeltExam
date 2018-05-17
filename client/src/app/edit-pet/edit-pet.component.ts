import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  pet;
  id;
  errorL;

  constructor(private _httpService: HttpService,  
              private _route: ActivatedRoute,
              private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id']
      this.getPetService(this.id);      
    });    
  }
  getPetService(id){
    let obversable = this._httpService.getPetBy(this.id);
    obversable.subscribe(data=>{
      this.pet = data;
      console.log(this.pet);
    })
  }
  editPetForm(){
    let obversable= this._httpService.updatePet(this.pet);
    obversable.subscribe(data=>{
      console.log(data);
      if(data['status'] == 'errors'){
        this.errorL = data['errors']
        console.log(this.errorL);
      }else{
      this._router.navigate(['/details/'+this.id])
      }
    });
  }
  
}
