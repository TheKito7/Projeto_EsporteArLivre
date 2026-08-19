import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AtletaService } from '../../service/atleta-service';
import { Atleta } from '../../models/Atleta';


@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {
  //DECLARANDO ATIBUTOS
  nome = ''
  cpf = 0
  sexo = ''
  cep = 0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //DECLARAÇÃO DO CONSTRUTOR
  constructor(private atletaService: AtletaService) { }

  //DECLARAÇÃO DE FUNÇÕES
  exibirDados() {
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.ruaLogradouro, this.bairro, this.cidade, this.uf)

    this.limparDados()
  }

  limparDados() {
    this.nome = ''
    this.cpf = 0
    this.sexo = ''
    this.cep = 0
    this.ruaLogradouro = ''
    this.bairro = ''
    this.cidade = ''
    this.uf = ''
  }

  salvar() {
    const atleta = new Atleta();
    atleta.nome = this.nome;
    atleta.cpf = this.cpf;
    atleta.sexo = this.sexo;
    atleta.cep = this.cep;
    atleta.ruaLogradouro = this.ruaLogradouro;
    atleta.bairro = this.bairro;
    atleta.cidade = this.cidade;
    atleta.uf  = this.uf;
    
    // 2. Colocamos o .subscribe() para disparar a requisição
    this.atletaService.salvarAtleta(atleta).subscribe({
      next: (respostaDaApi) => {
        // O que acontece quando dá certo:
        console.log('Atleta salvo com sucesso na MockAPI!', respostaDaApi);
        this.limparDados(); 
        
       
        this.atletaService.listarAtletas().subscribe(listaAtualizada => {
          console.log('Lista atualizada:', listaAtualizada);
          // Aqui você atualizaria a variável de tela que mostra a tabela, se tiver uma.
        });
      },
      error: (erroDaApi) => {
        // O que acontece se der erro (ex: internet caiu, API fora do ar)
        console.error('Erro ao tentar salvar o atleta:', erroDaApi);
      }
    });
  }


}