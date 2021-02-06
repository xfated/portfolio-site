import React, { useState, useEffect } from 'react';

const Decrypt = (props) => {

    const total_time = parseInt(props.time,10);
    const word = props.text;
    const time_per_letter = total_time / word.length;
    const letters = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()_=";
    const num_letters = letters.length;
    var initText = props.text;

    // To update string
    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    for (var i = 0; i < word.length; i++){
        initText = initText.replaceAt(i, letters[Math.floor(Math.random() * num_letters)]);
    }

    // Init states
    const [text, setText] = useState(initText);
    const [count, setCount] = useState(0);

    // Functions to update letters
    const updateWord = (letter, time) => {
        return setTimeout(() => {
            // Update new string for remainder
            var remainder = '';
            for (var i = 0; i < word.length - count - 1; i++){
                remainder = remainder +  letters[Math.floor(Math.random() * num_letters)];
            }
            // Update string with next letter + remaining shuffled letters
            setText(text.substr(0,count) + letter + remainder);
            
            setCount(count + 1);
        }, time);
    }

    const animateDecrypt = () => {

        for (var i = 0; i < word.length; i++){
            updateWord(props.text[count], time_per_letter)
        }
    }

    useEffect(() => {
        if (count < props.text.length){
            animateDecrypt();
        }
    }, [count])
    

    return(
        <span>{text}</span>
    );    
}

export default Decrypt;
