import { boxAnimation } from './app.animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [boxAnimation]
})
export class AppComponent {
  boxState = 'start';
  visible = true;

  animate(): void {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  animationStarted(event: any): void {
    console.log('animationStarted', event);
  }

  animationDone(event: any): void {
    console.log('animationDone', event);
  }
}
