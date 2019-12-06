import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../../../common/Produto';
import { EstoqueService } from '../estoque/estoque.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categoria: String;
  shownProds: Produto[] = [];
  listProds: Produto[] = this.estoqueService.list();
  constructor(private router: Router, private _Activatedroute: ActivatedRoute, private estoqueService: EstoqueService) {
    router.events.subscribe(res => {
      this.sortbyCategory();
    });
  }

  sortbyCategory() {
    this.categoria = this._Activatedroute.snapshot.paramMap.get("categoria");
    let product;

    this.shownProds = [];
    for (let element of this.listProds) {
      if (element.categoria == this.categoria) {
        product = new Produto(element.id, element.produto, element.quantidade, element.categoria, element.imgSrc);
        this.shownProds.push(product);
      }
    }
  }

  ngOnInit() { }

}
