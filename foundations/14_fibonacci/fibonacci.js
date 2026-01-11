const fibonacci = function(index) {
    if (index == 0)
    {
        return 0;
    }
    else if (index < -1)
    {
        return "OOPS";
    }

    let previous = 0;
    let current = 1;

    while (--index > 0)
    {
        let next = current + previous;
        previous = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
