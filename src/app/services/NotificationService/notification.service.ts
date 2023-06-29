import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

/* 

this will only generate Notification fo the global error handling --> server + client side error handling


 */

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    // this.snackBar.open(message);
    console.log("errorNotifcation success",message)
  }
  
  showError(message: string): void {
    // The second parameter is the text in the button. 
    // In the third, we send in the css class for the snack bar.
    // this.snackBar.open(message, 'X', {panelClass: ['error']});
    console.trace("error trace ")
    console.log("ERROR",message)
  }
}
