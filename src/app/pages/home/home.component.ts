import { Component, OnInit} from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl : "./home.components.html" ,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  form : FormGroup;
  constructor(
    public fb : FormBuilder
  ) {
    this.buildControl()
   }
  

  ngOnInit(): void {
    
  }

  buildControl(){
    this.form = this.fb.group({
      text : [""],
      email : ["",[Validators.required,Validators.email]],
      name : [],
      date : [],
      category : [],
      gender : []
    })
  }

  emailget(){
    return this.form.get("email")
  }

  emainIsValid(){
    return this.emailget().touched && this.emailget().valid
  }

  emailIsInvalid()
  {
    return this.form.controls["email"].touched && this.form.controls["email"].invalid
  }

  doSomething(){
    if(this.form.invalid){
      alert("Error")
    }
  }

  save(event : Event){

  }
  

}
