import { Component, OnInit } from '@angular/core';
import APP_CONFIG from 'src/app/config';
import { IUser } from 'src/app/core/domain/models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = APP_CONFIG.Name;
  user: IUser;

  constructor() {
  }

  ngOnInit() {
  }

}
