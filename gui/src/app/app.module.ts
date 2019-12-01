import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListaDesejosComponent } from './lista-desejos/lista-desejos.component';
import { EstoqueService } from './EstoqueService';
import { ProdutosService } from './ProdutosService';
import { PaginaProdutoComponent } from './PaginaProduto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDesejosComponent,
    PaginaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'ListaDesejos',
        component: ListaDesejosComponent
      },
      {
        path: 'PaginaProduto',
        component: PaginaProdutoComponent
      }
    ])
  ],
  providers: [EstoqueService, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
