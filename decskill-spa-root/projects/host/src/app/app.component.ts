import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'host';

  constructor(private router: Router) { }


  public navigateToNewRoute(ev: string) {
    if (ev.length > 0) {
      this.router.navigate([ev]);
    }
  }
}
