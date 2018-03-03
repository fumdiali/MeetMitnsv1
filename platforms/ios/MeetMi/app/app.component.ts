import { Component } from "@angular/core";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "my-app",
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Your TypeScript logic goes here

  forCasual() {
    dialogs.confirm({
    title: "This is the Casuals' Room",
    message: "Are you looking for a fling?",
    neutralButtonText: "Not sure",
    cancelButtonText: "No",
    okButtonText: "Yes"
  }).then(result => {
    // result argument is boolean
    console.log("Dialog result: " + result);
      });
  }

  forExclusive() {
    dialogs.confirm({
    title: "This is the Exclusives' Room",
    message: "Do you want a serious,long-term relationship?",
    neutralButtonText: "Not sure",
    cancelButtonText: "No",
    okButtonText: "Yes"
  }).then(result => {
    // result argument is boolean
    console.log("Dialog result: " + result);
      });
  }

  forMarriage() {
    dialogs.confirm({
    title: "This is the Marriages' Room",
    message: "Is it your goal to get a spouse quickly?",
    neutralButtonText: "Not sure",
    cancelButtonText: "No",
    okButtonText: "Yes"
  }).then(result => {
    // result argument is boolean
    console.log("Dialog result: " + result);
      });
  }

}// end of class
