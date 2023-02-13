let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";
let value = "a"; 

function countAcaracter() {
    let count = [...sentence].filter(x => x === value).length;
    console.log("Le nombre d'occurrences de 'a' est : ", count);
}

module.exports = countAcaracter();