/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
let backpack = [];
backpack.push("Lightsaber")
backpack.push("robe", "food")
//console.log(backpack)
let belt = backpack.shift()
//console.log(belt)
backpack.splice(1,0,"coat")
//console.log(backpack.length)

let bag = []
bag.unshift("blanket", "toothbrush", "flint")
console.log(bag)
for (let i = 0; i < 3; i ++){
    console.log(bag[i])
}
