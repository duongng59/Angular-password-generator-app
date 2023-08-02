import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  event!: Event;
  title = 'pw';
  includeLetter = false;
  includeSymbiol = false;
  includeNumber = false;
  pasword = ""
  length = 0
  onButton() {
    if (!this.length) 
    { alert("the value's input is noy available. It must be a number and have at least 1 charactor") }
    else {
      const number = "123456789"
      const letter = "qbcdefghijklmnoptuvqrxwyz"
      const symbol = "~!@#$%^&*())_+-"
      let validchar = ''

      if (this.includeLetter) {
        validchar += letter;
      }
      if (this.includeNumber) {
        validchar += number;
      }
      if (this.includeSymbiol) {
        validchar += symbol;
      }
      let generatePassword = ""
      if (!this.includeLetter && !this.includeNumber && !this.includeSymbiol) 
      { generatePassword = ""
    alert("you have't choose any options" )}
      else {
        for (let i = 0; i < this.length; i++) {
          const index = Math.floor(Math.random() * validchar.length)


          generatePassword += validchar[index]
        }
      }

      this.pasword = generatePassword

    }
  }
  onChangedUseLetterMed() {
    this.includeLetter = !this.includeLetter;

  }
  onChangedUseSymbolMed() {
    this.includeSymbiol = !this.includeSymbiol;
  }
  onChangedUseNumberMed() {
    this.includeNumber = !this.includeNumber;
  }
  onChangeLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedVal = parseInt(target.value);

    if (!isNaN(parsedVal)) {
      this.length = parsedVal
    }

  }

}
