import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss'],
  animations: [routerTransition()]
})
export class HeaderHomeComponent implements OnInit {


  constructor(public router: Router) {
  }

  ngOnInit() {

  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }

}


