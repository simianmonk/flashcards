import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flashcards-app';
  consonants='bcdfghjklmnpqrstvwxz';
  vowels='aeiou';

  firstLetter = this.consonants.charAt(Math.floor(Math.random() * this.consonants.length));
  secondLetter = this.vowels.charAt(Math.floor(Math.random() * this.vowels.length));
  thirdLetter = this.consonants.charAt(Math.floor(Math.random() * this.consonants.length));

  randomizeWord() {
    this.firstLetter = this.consonants.charAt(Math.floor(Math.random() * this.consonants.length));
    this.secondLetter = this.vowels.charAt(Math.floor(Math.random() * this.vowels.length));
    this.thirdLetter = this.consonants.charAt(Math.floor(Math.random() * this.consonants.length));
  
  }
}
