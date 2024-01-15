import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo3'
  }

  criarPensamento() {
    alert('Pensamento criado!')
  }

  cancelar() {
    alert('Pensamento cancelado!')
  }

}
