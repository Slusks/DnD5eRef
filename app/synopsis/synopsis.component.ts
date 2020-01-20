import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss']
})
export class SynopsisComponent implements OnInit {
//https://angular.io/guide/reactive-forms
  totalForm = new FormGroup({
    formTagline: new FormControl(''),
    formContent: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

  }


  updateStory(){
    console.log(this.totalForm.value.formTagline)
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.totalForm.value);
  }

//===============================================================
  //Steps the accordion panel, from angular material accordion
  step = 0;
  setStep(index:number){
    this.step =index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
//===============================================================




}
