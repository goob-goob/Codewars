// ask

// Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².

// If there are multiple solutions (and there will be), return as far as possible the result with the largest possible values:

function decompose(n, n2 = n * n, i = n, prev) {
    while (n2 > 0 && i-- > 1) {
        if (prev = decompose(n, n2 - i * i, i)) {
            return prev.concat([i]);
        }
    }
    return (n2 == 0) ? [] : null;
}