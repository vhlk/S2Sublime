import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavBarComponent implements OnInit {
  categorias: String[] = [];

  constructor() {
    this.categorias = ["Almofadas", "Camisas", "Canecas", "Outros"];
  }

  ngOnInit() {
  }

}
