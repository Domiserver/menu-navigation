import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn } from '../../../utilities/router.animation';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
