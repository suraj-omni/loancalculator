import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent implements OnInit {

  heading = 'Form Layouts';
  subheading = 'Please fill your personal data.';
  icon = 'fa-calculator text-success';

  constructor() {
  }

  ngOnInit() {
  }

}
