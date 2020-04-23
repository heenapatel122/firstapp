import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./sidebar.component.scss']

})
export class AppComponent {
  title = 'My-page';
  isShown: boolean = false;

  checkSidebar() {

  }
}
