import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';
import { ProdutosService } from '../ProdutosService';
import { Router, RouterLink } from '@angular/router';
import { copyFile } from 'fs';

@Component({
    selector: 'app-cadastro-produto',
    templateUrl: './cadastro-produto.component.html',
    styleUrls: []
  })

  export class CadastroProdutoComponent implements OnInit {
    selectedFile : File;
    imagePreview;

    constructor(private estoqueService: EstoqueService, private produtosService: ProdutosService, private router:Router) { }

    cadastrarProduto(nome: string, qtd: number):void{
        this.estoqueService.cadastrarProduto(nome,qtd);
        this.router.navigate(["estoque"]);
    }

    ngOnInit() {
        
      }

    onFileUpload(event) {
      this.selectedFile = event.target.files[0]
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }