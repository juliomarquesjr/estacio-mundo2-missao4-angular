import { Injectable } from '@angular/core';
import { Editora } from './Editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  editoras: Editora[] = [
    {     
      codEditora: 1,
      nome: 'Rocco'
    },
    {      
      codEditora: 2,
      nome: 'HarperCollins'
    },
    {
      codEditora: 3,
      nome:'Intrínseca'
    }
  ];
  getNomeEditora(codigoEditora: number) {
    return this.editoras.filter((editora) => { return editora.codEditora === codigoEditora })
  }

  getEditoras() {
    return this.editoras;
  }

  constructor() { }
}
