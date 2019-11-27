import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Produto } from './Produto';
import { EstoqueService } from './EstoqueService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  estoqueService = new EstoqueService();
  listProds: Produto[] = [];
  listEst: Produto[] = this.listEstoque();

  addListProds (produto: Produto): void {
    let existe = false;
    this.listProds.forEach(element => {
      if(element.id == produto.id){
        element.quantidade += produto.quantidade;
        existe = true;
      }
    });
    if(!existe)
      this.listProds.push(produto)
  }

  listEstoque(): Produto[] {
    return this.estoqueService.list();
  }
}