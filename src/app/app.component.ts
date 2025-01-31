import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wish-item';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wishItems = [
    new WishItem('Learn Angular', false),
    new WishItem('Build a website', false),
    new WishItem('Travel the world', false)
  ];
  title = 'Wish List';
}
