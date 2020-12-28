import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorObj } from './form-error';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  loginForm = this.fb.group(
    {
      name : ['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      email : ['',[Validators.email,Validators.required]],
      age : ['',[Validators.required,Validators.max(100),Validators.min(18),Validators.pattern("^[0-9]*$")]]
    }
   )

   nameError : ErrorObj = {}
 
   emailError : ErrorObj = {}
  
   ageError : ErrorObj = {} 
  

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(()=>{
      if(this.loginForm.get("name")?.dirty){
        this.nameError.required = this.loginForm.get("name")?.hasError("required")
        this.nameError.pattern = this.loginForm.get("name")?.hasError("pattern")
      }
      if(this.loginForm.get("email")?.dirty){
        this.emailError.required = this.loginForm.get("email")?.hasError("required")
        this.emailError.email = this.loginForm.get("email")?.hasError("email")
      }
      if(this.loginForm.get("age")?.dirty){
        this.ageError.required = this.loginForm.get("age")?.hasError("required")
        this.ageError.min = this.loginForm.get("age")?.hasError("min")
        this.ageError.max = this.loginForm.get("age")?.hasError("max")
        this.ageError.pattern = this.loginForm.get("age")?.hasError("pattern")
      }
    })
    
    
  }

  onSubmit(){
    alert(JSON.stringify(this.loginForm.value))
  }

}
