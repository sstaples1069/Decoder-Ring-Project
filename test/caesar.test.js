// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Function", ()=>{

    //given validations
    //"If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false"
    describe("shift input validation",()=>{
        it("returns false if there is no input for the shift", ()=>{
            const message = "validation";
            const actual = caesar(message);
            expect(actual).to.be.false;
        });

        it("returns false if the input for the shift is 0", ()=>{
            const message = "validation";
            const shift = 0;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });

        it("returns false if the shift is a value less than -25", ()=>{
            const message = "validation";
            const shift = -26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });

        it("returns false if the shift value is greater than 25", ()=>{
            const message = "validation";
            const shift = 26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
    });
    
    //functionality tests:
    describe("encoding a message",()=>{
        it("encodes messages by replacing letters with letters to the right with a positive shift in the standard alphabet", ()=>{
            const message = "secret";
            const shift = 2;
            const expected = "ugetgv";
            const actual = caesar(message, shift);
            expect(actual).to.equal(expected)
        });
        
        it("encodes messages by replacing letters with letters to the left with a negaive shift in the standard alphabet", ()=>{
            const message = "secret";
            const shift = -2;
            const expected = "qcapcr";
            const actual = caesar(message, shift);
            expect(actual).to.equal(expected)        
        });
        
        //"If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c)"
        it("wraps around the alphabet for letters at the end of the alphabet", ()=>{
            const message = "validation";
            const shift = 7;
            const expected = "chspkhapvu";
            const actual = caesar(message, shift);
            expect(actual).to.equal(expected);            
        });

        it("wraps around the alphabet for letters at the beginning of the alphabet", ()=>{
            const message = "validation";
            const shift = -7;
            const expected = "otebwtmbhg";
            const actual = caesar(message, shift);
            expect(actual).to.equal(expected);            
        });

        //"Spaces should be aintained throughout, as should other nonalphabetic symbols."
        it("should leaves spaces and other symbols as is", ()=>{
            const message = "spaces and symbols.";
            const shift = 5;
            const expected = "xufhjx fsi xdrgtqx.";
            const actual = caesar(message, shift);
            expect(actual).to.equal(expected);        
        });
        
        //"Capital letters can be ignored"
        it("ignores capital letters", ()=>{
            const message = "CaPital LeTTErs.";
            const shift = 5;
            const expected = "hfunyfq qjyyjwx.";
            const actual = caesar(message, shift);
            expect(actual).to.equal(expected);            
        });        
        
    });

    describe("decoding a message",()=>{
        it("decodes messages that had used a positive shift in the standard alphabet", ()=>{
            const message = "ugetgv";
            const shift = 2;
            const expected = "secret";
            const actual = caesar(message, shift, false);
            expect(actual).to.equal(expected)
        });
        
        it("decodes messages that had used a negative shift in the standard alphabet", ()=>{
            const message = "qcapcr";
            const shift = -2;
            const expected = "secret";
            const actual = caesar(message, shift, false);
            expect(actual).to.equal(expected)        
        });
        
        //"If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c)"
        it("wraps around the alphabet for letters at the end of the alphabet", ()=>{
            const message = "chspkhapvu";
            const shift = 7;
            const expected = "validation";
            const actual = caesar(message, shift, false);
            expect(actual).to.equal(expected);            
        });

        it("wraps around the alphabet for letters at the beginning of the alphabet", ()=>{
            const message = "otebwtmbhg";
            const shift = -7;
            const expected = "validation";
            const actual = caesar(message, shift, false);
            expect(actual).to.equal(expected);            
        });

        //"Spaces should be aintained throughout, as should other nonalphabetic symbols."
        it("should leaves spaces and other symbols as is", ()=>{
            const message = "xufhjx fsi xdrgtqx.";
            const shift = 5;
            const expected = "spaces and symbols.";
            const actual = caesar(message, shift, false);
            expect(actual).to.equal(expected);        
        });
        
        //"Capital letters can be ignored"
        it("ignores capital letters", ()=>{
            const message = "HfuNYfq qjYyJWX.";
            const shift = 5;
            const expected = "capital letters.";
            const actual = caesar(message, shift, false);
            expect(actual).to.equal(expected);            
        });

    });
})