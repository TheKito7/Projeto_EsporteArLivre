import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CorridaService} from '../../service/corrida-service';

import { Corrida } from '../../models/Corrida';


@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  providers: [CorridaService], 
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})

export class CorridaComponent {
  //DECLARANDO ATRIBUTOS
  descricao = ''
  data = ''
  distancias: string[] = []

  //DECLARAÇÃO DO CONSTRUTOR
  constructor(private corridaService: CorridaService) { }

  //DECLARAÇÃO DE FUNÇÕES
  exibirDados() {
    console.log(this.descricao, this.data, this.distancias)

    this.limparDados()
  }

  limparDados() {
    this.descricao = ''
    this.data = ''
    this.distancias = []
  }

  // Captura os checkboxes marcados na tela
  onCheckboxChange(distancia: string, event: any) {
    if (event.target.checked) {
      this.distancias.push(distancia);
    } else {
      const index = this.distancias.indexOf(distancia);
      if (index > -1) {
        this.distancias.splice(index, 1);
      }
    }
  }

  salvar(){
    const corrida = new Corrida()
    corrida.descricao = this.descricao
    corrida.data = this.data
    // Passa o array de distâncias selecionadas pelo usuário
    corrida.distancias = this.distancias
    
    this.corridaService.adicionarCorrida(corrida)
    
    this.limparDados()   

    this.corridaService.listarCorridas()
  }
}
