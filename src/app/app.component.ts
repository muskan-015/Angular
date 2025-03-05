import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  standalone: true,
  imports: [FormsModule] 
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";  
  logoPath: string = "D:/Angular/Angular_App/assets/BL_logo_square_jpg.jpg";   
  userName: string = "";

  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}