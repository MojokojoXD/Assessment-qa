const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Test the lenght of the contents of ShuffleArr', () => {
        //lenght of array going in must match lenght coming out
        expect(shuffleArray([1,2,3]).length).toBe(3)
    })

    test('Array returned contains the same items', () => {
        const randArr = ['first','second', 'third'];

        randArr.forEach(string => {
            expect(shuffleArray(randArr)).toContain(string)
        })
    })
})