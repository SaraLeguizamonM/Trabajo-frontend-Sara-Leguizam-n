import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-bar',
  standalone: true,
  imports: [],
  templateUrl: './slide-bar.html',
  styleUrl: './slide-bar.css'
})
export class SlideBar {
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
