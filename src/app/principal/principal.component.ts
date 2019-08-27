import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  numero =0;
  num=1;
  nombre="";
  cadena="1"
  cad=[];
  resultados = [];
  constructor(public activateRouter: ActivatedRoute) { }
  generar(){
    for(var i=1;i<=this.numero;i++){
      this.num=this.num*i;
      this.resultados.push(this.num);
      this.cadena=this.cadena+"*"+i;
      this.cad.push(this.cadena);
     
    }
  }
  ngOnInit() {
    const para = this.activateRouter.snapshot.params;
    this.nombre=para.name;
    
  }

}
