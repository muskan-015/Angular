import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  standalone: true,
  imports: [FormsModule, CommonModule] 
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";  
  logoPath: string = "D:/Angular/Angular_App/assets/BL_logo_square_jpg.jpg";   
  userName: string = "";
  errorMessage: string = ""; 
  validateName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; 

    if (!this.userName.match(namePattern)) {
      this.errorMessage = "Invalid name! Must start with a capital letter & have at least 3 letters.";
    } else {
      this.errorMessage = ""; 
    }
  }

  openBridgeLabz() {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
