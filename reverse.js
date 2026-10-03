
function reverseEachWord(sentence) {
    return sentence
        .split(" ")                            
        .map(word =>                           
            word.split("").reverse().join("")  
        )
        .join(" ");                            
}

const inputSentence = "Hello World from Node js";

const result = reverseEachWord(inputSentence);

console.log("Original Sentence:", inputSentence);
console.log("Reversed Sentence:", result);
