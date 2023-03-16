import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../Editora';
import { Livro } from '../Livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  todosLivros = new ControleLivrosService();
  todasEditoras = new ControleEditoraService();

  editoras: Editora[] = this.todasEditoras.getEditoras();
  livros: Livro[] = this.todosLivros.obterLivros();
  editoraClass = new ControleEditoraService();

  livrosDetails = '';

  constructor() {}

  showLivros(livro: Livro): void {
    this.livrosDetails = `${livro.titulo}, ${livro.resumo}, ${livro.codEditora}, ${livro.autores}`;
  }

  removeLivro(codigo: number) {
    this.todosLivros.remove(codigo);
  }

  consultaEditora(codigo: number) {
    const retorno: Editora[] = this.editoraClass.getNomeEditora(codigo);
    return retorno[0].nome;
  }

  ngOnInit(): void {}
}
