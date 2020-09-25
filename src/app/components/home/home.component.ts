import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  configForm: FormGroup;

  srcUrl: string;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.configForm = this.formBuilder.group({
      url: [null, Validators.required]
    });
  }

  submitConfig(): void {
    if (this.configForm.controls.url.errors) return;
    // console.log(this.configForm.value.url);
    this.srcUrl = this.configForm.value.url;
  }

}
