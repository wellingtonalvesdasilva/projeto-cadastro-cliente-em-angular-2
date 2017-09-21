import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from "../../shared/model/cliente";
import { ActivatedRoute, Params } from '@angular/router';
import { ClienteService } from "../../shared/service/cliente.service";

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  @Input() cliente: Cliente;
  error: any;
  navigated = false;

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = + params['id'];
        this.navigated = true;
        this.clienteService.getId(id)
          .then(cliente => this.cliente = cliente);
      } else {
        this.navigated = false;
        this.cliente = new Cliente();
      }
    });
  }

  save(): void {
    this.clienteService
      .save(this.cliente)
      .then(cliente => {
        this.cliente = cliente;
        this.goBack();
      })
      .catch(error => this.error = error);
  }

  goBack(): void {
    window.history.back();
  }
}
