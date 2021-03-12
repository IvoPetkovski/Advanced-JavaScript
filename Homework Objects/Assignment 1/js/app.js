let animal = {
    type: 'wolf',
    gender: 'male',
    isDangerous: true,
    color: 'grey'
}

let car = {
    brand: 'BMW',
    color: 'blue',
    model: '520d',
    doors: 5
}

function mergeObjects(obj1, obj2){
    let mergedObject = {...obj1, ...obj2};
    return mergedObject;
}

let newObject = mergeObjects(animal, car);
console.log(newObject);

let stuff = [
    {
        type: 'wolf',
        gender: 'male',
        isDangerous: true,
        fur: 'grey'
    },
    {
        brand: 'BMW',
        color: 'blue',
        model: '520d',
        doors: 5
    },
    {
        name: 'Ivan',
        hairColor: 'Brown',
        eyeColor: 'green'
    }
]

function mergeArray(arr){
    let mergedObject = {};
    for (const object of arr) {
        mergedObject = {...mergedObject, ...object};
    }
    console.log(mergedObject);
}

mergeArray(stuff);