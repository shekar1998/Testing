import {isPrime} from '../utils/primes'


//unit testing 

test('isPrime returns true for 5', () => {
    let result = isPrime(5)
    expect(result).toBe(true)
})

test('isPrime returns false for non prime numbers', () => {
    expect(isPrime(10)).toBeFalsy()
})


test('dummy test', () => {
    console.log('jest is running')
    expect(5).toBe(5)
})