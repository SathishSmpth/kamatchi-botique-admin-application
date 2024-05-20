import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './app-logo.component.html',
  styleUrl: './app-logo.component.scss'
})
export class AppLogoComponent {

}
