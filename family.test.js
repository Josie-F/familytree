const {gen1, gen2, gen3} = require('./family')

describe("My family tree", () => {
    test("I am in my family tree", () => {
        expect(gen3[0].name).toBe('Josephine')
    })
    test("My brother is in the family tree", () => {
        expect(gen3[1].name).toBe('Chris')
    })
    test("We have the same parents", () => {
        expect(gen3[0].parents).toBeTruthy()
        expect(gen3[1].parents).toBeTruthy()
    })

    test("My dads name is Bent", () => {
         expect(gen3[0].parents[0].name).toBe('Bent')
    })
    test("My mums name is Susanne", () => {
        expect(gen3[0].parents[1].name).toBe('Susanne')

    })
    test("Therefore I am the childOf Susanne and Bent", () => {
        expect(gen3[0].childOf()).toBe('Bent & Susanne')
    })

    test("My father's father is called Niels", () => {
        expect(gen2[0].parents[1].name).toBe('Niels')
    })   
    test("My father's mother is called Rita", () => {
        expect(gen2[0].parents[0].name).toBe('Rita')
    })
    test("My mother's father is called Svend", () => {
        expect(gen2[1].parents[0].name).toBe('Svend')
    })
    test("My mother's mother is called Britta", () => {
        expect(gen2[1].parents[1].name).toBe('Britta')
    })
    test("My father is a childOf Rita and Niels", () => {
        expect(gen3[0].parents[0].childOf()).toBe('Rita & Niels')
    })
    test("My father's mother is my grandmother", () => {
        expect(gen3[0].parents[0].parents[0].name).toBe('Rita')
    })
    
})