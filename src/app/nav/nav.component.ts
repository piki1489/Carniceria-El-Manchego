import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const btn: HTMLElement | null = document.getElementById('button');
    const nav: HTMLElement | null = document.getElementById('nav-ul');

    if (btn && nav) {
      btn.addEventListener('click', () => {
        if (nav.classList) {
          nav.classList.toggle('toggle');
        }
      });
    }
  }
}
