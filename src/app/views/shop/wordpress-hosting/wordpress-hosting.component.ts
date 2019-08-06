import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../../utilities/router.animation';


@Component({
  selector: 'app-wordpress-hosting',
  templateUrl: './wordpress-hosting.component.html',
  styleUrls: ['./wordpress-hosting.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class WordpressHostingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
