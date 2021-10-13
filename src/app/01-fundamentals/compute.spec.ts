import { expressionType } from '@angular/compiler/src/output/output_ast';
import {compute } from './compute';
describe('compute',()=>{
     it('should return 0',()=>{
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should return 2',() =>{
        const result = compute(1);
        expect(result).toBe(2);
    })


})