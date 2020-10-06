
const gen1 = [
    { name: 'Rita' },
    { name: 'Niels' },
    { name: 'Svend' },
    { name: 'Britta' }]



const gen2 =
    [
        { name: 'Bent', parents: [gen1[0], gen1[1]], childOf },
        { name: 'Susanne', parents: [gen1[2], gen1[3]], childOf }
    ]

const gen3 = [

    { name: 'Josephine', parents: [gen2[0], gen2[1]], childOf},
    { name: 'Chris', parents: [gen2[0], gen2[1]], childOf }
]

function childOf() {
    return this.parents.map(parent => parent.name).join(' & ') || "parents unknown"
}


module.exports = { gen1, gen2, gen3 }
