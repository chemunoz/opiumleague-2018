import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter  } from 'rxjs/operators';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Opium League';

  constructor(private router:Router){
    const navEndsEvents$ = this.router.events.pipe(filter(event => event instanceof NavigationEnd));
    navEndsEvents$.subscribe((event:NavigationEnd) => {
      gtag('config', 'UA-92241042-3', { 'page_path': event.urlAfterRedirects});
    });
  }
}