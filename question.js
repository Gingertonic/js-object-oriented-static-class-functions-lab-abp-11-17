'use strict';

class Question {
  constructor(question){
    this.question: question,
    save(this)
  }
  static All() {
    return Question._All;
  }

  save() {
    Question._All.push(this);
  }
}

Question._All = [];
