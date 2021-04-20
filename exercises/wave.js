// Doe de wave!

// Schrijf een functie die een string neemt als input
// De functie geeft een array terug, waarbij één voor één elke letter een HOOFDLETTER is

// Opdracht 1
// wave("hello") // geeft ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

const wave = 'hello';

function stringWave(string) {
    let waveArr = [];
    for (let i = 0; i < string.length; i++) {
        let subString = '';
        if(i === 0) {
            subString = string.charAt(i).toUpperCase() + string.slice(i+1);
        } else if(i > 0) {
            subString = string.slice(0, i) + string.charAt(i).toUpperCase() + string.slice(i+1);
        }
        waveArr.push(subString);
    }

    return waveArr;
}

console.log(stringWave(wave));
console.log('\n');



// Opdracht 2
// Pas de functie zo aan, dat alle letters behalve de 'wave'-letter, klein zijn
// wave("mSnTaaL") // geeft ['Msntaal','mSntaal','msNtaal','msnTaal','msntAal','msntaAl','msntaaL']
const wave1 = 'helLo';
function stringWave1(string) {
    let newArr = [];
    for (let i = 0; i < string.length; i++) {
        let subString = '';
        if(i === 0) {
            subString = string.charAt(i).toUpperCase() + string.slice(i+1).toLowerCase();
        } else if(i > 0) {
            subString = string.slice(0, i).toLowerCase() + string.charAt(i).toUpperCase() + string.slice(i+1).toLowerCase();
        }
        newArr.push(subString)
    }
    return newArr;
}

console.log(stringWave1(wave1));
console.log('\n')

// console.log('\n');
// Opdracht 3
// Pas de functie zo aan, dat andere symbolen de wave niet onderbreken
// Dus geen 'hi-ya' in allemaal kleine letters, omdat het streepje (-) dat geen hoofdletter kan worden, wordt overgeslagen. Hint: 'a' !== 'A', maar '-' === '-'
// wave("Hi-Ya") // geeft [ 'Hi-ya', 'hI-ya', 'hi-Ya', 'hi-yA']

const wave2 = 'Hi-ya';
function stringWave2(string) {
    let againNewArr = [];
    for (let i = 0; i < string.length; i++) {
        let subString = '';
        if(string[i] === '-') {
            continue;
        }
        if(i === 0) {
            subString = string.charAt(i).toUpperCase() + string.slice(i+1).toLowerCase();
        } else if(i > 0) {
            subString = string.slice(0, i).toLowerCase() + string.charAt(i).toUpperCase() + string.slice(i+1).toLowerCase();
        }
        againNewArr.push(subString);
    }
    return againNewArr;
}

console.log(stringWave2(wave2))