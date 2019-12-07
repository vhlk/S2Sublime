import { Injectable } from '@angular/core';
import { PedidoPersonalizado} from '../../../../common/pedido-personalizado';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalizarProdutoService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json'})
  private s2URL = 'http://localhost:3000';
  
  constructor(private http: HttpClient){}

  listPedidos(): Observable<PedidoPersonalizado[]>{
    return this.http.get<PedidoPersonalizado[]>(this.s2URL + "/pedidosPersonalizados")
      .pipe(
        retry(2)
      );
  }
  
  realizarPedido(categoria: string, cor:string, quantidade:number, mensagem:string, imgSrc:File): Observable<any>{
    
    let pedido = new PedidoPersonalizado(categoria, cor, quantidade, mensagem);

    return this.http.post<any>(this.s2URL + "/pedidoPersonalizado", pedido, {headers:this.headers})
      .pipe(
        retry(2), 
        map(res => { if (res.success) { return pedido; } else {return null;}})
      );
  }

  pedidoCompleto(pedido: PedidoPersonalizado):boolean{
    if(pedido.categoria.length == 0 || pedido.cor.length == 0 || pedido.quantidade <= 0){
      return false;
    } else {
      return true;
    }
  }

  getCategorias():string[]{
    return ['Almofada','Camisa','Caneca','Quadro', 'Kits Festa'];
  }

  getCores():string[]{
    return ['Amarelo','Azul','Branco','Cinza','Laranja','Marrom','Preto','Rosa','Verde','Vermelho','Violeta'];
  }

}
