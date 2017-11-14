'use strict';

class Question {
  constructor(content){
    this.content: content
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
