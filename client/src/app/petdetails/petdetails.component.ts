import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-petdetails',
  templateUrl: './petdetails.component.html',
  styleUrls: ['./petdetails.component.css']
})
export class PetdetailsComponent implements OnInit {

  pet;
  id;
  errorL;
  isLiked = false;

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
  deletePet(id){
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data =>{
      if(data['status'] == 'errors'){
        this.errorL = data['errors']
        console.log(this.errorL);
      }else{
      this._router.navigate(['/'])
      }
    });
  }
  likePet(likedPet){
    likedPet.likes++;
    this.isLiked = true;

    let obversable= this._httpService.updatePet(likedPet);
    obversable.subscribe(data=>{
      if(data['status'] == 'errors'){
        this.errorL = data['errors'];
      }
    });

  }

}
