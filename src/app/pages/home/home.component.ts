import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewChecked {
  animate: boolean = false;
  changeColor: boolean = false;
  activateNameColor: boolean = true;

  toggleAnimate() {
    this.animate = !this.animate;
  }

  toggleColor() {
    this.changeColor = !this.changeColor;
  }

  ngAfterViewChecked() {
    this.activateNameColor = false;
  }
}
