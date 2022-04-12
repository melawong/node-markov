/** Textual markov chain generator. */

// const fsP = require("fs/promises");

// async function getText() {

//   const cummingsTxt = await fsP.readFile("./cummings.txt", "utf-8");
//   return cummingsTxt;
// }

class MarkovMachine {

  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   *
   * */

  getChains() {
    // TODO: implement this!
    //each word is a key and the value is the next key.
    const markovChain = {};
    for (let i = 0; i < this.words.length; i++) {
      if (i === this.words.length - 1) {
        markovChain[this.words[i]] = [null];
        return markovChain;
      }

      if (markovChain[this.words[i]]) {
        markovChain[this.words[i]].push(this.words[i + 1]);
      } else {
        markovChain[this.words[i]] = [this.words[i + 1]];
      }
    }
  }


  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!

    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null
    let newText = this.words[0];
    let currWord = this.words[0];

    //while chains has values and not null,
    //when reaches null, break
    while (currWord !== null) {
      let randomWord = getRandomWord(this.chains[currWord]);
      if (randomWord !== null) {
        newText +=  " " + randomWord;
      }
      currWord = randomWord;
    }
    return newText;
  }
}


function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}