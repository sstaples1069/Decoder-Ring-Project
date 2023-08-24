// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");
describe("Polybius Function", () => {
    describe("encoding a message", () => {
        it("encodes a message by translating each letter to number pairs", () => {
            const message = "secret";
            const expected = "345131245144";
            const actual = polybius(message);
            expect(actual).to.equal(expected);
        });        
        //Spaces should be maintained throughout.
        it("maintains spaces", () => {
            const message = "secret message";
            const expected = "345131245144 23513434112251";
            const actual = polybius(message);
            expect(actual).to.equal(expected);
        });        
        //"Capital letters can be ignored"
        it("ignores capital letters", () => {
            const message = "Secret mEssAGE";
            const expected = "345131245144 23513434112251";
            const actual = polybius(message);
            expect(actual).to.equal(expected);
        });        
        //"The letters I and J share a space. 
        //When encoding, both letters can be converted to 42"
        it("translates both 'i' and 'j' to 42", () => {
            const message = "justice";
            const expected = "42543444423151";
            const actual = polybius(message);
            expect(actual).to.equal(expected);
        });        
    });    
    describe("decoding a message", () => {
        //string validation "When decoding, the number of characters in the string excluding spaces should be even."
        it("returns false if the length of all numbers is odd", () => {
            const message = "345131245144 2351343411225";
            const actual = polybius(message, false);
            expect(actual).to.be.false;
        });
        it("decodes messages by translating each pair of numbers into a letter", () => {
            const message = "345131245144";
            const expected = "secret";
            const actual = polybius(message, false);
            expect(actual).to.equal(expected);
        });                    
        it("maintains spaces", () => {
            const message = "345131245144 23513434112251";
            const expected = "secret message";
            const actual = polybius(message, false);
            expect(actual).to.equal(expected);
        });            
        //"...when decoding, both letters (i/j) should somehow be shown."
        it("translates 42 to both 'i' and 'j'", () => {
            const message = "42543444423151";
            const actual = polybius(message, false);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });            
    })
});