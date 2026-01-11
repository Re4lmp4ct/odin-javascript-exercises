const palindromes = function (word) {
    const validatedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (validatedWord.length == 0)
    {
        return true;
    }
    else
    {
        let indexFront = 0;
        let indexBack = validatedWord.length - 1;

        while (indexFront < indexBack)
        {
            if (validatedWord[indexFront++] !== validatedWord[indexBack--])
            {
                return false;
            }
        }

        return true;
    }   
};

// Do not edit below this line
module.exports = palindromes;
