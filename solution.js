//1
function doubleValues(arr) {
    return arr.map(el => el * 2);
}

console.log(doubleValues([1, 2, 3])); // [2,4,6]
console.log(doubleValues([5, 1, 2, 3, 10])); // [10,2,4,6,20]


//2
function onlyEvenValues(arr) {
    return arr.filter(el => el%2 === 0);
}

console.log(doubleValues([1, 2, 3])); // [2,4,6]
console.log(doubleValues([5, 1, 2, 3, 10])); // [10,2,4,6,20]

//3
function showFirstAndLast(arr) {
    return arr.map(el => el[0] + el[el.length-1]);
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy'])); // ["ct", "mt", "tm", "uy"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));     // ['hi', 'ge', 'se']


//4
function addKeyAndValue(arr, key, value) {
    arr.map(obj => obj[key] = value);
    return arr;
}

console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]


//5
// function vowelCount(str) {
//     const vowels = 'aeiou';
//     str = str.toLowerCase().split("");
//     const result = {};
//     str.forEach( (vowel,index,self) => vowels.includes(vowel)
//         ? result[vowel] = self.filter(el => el === vowel).length
//         : null);

//     return result;
// }

function vowelCount(str) {
    const vowels = 'aeiou';
    str = str.toLowerCase().split("");
    return str.reduce( (acc,cur) => {
        if( vowels.includes(cur) ) { 
            if(acc[cur]){
                acc[cur]++;
            }else{
                acc[cur]=1;
            }
        } 
        return acc;
    }, {} );
}

console.log(vowelCount('Elie'));// {e:2,i:1};
console.log( vowelCount('Tim') );// {i:1};
console.log( vowelCount('Matt') );// {a:1})
console.log( vowelCount('hmmm') );// {};
console.log( vowelCount('I Am awesome and so are you') );// {i: 1, a: 4, e: 3, o: 3, u: 1};