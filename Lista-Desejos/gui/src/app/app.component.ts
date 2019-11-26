import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { listProd } from './listProd';
import { Estoque } from './Estoque';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  canecaPai: Estoque = {id: "12345", produto: "Caneca Dia dos Pais", quantidade: "15", imgSrc: "./assets/img/canecaDiaDosPais.jpg"};
  canecaMae: Estoque = {id: "12346", produto: "Caneca Dia das Maes", quantidade: "15", imgSrc: "./assets/img/canecaDiaDasMaes.jpg"};
  listProds: listProd[] = [];
}