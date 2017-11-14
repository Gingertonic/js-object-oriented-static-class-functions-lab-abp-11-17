'use strict';

class Question {

  }
  static All() {
    return Question._All;
  }

  save() {
    Question._All.push(this);
  }
  constructor(question){
    // this.content: question
  }
}

Question._All = [];
