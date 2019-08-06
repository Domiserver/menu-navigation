import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthService } from './services/auth.service';
import { AuthDto } from './models/auth.model';
import { AppState } from './store/index'
import { LoginUser } from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    // private messageService: MessageService
  ) {}

  ngOnInit() { 
    this.store.dispatch(new LoginUser(<AuthDto>{
      username: 'luis',
      password: 'luis'
    }));
  }
}
