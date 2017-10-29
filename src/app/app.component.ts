import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inData = {
    phoneNumberInInternationalFormat: "+91 8884396504",
    preferredCountryCodeList: ['in', 'us']
  };

  onChange(data) {

    console.log(data);

  }
}
