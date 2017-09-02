import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  title: string;
  aparece: string;
  resultado: number;
  operacao: string;

  constructor() { 

    
  }

  ngOnInit() {
  }
  um(){
    this.aparece+=1;
  }
  dois(){
    this.aparece+=2;
  }
  tres(){
    this.aparece+=3;
  }
  quatro(){
    this.aparece+=4;
  }
  cinco(){
    this.aparece+=5;
  }
  seis(){
    this.aparece+=6;
  }
  sete(){
    this.aparece+=7;
  }
  
  oito(){
    this.aparece+=8;
  }
  nove(){
    this.aparece+=9;
  }
  zero(){
    this.aparece+=0;
  }
  menos(){
    this.aparece = '-'
  }

  //operações

 somar()
 {
   if(this.aparece != ''){
     this.operacao = '+';
     this.resultado = this.resultado+Number(this.aparece);
     this.aparece = '';
   }
 }
 subtrair(){
   if(this.aparece != ''){
     this.operacao = '-';
     this.resultado = Number(this.aparece);
     this.aparece = '';
   }
   else{
     this.aparece = '-'
   }
 }
 igual(){
  if(this.operacao == '-')
    {
        this.resultado = this.resultado-Number(this.aparece);
    }
    else
    {
        this.resultado = this.resultado+Number(this.aparece);
    }
    this.aparece = '';
    this.aparece = ''+this.resultado;
    this.resultado = 0;
 }
 limpar(){
  this.aparece ='';
  this.resultado = 0;
  this.operacao = '+';
 }

}
