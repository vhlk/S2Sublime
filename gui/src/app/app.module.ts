import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule, MatSelectModule, MatButtonModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ListaDesejosComponent } from './lista-desejos/lista-desejos.component';
import { EstoqueService } from './EstoqueService';
import { ProdutosService } from './ProdutosService';
import { PaginaProdutoComponent } from './PaginaProduto.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { PersonalizarProdutoComponent } from './personalizar-produto/personalizar-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalizarProdutoService } from './personalizar-produto/personalizar-produto.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaDesejosComponent,
    PaginaProdutoComponent,
    NavBarComponent,
    SidenavBarComponent,
    PersonalizarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {
        path: 'lista-desejos',
        component: ListaDesejosComponent
      },
      {
        path: 'PaginaProduto',
        component: PaginaProdutoComponent
      },
      {
        path: 'PersonalizarProduto',
        component: PersonalizarProdutoComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  exports: [
    MatToolbarModule,
  ],
  providers: [EstoqueService, ProdutosService, PersonalizarProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
