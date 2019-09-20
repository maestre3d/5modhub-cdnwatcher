import { Component, OnInit } from '@angular/core';
import APP_CONFIG from 'src/app/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = APP_CONFIG.Name;

  constructor() { }

  ngOnInit() {
  }

}
