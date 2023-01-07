// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum. 
function calculateYears(principal, interest, tax, desired) {
    let current = principal
    let years = 0
    while (current < desired) {
        current += (current * interest) * (1 - tax);
        years++
    }
    return years
}