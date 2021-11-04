import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 //public listadeMoedas:object = {}
 //public listadeMoedas1:any;

 public lista2 = new Array();

  public resultadoConvercao = ""
  public moeda1:any;
  public moeda2:any;


  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.listarTodasMoedas()
  }

listarTodasMoedas(){
  this.api.buscarMoedas().subscribe(res =>{
    console.log(res,"");

    this.lista2.push(res.ARS);
    this.lista2.push(res.USD);
    this.lista2.push(res.EUR);
    this.lista2.push(res.CNY);

    console.log(this.lista2);

  })
}

fazerConversao(){
  let conta = (this.moeda1*this.moeda2).toFixed(2);
  this.resultadoConvercao = conta.toString().replace(".",",");
  console.log(this.resultadoConvercao)
}



}
