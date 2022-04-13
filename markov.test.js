const {MarkovMachine, getRandomWord} = require("./markov.js");

describe("markov", function () {

    // beforeAll(function () {
    //     let text = "I am the cat in the hat and I like a cat with no hat.";
    //     let machine = new MarkovMachine(text);
    // });

    

    test("getChain returns an object from your input", function () {

        let text = "I am the cat in the hat and I like a cat with no hat.";
        let machine = new MarkovMachine(text);

        expect(machine.getChains()).toEqual({
            I: [ 'am', 'like' ],
            am: [ 'the' ],
            the: [ 'cat', 'hat' ],
            cat: [ 'in', 'with' ],
            in: [ 'the' ],
            hat: [ 'and' ],
            and: [ 'I' ],
            like: [ 'a' ],
            a: [ 'cat' ],
            with: [ 'no' ],
            no: [ 'hat.' ],
            'hat.': [ null ]
          })

    });

    test("getText returns a new text created from the machine.chains", function () {

        let text = "I am the cat in a hat.";
        let machine = new MarkovMachine(text);

        expect(machine.getChains()).toEqual({
            I: [ 'am' ],
            am: [ 'the' ],
            the: [ 'cat' ],
            cat: [ 'in' ],
            in: [ 'a' ],
            a: [ 'hat.' ],
            'hat.': [ null ]
          });

        expect(machine.getText()).toEqual("I am the cat in a hat.");

    });


});