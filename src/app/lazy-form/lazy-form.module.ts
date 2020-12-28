import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPageComponent } from './form-page/form-page.component';
import { LazyFormRoutingModule } from './lazy-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-page/form-error/form-error.component';



@NgModule({
  declarations: [FormPageComponent, FormErrorComponent],
  imports: [
    CommonModule,
    LazyFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class LazyFormModule { }
