import { Produto } from './Produto';
import { Injectable } from '@angular/core';

@Injectable()
export class EstoqueService {
    canecaPai: Produto = new Produto("12345", "Caneca Dia dos Pais", 15, "./assets/img/canecaDiaDosPais.jpg");
    canecaMae: Produto = new Produto("12346", "Caneca Dia das Maes", 15, "./assets/img/canecaDiaDasMaes.jpg");
    produtos: Produto[] = [this.canecaPai, this.canecaMae];

    list(): Produto[] {
        let result: Produto[] = [];
        for(let a of this.produtos){
            result.push(a.copy());
        }
        return result;
    }
}