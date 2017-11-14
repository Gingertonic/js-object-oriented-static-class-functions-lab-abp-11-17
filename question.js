'use strict';

class Question {
  constructor(question){
    this.content: question,
    // save(this)
  }
  static All() {
    return Question._All;
  }

  save() {
    Question._All.push(this);
  }
}

Question._All = [];
