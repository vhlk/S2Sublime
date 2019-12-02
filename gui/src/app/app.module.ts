import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ListaDesejosComponent } from './lista-desejos/lista-desejos.component';
import { EstoqueService } from './EstoqueService';
import { ProdutosService } from './ProdutosService';
import { PaginaProdutoComponent } from './PaginaProduto.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDesejosComponent,
    PaginaProdutoComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {
        path: 'lista-desejos',
        component: ListaDesejosComponent
      },
      {
        path: 'PaginaProduto',
        component: PaginaProdutoComponent
      }
    ])
  ],
  exports: [
    MatToolbarModule,
  ],
  providers: [EstoqueService, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
