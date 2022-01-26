import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce, bounceOutUp } from 'ng-animate';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('bounce', [
      transition('void  => *', useAnimation(bounce)),
      transition('*  => void', useAnimation(bounceOutUp, {
        params: {
          timing: 3,
          delay: 0.3
        }
      })),

    ]),
  ]
})
export class AnimateComponent implements OnInit {
  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
