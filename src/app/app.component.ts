import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";  
  logoPath: string = "E:/Capg/Angular/my-angular-app/public/BL_logo_square_jpg.jpg";   

  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}