import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RequestOptions } from '@angular/http';
import { Cliente } from "../model/cliente";
import { Erro } from "../model/erro";

@Injectable()
export class ClienteService {
    private apiUrl = 'http://localhost:12856/api/cliente';

    constructor(private http: Http) { }

    getAll(): Promise<Cliente[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(response => response.json() as Cliente[])
            .catch(this.handleError);
    }

    getName(nome: string): Promise<Cliente[]> {
        let url = `${this.apiUrl}/porNome?nome=${nome}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Cliente[])
            .catch(this.handleError);
    }

    getId(id: number): Promise<Cliente> {

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let url = `${this.apiUrl}/${id}`;
      return this.http
          .get(url, new RequestOptions({
              headers: headers,
              body: ""
          }))
          .toPromise()
          .then(response => response.json() as Cliente)
          .catch(this.handleError);
    }

    save(cliente: Cliente): Promise<Cliente> {
        if (cliente.id)
            return this.put(cliente);
        return this.post(cliente);
    }

    delete(cliente: Cliente): Promise<Response> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.apiUrl}/${cliente.id}`;
        return this.http
            .delete(url, new RequestOptions({
                headers: headers,
                body: ""
            }))
            .toPromise()
            .catch(this.handleError);
    }

    private post(cliente: Cliente): Promise<Cliente> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.apiUrl, JSON.stringify(cliente), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private put(cliente: Cliente): Promise<Cliente> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.apiUrl}/${cliente.id}`;
        return this.http
            .put(url, JSON.stringify(cliente), { headers: headers })
            .toPromise()
            .then(() => cliente)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Ocorreu o seguinte erro', error);
        let erro = error.json() as Erro;
        return Promise.reject(erro.exceptionMessage);
    }
}
