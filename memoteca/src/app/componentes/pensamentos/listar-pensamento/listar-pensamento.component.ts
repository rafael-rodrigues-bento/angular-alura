import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: "Comunicação entre componentes",
      autoria: "Angular",
      modelo: "modelo3"
    },
    {
      conteudo: "Eu sou passado para o componente pai via Input()",
      autoria: "Componente filho",
      modelo: "modelo1"
    },
    {
      conteudo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, ipsum adipisci! Velit labore accusantium, veritatis excepturi quibusdam totam perspiciatis mollitia saepe, quia illum provident, incidunt voluptatibus ipsa quasi autem omnis.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, ipsum adipisci! Velit labore accusantium, veritatis excepturi quibusdam totam perspiciatis mollitia saepe, quia illum provident, incidunt voluptatibus ipsa quasi autem omnis.",
      autoria: "Componente filho",
      modelo: "modelo1"
    }
  ];
}
