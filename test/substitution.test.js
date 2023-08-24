// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");
//functionality tests:
describe("Substitution Function", () => {
    describe("validates inputs", () => {
        it("returns false if no substitution alphabet is given", () => {
          const message = "secret";
          const actual = substitution(message);
          expect(actual).to.be.false;
        });    
        //"The alphabet parameter must be a string of exactly 26 characters"
        it("returns false if the substitution alphabet is not exactly 26 characters", () => {
          const message = "secret";
          const alphabet = "poiuytrewqasdfghjklzxcvbn";
          const actual = substitution(message, alphabet);
          expect(actual).to.be.false;
        });    
        //"All the characters in the alphabet parameter must be unique.
        //Otherwise, it should return false."
        it("returns false if the substitution alphabet does not contain unique characters", () => {
          const message = "secret";
          const alphabet = "notalluniquelettersinthis.";
          const actual = substitution(message, alphabet);
          expect(actual).to.be.false;
        });
    });
    describe("encoding a message", () => {
        it("encodes a message by using the input substitution alphabet", () => {
        const message = "secret";
        const alphabet = "poiuytrewqasdfghjklmnbvcxz";
        const expected = "lyikym";
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
        });
        //"Spaces should be maintained throughout."
        it("maintains spaces", () => {
            const message = "secret message";
            const alphabet = "poiuytrewqasdfghjklmnbvcxz";
            const expected = "lyikym dyllpry";
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
            });
        //"Capital letters can be ignored."
        it("ignores capital letters", () => {
            const message = "Secret MeSsAGE";
            const alphabet = "poiuytrewqasdfghjklmnbvcxz";
            const expected = "lyikym dyllpry";
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
            });
        //"The input could include spaces and letters as well as special characters such as #, $, *, etc."
        it("works with any kind of key with unique characters", () => {
            const message = "secret message";
            const alphabet = " z#ycxdbevfugthsirjqkplomn";
            const expected = "jc#rcq gcjj dc";
            const actual = substitution(message, alphabet);
            expect(actual).to.equal(expected);
        });
    });
    describe("decoding a message", () => {
        it("decodes a message by using the given substitution alphabet", () => {
            const message = "lyikym";
            const alphabet = "poiuytrewqasdfghjklmnbvcxz";
            const expected = "secret";
            const actual = substitution(message, alphabet, false);
        expect(actual).to.equal(expected);
        });
        //"Spaces should be maintained throughout."
        it("maintains spaces", () => {
            const message = "lyikym dyllpry";
            const alphabet = "poiuytrewqasdfghjklmnbvcxz";
            const expected = "secret message";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.equal(expected);
            });
            //"Capital letters can be ignored."
            it("ignores capital letters", () => {
            const message = "Lyikym DyLlPRY";
            const alphabet = "poiuytrewqasdfghjklmnbvcxz";
            const expected = "secret message";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.equal(expected);
            });
        //"The input could include spaces and letters as well as special characters such as #, $, *, etc."
        it("works with any kind of key with unique characters", () => {
            const message = "jc #cq";
            const alphabet = "rz ycxdbevfugthsi#jqkplomn";
            const expected = "se ret";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.equal(expected);
        });        
    });
});