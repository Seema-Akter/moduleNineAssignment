function main(input) {
    const lines = input.trim().split('\n');
    const size = parseInt(lines[0]);
    const elements = lines[1].split(' ').map(Number);

    elements.sort((a, b) => a - b);

    let median;
    if (size % 2 === 0) {
        const middle1 = elements[size / 2 - 1];
        const middle2 = elements[size / 2];
        median = (middle1 + middle2) / 2;
    } else {
        median = elements[Math.floor(size / 2)];
    }

    let sum = 0;
    for (let i = 0; i < size; i++) {
        if (elements[i] < median) {
            sum += elements[i];
        }
    }

    console.log(sum);
}

// Sample input
const input = "6\n30 10 5 40 60 15\n";

// Call the main function with the sample input
main(input);
