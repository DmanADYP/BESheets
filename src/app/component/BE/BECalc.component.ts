import { Component } from "@angular/core";

@Component({
    selector:'be-calc',
    templateUrl:'/BECalc.component.html'

})export class BECalcComponent{
    private  A:string='0';
    private  B:string='0';
    private  C:string='0';
    private  D:string='0';
    private  E:string='0';
    private  F:string='0';
    private  G:string='0';
    private  Q1:any='0';
    private  Q2:any='0';

    private  A1:string='0';
    private  B1:string='0';
    private  C1:string='0';
    private  D1:string='0';
    private  E1:string='0';
    private  F1:string='0';
    private  G1:string='0';
    private  Q11:any='0';
    private  Q21:any='0';

    private  A2:string='0';
    private  B2:string='0';
    private  C2:string='0';
    private  D2:string='0';
    private  E2:string='0';
    private  F2:string='0';
    private  G2:string='0';
    private  Q12:any='0';
    private  Q22:any='0';

    private  A3:string='0';
    private  B3:string='0';
    private  C3:string='0';
    private  D3:string='0';
    private  E3:string='0';
    private  F3:string='0';
    private  G3:string='0';
    private  Q13:any='0';
    private  Q23:any='0';

    onChange(value:any,id){
        if(value =="0"||value ==""|| value==undefined){
            
        }else{
      
        switch (id) {
            case 1:
                this.A = value;
                break;
            case 2:
               this.B = value;
                break;
            case 3:
               this.C = value;
                break;
            case 4:
               this.D = value;
                break;
            case 5:
               this.E = value;
                break;
            case 11:
                this.A1 = value;
                break;
            case 21:
               this.B1 = value;
                break;
            case 31:
               this.C1 = value;
                break;
            case 41:
               this.D1 = value;
                break;
            case 51:
               this.E1 = value;
                break;
             case 12:
                this.A2 = value;
                break;
            case 22:
               this.B2 = value;
                break;
            case 32:
               this.C2 = value;
                break;
            case 42:
               this.D2 = value;
                break;
            case 52:
               this.E2 = value;
                break;
             case 13:
                this.A1 = value;
                break;
            case 23:
               this.B3 = value;
                break;
            case 33:
               this.C3 = value;
                break;
            case 43:
               this.D3 = value;
                break;
            case 53:
               this.E3 = value;
                break;
            default:
                this.A ='0';
                this.B ='0';
                this.C ='0';
                this.D ='0';
                this.E ='0';

                this.A1 ='0';
                this.B1 ='0';
                this.C1 ='0';
                this.D1 ='0';
                this.E1 ='0';

                this.A2 ='0';
                this.B3 ='0';
                this.C3 ='0';
                this.D3 ='0';
                this.E3 ='0';
        }
        }
        
        this.Q1 =  +this.A + +this.B+ +this.C+ +this.D+ +this.E;
        this.Q2 =  +this.A + +this.B+ +this.C+ +this.D+ +this.E;

        this.Q11 =  +this.A1 + +this.B2+ +this.C2+ +this.D2+ +this.E2;
        this.Q21 =  +this.A1 + +this.B2+ +this.C2+ +this.D2+ +this.E2;

        this.Q13 =  +this.A3 + +this.B3+ +this.C3+ +this.D3+ +this.E3;
        this.Q23 =  +this.A3 + +this.B3+ +this.C3+ +this.D3+ +this.E3;
        
    
    }
}