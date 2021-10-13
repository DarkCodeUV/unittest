export class FormulaFuerza{
     F;
     m;
     a;
   
    calcular(m,a){ 
        let expR = /[0-9]/ig;
        if(m === undefined && a === undefined) return this.F=0;
        if(m === undefined || a === undefined) return this.F=0;
        if(m === null && a === null) return this.F=0;
        if(m === null || a === null) return this.F=0;
        if(expR.test(m) && expR.test(a)) return "Syntaxis error";
        if(expR.test(m) || expR.test(a)) return "Syntaxis error";
        if(typeof(m) !== "number" && typeof(a) !== "number") return "Syntaxis error";
        if(typeof(m) !== "number" || typeof(a) !== "number") return "Syntaxis error";
           
        return this.F=a*m;
    }
}