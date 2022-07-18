import { Component, OnInit } from '@angular/core';

import { ingredients } from '../ingredients';

@Component({
  selector: 'app-recipepage',
  templateUrl: './recipepage.component.html',
  styleUrls: ['./recipepage.component.css']
})
export class RecipepageComponent implements OnInit {

  ingredients = [...ingredients];

  constructor() { }

  ngOnInit(): void {
  }

};


