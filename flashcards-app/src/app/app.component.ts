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
  //sightWords = ["can", "see", "little", "more", "any", "she"];
  sightWords = ["can", "what", "of", "for", "this", "no", "have", "little", "two", "one", 
  "are", "you", "put", "bug", "look", "with", "sit", "to", "saw", "my", "a", "is", "I", "said", 
  "want", "here", "she", "we", "play","jump", "jog","dog","the", "has", "he", "go", "big", 
  "me", "see", "and", "like", "come"];
  //sightWords = ["a", "b", "c", "d", "e", "f"];
  targetSightWords = [...this.sightWords];
  

  firstLetter = this.consonants.charAt(Math.floor(Math.random() * this.consonants.length));
  secondLetter = this.vowels.charAt(Math.floor(Math.random() * this.vowels.length));
  thirdLetter = this.consonants.charAt(Math.floor(Math.random() * this.consonants.length));

  targetIndex = Math.floor(Math.random() * this.targetSightWords.length);
  targetWord = this.targetSightWords[this.targetIndex];
  targetSightWordsLength = this.targetSightWords.length;
  orderArray = [];
  

  randomizeWord() {
    this.firstLetter = this.consonants.charAt(Math.floor(Math.random() * this.consonants.length));
    this.secondLetter = this.vowels.charAt(Math.floor(Math.random() * this.vowels.length));
    this.thirdLetter = this.consonants.charAt(Math.floor(Math.random() * this.consonants.length));
  }

  randomizeSightWord() {
    this.targetSightWords.splice(this.targetIndex,1);
    if(this.targetSightWords.length == 0) this.targetSightWords = [...this.sightWords];
    this.orderArray.unshift(this.targetWord);
    this.targetIndex = Math.floor(Math.random() * this.targetSightWords.length);
    this.targetWord = this.targetSightWords[this.targetIndex];
    this.targetSightWordsLength = this.targetSightWords.length;
  }
}
