import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {
  constructor(
    private service: PensamentoService,
    private router: Router
  ) {}

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo3'
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe()
    this.router.navigate(['/listarPensamento'])
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }
}
