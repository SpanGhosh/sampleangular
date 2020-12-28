import { Component, Input, OnInit } from '@angular/core';
import { ErrorObj } from '../form-error';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit {

  constructor() { }

  @Input() errorObj : ErrorObj = {}

  ngOnInit(): void {
  }

}
