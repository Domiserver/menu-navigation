import { Component, OnInit, Input } from '@angular/core';

import { BackendService } from '../../../services/backend.service';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css']
})
export class ShopHeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;
  configData;
  counter = 0;
  userStatusColor ="warn";

  constructor(private _backendService: BackendService) { }

  ngOnInit() {
    this.counter = this._backendService.getCartTotal();
    this.configData = this._backendService.getConfig();

    this._backendService.getCartTotal().subscribe(
      (res) => {
        this.counter = res;
      }
    );
    this._backendService.getUserStatus().subscribe(
      (res) => {
        this.userStatusColor = res ? "primary" : "warn";
      }
    );
  }
}
