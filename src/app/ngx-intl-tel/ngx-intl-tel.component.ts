import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NgxIntlTelService } from './ngx-intl-tel.service';

@Component({
  selector: 'ngx-intl-tel',
  templateUrl: './ngx-intl-tel.component.html',
  styleUrls: ['./ngx-intl-tel.component.scss']
})
export class NgxIntlTelComponent implements OnInit {

  @Input() inData = {};

  @Output() outData: EventEmitter<Object> = new EventEmitter<Object>();

  countryList;

  selectedCountry;

  preferredCountryCodeList = [];
  preferredCountryList = [];

  phoneNumberWithoutCountryCode = '';

  isCountryListVisible = false;
  isPhoneNumberValid = false;

  phoneNumberData = {
    selectedCountryMeta: '',
    phoneNumberWithoutCountryCode: '',
    phoneNumberInInternationalFormat: '',
    isPhoneNumberValid: false
  };

  constructor(private ngxIntlTelService: NgxIntlTelService) {

    console.log(' Constructor NgxIntlTelComponent');
  }

  ngOnInit() {

    this.countryList = this.ngxIntlTelService.getCountriesMeta();

    // console.log(this.countryList);

    this.checkForInputData();

  }

  checkForInputData() {

    if (this.inData) {

      if (this.inData['phoneNumberInInternationalFormat']) {

        let phoneNumberInfo = this.ngxIntlTelService.parsePhoneNumber(this.inData['phoneNumberInInternationalFormat']);

        if (phoneNumberInfo && phoneNumberInfo[1] && phoneNumberInfo[2]) {

          this.selectedCountry = this.ngxIntlTelService.getCountryMetaFromDialCode(phoneNumberInfo[1]);

          console.log(this.selectedCountry,phoneNumberInfo);

          this.phoneNumberWithoutCountryCode = phoneNumberInfo[2];

          this.onPhoneNumberChange();

        }

      }

      if (this.inData['preferredCountryCodeList']) {

        this.preferredCountryCodeList = this.inData['preferredCountryCodeList'];

        this.checkForPreferredCountryList();

      }
    }

  }

  onPhoneNumberChange(): void {

    if ((this.phoneNumberWithoutCountryCode + "").length > 1) {

      this.isPhoneNumberValid = this.ngxIntlTelService.validatePhoneNumber(this.phoneNumberWithoutCountryCode, this.selectedCountry);

      let validationMessage = this.ngxIntlTelService.getValidationError(this.phoneNumberWithoutCountryCode, this.selectedCountry);

      console.log(this.isPhoneNumberValid, validationMessage);

      this.setPhoneNumberData();

      this.outData.emit(this.phoneNumberData);

    }
    else {

      console.log(this.phoneNumberWithoutCountryCode);

    }

  }

  onCountrySelect(country: any, el): void {

    this.selectedCountry = country;

    this.isCountryListVisible = false;

    if ((this.phoneNumberWithoutCountryCode + "").length > 1) {

      this.isPhoneNumberValid = this.ngxIntlTelService.validatePhoneNumber(this.phoneNumberWithoutCountryCode, this.selectedCountry);

      let validationMessage = this.ngxIntlTelService.getValidationError(this.phoneNumberWithoutCountryCode, this.selectedCountry);

      console.log(this.isPhoneNumberValid, validationMessage);

      this.setPhoneNumberData();

      this.outData.emit(this.phoneNumberData);

    }
    else {

      console.log(this.phoneNumberWithoutCountryCode);

    }

    el.focus();

  }

  onInputKeyPress(event): void {

    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {

      event.preventDefault();

    }
  }

  checkForPreferredCountryList() {

    this.preferredCountryList = this.ngxIntlTelService.getPreferredCountryMeta(this.preferredCountryCodeList);

    if (this.preferredCountryList.length) {

      this.selectedCountry = this.preferredCountryList[0];

    } else {

      this.selectedCountry = this.countryList[0];
    }

  }

  setPhoneNumberData() {

    this.phoneNumberData.selectedCountryMeta = this.selectedCountry;
    this.phoneNumberData.phoneNumberWithoutCountryCode = this.phoneNumberWithoutCountryCode;
    this.phoneNumberData.phoneNumberInInternationalFormat = this.ngxIntlTelService.getPhoneInFormat(this.phoneNumberWithoutCountryCode, this.selectedCountry);
    this.phoneNumberData.isPhoneNumberValid = this.isPhoneNumberValid;
  }

}
