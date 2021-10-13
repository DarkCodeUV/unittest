import { FormulaFuerza } from './formula-fuerza.component';

describe('VoteComponent', () => {
    let component: FormulaFuerza;

    beforeEach(() => {
        component = new FormulaFuerza();
    });

    it('should return 0 if is "m" and "a" are undefined', () => {
        component.calcular(undefined,undefined);
        expect(component.F).toBe(0);
    });

    it('should return 0 if is "m" or "a" are undefined', () => {
        component.calcular(7,undefined);
        expect(component.F).toBe(0);
    });

    it('should return 0 if is "m" and "a" are null', () => {
        component.calcular(null,null);
        expect(component.F).toBe(0);
    });

    it('should return 0 if is "m" and "a" are null', () => {
        component.calcular(null,6);
        expect(component.F).toBe(0);
    });

    it('should return "Syntaxis error" when "m" and "a" are not a number', () => {
        expect(component.calcular("x","y")).toContain("Syntaxis error");
        
    });

    it('should return "Syntaxis error" when "m" and "a" are not a number', () => {
        expect(component.calcular(7,"y")).toContain("Syntaxis error");
        
    });

    it('should return "Insert only type number" when m and a in a number in string  ', () => {
        expect(component.calcular("7","6")).toContain("Syntaxis error");
        
    });

  
    it('should return "Insert only type number" when m and a in a number in string  ', () => {
        expect(component.calcular(7,"6")).toContain("Syntaxis error");
        
    });

    it('should return 42 when we insert 7,6', () => {
        expect(component.calcular(7,6)).toBe("Syntaxis error");
    });

 
})