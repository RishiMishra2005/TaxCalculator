document.getElementById('taxForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const income = parseFloat(document.getElementById('income').value);
    const result = calculateTax(income);

    document.getElementById('taxRate').innerText = result.rate;
    document.getElementById('incomeRange').innerText = `$${result.min} - $${result.max}`;

    document.getElementById('result').classList.remove('hidden');
});

const taxBrackets = [
    { min: 0, max: 9875, rate: 10 },
    { min: 9876, max: 40125, rate: 12 },
    { min: 40126, max: 85525, rate: 22 },
    { min: 85526, max: 163300, rate: 24 },
    { min: 163301, max: 207350, rate: 32 },
    { min: 207351, max: 518400, rate: 35 },
    { min: 518401, max: Infinity, rate: 37 }
];

function calculateTax(income) {
    for (let bracket of taxBrackets) {
        if (income >= bracket.min && income <= bracket.max) {
            return bracket;
        }
    }
}
