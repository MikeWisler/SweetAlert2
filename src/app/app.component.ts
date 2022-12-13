import { useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-alert-box-example';


  

  simpleAlertBox() {
    Swal.fire('This was a simple alert box with one line of code');
}

alertConfirmation() {
  Swal.fire({
      title: 'Buy Product X',
      text: 'This product is invincible.',
      icon: 'warning', //can be success 
      showConfirmButton: true,
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      denyButtonText: 'No',
      //timer: 3000, //automatically remove dialog after x milliseconds
      allowOutsideClick: false,
      showClass: {
        popup: 'animate__animated animate__zoomInUp'
    },
    hideClass: {
        popup: 'animate__animated animate__zoomInDown'
    }
  }).then((result) => {
    debugger
      if (result.value) {
          Swal.fire(
              'Purchased!',
              'Product was added to your cart.',
              'success'
          )
      } else if (result.isDenied) {
          Swal.fire(
              'Removed',
              'Product was removed from your cart.',
              'error'
          )
      }
      else if (result.isDismissed){
        Swal.fire(
          'Cancelled',
          'Cancel selected.',
          'info'
      )
      }
  })
}

}
