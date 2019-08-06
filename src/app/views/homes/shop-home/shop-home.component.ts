import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../../utilities/router.animation';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class ShopHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
