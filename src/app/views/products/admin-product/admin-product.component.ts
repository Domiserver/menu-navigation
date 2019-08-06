import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../../utilities/router.animation';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class AdminProductComponent implements OnInit {

  toggleField: string;

  constructor() { }

  ngOnInit() {
  }
  
  toggle(filter?) {
    if (!filter) {filter = "searchMode"}
    else { filter = filter; }
    this.toggleField = filter;
  }
}
