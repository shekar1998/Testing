import { findPrimesEvents, findPrimesCb, findPrimesPromise } from '../utils/primes'
import {doneCallback} from '../utils/test-utils'

describe('asynchronous prime finders', () => {

// using callback
describe('asynchronous prime finders', () => {
    it('should return 4 primes between 2 and 100', (done) => {
        findPrimesCb(2, 100, doneCallback((err:any, result:any) => {
            expect(err).toBeNull()
            expect(result.length).toBe(25)
        }, done))
    })
})

// using emitters
describe('asynchronous prime events', () => {
    it('should return 25 primes between 2 and 100', (done) => {
        findPrimesEvents(0, 100)
        .on('end', doneCallback((event:any) => {
            expect(event.count).toBe(25)
        }, done))
})
})

// promises
describe('asynchronous promises', () => {
    it('should return 25 primes between 2 and 100', (done) => {
        findPrimesPromise(0, 100)
        .then(doneCallback((primes:any) => {
            expect(primes.length).toBe(25)
        }, done))
        .catch(doneCallback((err:any) => {
            expect(err.message).toMatch(/Invalid Range/)
        },done))
        
})
})

// async WITHOUT await (using then)
describe('asynchronous promises', () => {
    it('should return 15 primes between 0 and 50', async() => {
        return findPrimesPromise(0,50)
            .then((primes: number[]) => {
                expect(primes.length).toBe(15)
            })
        // let primes = await findPrimesPromise(2, 100)
        // expect(primes.length).toBe(25)      
})
})

// async USING await (WITHOUT using then)
it('should return 15 primes between 0 and 50', async() => {
    let primes = await findPrimesPromise(2, 100)
    expect(primes.length).toBe(25)      
})

it('should return 15 primes between 0 and 50', async() => {
    await expect(findPrimesPromise(0, 50))
        .resolves.toEqual( [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47])
})

// asynchronous actions are rejections not the exceptions, it must handle through rejections
it('should return invalid', async() => {
    // await expect(() => findPrimesPromise(100, 1))
    // .rejects
    // .toThrow(/Invalid Range/)
})

})


