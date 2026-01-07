const repeatString = function(message, repetitions) {
    if (repetitions < 0)
    {
        return 'ERROR';
    }
    else
    {
        let repeatedMessage = '';
        for (let i = 0; i < repetitions; ++i)
        {
            repeatedMessage += message;
        }
        return repeatedMessage;
    }
};

// Do not edit below this line
module.exports = repeatString;
