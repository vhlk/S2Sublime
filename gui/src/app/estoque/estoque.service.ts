import { Produto } from '../../../../common/Produto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { promise } from 'protractor';
import { sync } from 'glob';

@Injectable()
export class EstoqueService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private s2URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  list(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.s2URL + "/produtos")
      .pipe(
        retry(2)
      );
  }

  updateProduct(prod: Produto): Observable<Produto> {
    return this.http.put<any>(this.s2URL + "/produto", JSON.stringify(prod), { headers: this.headers }).pipe(
      retry(2),
      map(res => { if (res.success) { return prod; } else { return null; } })
    );
  }

  cadastrarProduto(nome: string, qtd: number): Observable<any> {

    return this.list().pipe(
      map((listEst: Produto[]) => {
        let newId = "777";
        if (listEst.length != 0) {
          let oldId = +listEst[listEst.length - 1].id;
          oldId++;
          newId = oldId.toString();
        }

        let prod = new Produto(newId, nome, qtd, "Outros", "");

        return this.http.post<any>(this.s2URL + "/produto", prod, { headers: this.headers })
          .pipe(
            retry(2),
            map(res => { if (res.success) { return prod; } else { return null; } })
          );
      })
    )
  }

  deleteProduct(prod: Produto): Observable<boolean> {
    return this.http.post<any>(this.s2URL + "/deleteProduto", prod, { headers: this.headers })
      .pipe(
        retry(2),
        map(res => { if (res.success) { return true; } else { return false; } })
      );
  }
}
