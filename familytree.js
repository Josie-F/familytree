
//1stgen
const rita = { name: 'Rita', parents: [], siblings: [], childOf, siblingOf }
const niels = { name: 'Niels', parents: [], siblings: [], childOf, siblingOf }
const britta = { name: 'Britta', parents: [], siblings: [], childOf, siblingOf }
const svend = { name: 'Svend', parents: [], siblings: [], childOf, siblingOf }

//2ndgen
const bent = { name: 'Bent', parents: [rita, niels], siblings: [], childOf, siblingOf }
const susanne = { name: 'Susanne', parents: [britta, svend], siblings: [], childOf, siblingOf }

//3rdgen
const chris = { name: 'Chris', parents: [bent, susanne], siblings: [], childOf, siblingOf}
const josephine = { name: 'Josephine', parents: [bent, susanne], siblings: [chris], childOf, siblingOf }

const gen1 = [rita, niels, svend, britta]
const gen2 = [bent, susanne]
const gen3 = [josephine, chris]

function childOf() {
    return this.parents.map(parent => parent.name).join(' & ') || "parents unknown"
}

function siblingOf() {
    return this.siblings.map(siblings => siblings.name).join(' & ') || "siblings unknown"
}

console.log('________________ Parents ________________')
console.log(josephine.childOf())
//can call childOf on any (person) object
console.log('________________ Sibling ________________')
console.log(josephine.siblingOf())
//playedaround with adding siblings
console.log('________________ Generations 1-3 ________________')
console.log(gen1, gen2, gen3)
//shows all generations, from newest to oldest