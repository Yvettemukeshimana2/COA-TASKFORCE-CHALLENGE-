
function stringTransform(input) {

    let transformed = input;
    // Check if the length is divisible by 3
    if (input.length % 3 === 0) {
        // Reverse the string if the length is divisible by 3
        transformed = transformed.split('').reverse().join('');
    }
    // Check if the length is divisible by 5
    if (input.length % 5 === 0) {
        // Replace each character with its ASCII code if the length is divisible by 5
        transformed = transformed.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    return transformed;
}


// Test Cases
const testCases = [
    { input: "abcabcabc", expected: "cbacbacba" },
    { input: "hello", expected: "104 101 108 108 111" },
    { input: "abcdef", expected: "fedcba" },
    { input: "Hello World!!!!", expected: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72" }
];

// Running Test Cases
testCases.forEach((test, index) => {
    const output = stringTransform(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Length of input ${test.input.length}`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected Output: "${test.expected}"`);
    console.log(`Actual Output: "${output}"`);
    console.log(output === test.expected ? "✅ Test Passed" : "❌ Test Failed");
    console.log('');
});


// Example usage
const input = "Hello World!!!!";
console.log(stringTransform(input)); // Output: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72"
