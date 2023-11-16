import { Component } from '@angular/core';

@Component({
  selector: 'app-atualizar-local-descarte',
  templateUrl: './atualizar-local-descarte.component.html',
  styleUrls: ['./atualizar-local-descarte.component.css'],
})
export class AtualizarLocalDescarteComponent {
  exibirResultados: boolean = false;

  recebedores: any = [
    {
      nome: 'Facens',
      telefone: '(15)998123456',
      email: 'facens@facens.br',
      endereco:
        'Rodovia Senador José Ermírio de Moraes, 1425 - Jardim Constantino Matucci, Sorocaba - SP, 18085-784',
    },
  ];

  setExibirTrue() {
    this.exibirResultados = true;
  }
  voltar() {
    window.history.back();
  }
}

