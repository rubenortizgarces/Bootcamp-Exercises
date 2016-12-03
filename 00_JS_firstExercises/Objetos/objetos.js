function charFreq (text) { 
    var currentChar; 
    var freq = {};
    for(var i = 0; i < text.length; i++){ 
        currentChar = text[i];
        if ( freq[currentChar] == undefined ) {
            freq[currentChar] = 1;
        }
        else {
            freq[currentChar]++
        }
    }

    return freq;   
}