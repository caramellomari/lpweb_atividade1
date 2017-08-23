import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  aparece = '';
  resultado = '';
  valor1 = (Number(this.aparece));
  qualquer = '';
  valor2 = (Number(this.aparece))
  
  
  
  clicou(){
    this.title='Aplicativo LPWEB Interativo'
  }
  
//funções

  
  mais(x, y){
    this.aparece=''+(Number(this.aparece)+Number(this.aparece))
   
    
    
       
    
  }
  
//botões
  
  um(){
    this.aparece = '1'
  }
  dois(){
    this.aparece = '2'
  }
  tres(){
    this.aparece = '3'
  }
  quatro(){
    this.aparece = '4'
  }
  cinco(){
    this.aparece = '5'
  }
  seis(){
    this.aparece = '6'
  }
  sete(){
    this.aparece = '7'
  }
  
  oito(){
    this.aparece = '8'
  }
  nove(){
    this.aparece = '9'
  }
  zero(){
    this.aparece = '0'
  }
  menos(){
    this.aparece = '-'
  }
  
  igual(){
    this.aparece = this.resultado
  }
  limpar(){
    this.aparece = ''
  }
  
  
}
