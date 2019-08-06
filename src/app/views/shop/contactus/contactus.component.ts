import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../../utilities/router.animation';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
