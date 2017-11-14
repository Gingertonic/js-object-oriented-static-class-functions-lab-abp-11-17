'use strict';

class Question {
  constructor(question) {
    this.content = question
    this.save() 
  }

  static All() {
    return Question._All;
  }

  // save() {
  //   Question._All.push(this);
  // }

  save(){
   this.constructor._All.push(this)
 }
}

Question._All = [];
