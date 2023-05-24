const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}
const rta = elements.concat(otherElements);
const rta2 = [...elements, ...otherElements];
const rta3 = [...elements, ...'random'];
console.log('for', newArray);
console.log('rta', rta);
console.log('...', rta2);
console.log('rta3', rta3);
elements.push(...otherElements);
console.log('elements', elements);
