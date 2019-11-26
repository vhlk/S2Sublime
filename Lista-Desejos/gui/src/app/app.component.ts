import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canecaPai: Estoque = {id: "12345", produto: "Caneca Dia dos Pais", quantidade: "15"};
  canecaMae: Estoque = {id: "12345", produto: "Caneca Dia dos Pais", quantidade: "15"};
}

export class Estoque {
id: string;
produto: string;
quantidade: string;
}
