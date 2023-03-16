import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { Editora } from '../Editora';
import { Livro } from '../Livro';
import { LivroListaComponent } from '../livro-lista/livro-lista.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  constructor(private router: Router) {}

  incluir(livro: Livro): void {
    this.autoresForm = `${livro.titulo}, ${livro.resumo}, ${livro.codEditora}, ${livro.autores}`;
  }

  /* Em desenvolvimento */
  adicionarLivro() {
    const novoLivro: Livro = {
      titulo: 'Teste',
      resumo: 'Resumo',
      codEditora: 1,
      codigo: 20,
      autores: ['Julio'],
    };
    
    this.router.navigate(['/lista'])
  }
  /* Em desenvolvimento */

  ngOnInit(): void {
    this.editoras = new ControleEditoraService().getEditoras();
  }
}
