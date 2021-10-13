import { factorial } from './factorial';

// Suit de pruebas para factorial

describe('factorial',()=>{
    //Prueba 1
     it('should return 1 if input is 0',()=>{
       
        const result = factorial(0);
        expect(result).toBe(1);
    })

     //Prueba 2
     it('should return 2 if input is 2',()=>{
        const result = factorial(2);
        expect(result).toBe(2);
    })

     //Prueba 3
     it('should return 24 if input is 4',()=>{
        const result = factorial(4);
        expect(result).toBe(24);
    })

     //Prueba 4
     it('should return -1 if input is >=10',()=>{
        const result = factorial(10);
        expect(result).toBe(-1);
    })
 

})