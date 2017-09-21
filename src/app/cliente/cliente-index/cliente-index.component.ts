import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../shared/service/cliente.service";
import { Cliente } from "../../shared/model/cliente";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})

export class ClienteIndexComponent implements OnInit {

  clientes: Cliente[];
  error: any;

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.getClientes();
  }

  private getClientes(): void {
    this.clienteService
      .getAll()
      .then(clientes =>
        this.clientes = clientes
      )
      .catch(error => this.error = error);
  }

  add(): void {
    this.router.navigate(['cliente/criar']);
  }

  remove(cliente: Cliente, event: any): void {
    event.stopPropagation();
    this.clienteService
      .delete(cliente)
      .then(c => {
        this.getClientes()
      })
      .catch(error => this.error = error);
  }

  edit(cliente: Cliente): void {
    this.router.navigate(['cliente/editar', cliente.id]);
  }

  search(term: string): void {
    if (term == "")
      this.getClientes();
    else
      this.clienteService
        .getName(term)
        .then(clientes =>
          this.clientes = clientes
        )
        .catch(error => this.error = error);
  }
}
