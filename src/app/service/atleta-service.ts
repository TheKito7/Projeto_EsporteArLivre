import { Injectable } from '@angular/core';
import { Atleta } from '../models/Atleta';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AtletaService {

    constructor(private http: HttpClient) { }

    listarAtletas(): Observable<Atleta[]> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`
        return this.http.get<Atleta[]>(urlApi)

    }
    
    salvarAtleta(atleta: Atleta): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`
        return this.http.post<Atleta>(urlApi, atleta)
    }


    
    //DECLARANDO ARRAY atletas
    private atletas: Atleta[] = []

    //DECLARAÇÃO DAS FUNÇÕES DE MANIPULAÇÃO DO ARRAY
    //ADICIONANDO ELEMNTO
    adicionarAtleta(atleta: Atleta){
        //ARRRRRMMMMMENNGUE PARA GERAR ID
        atleta.id = this.atletas.length + 1
        this.atletas.push(atleta)
    }

    //LISTAR ELEMENTOS


    //REMOVER ELEMENTO
    removerElemento(idAtleta: number){
        this.atletas = this.atletas.filter(elem=>elem.id !== idAtleta)
    }

    //REMOVER ELEMENTO2
    removerElemento2(atleta: Atleta){
        let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
        this.atletas.splice(1,posArray)
    }

    //ALTERANDO ELEMENTO DO ARRAY
    alterarElemento(atleta: Atleta){
        let posArray = this.atletas.findIndex(elem=>elem.id !== atleta.id)
        this.atletas[posArray] = atleta
    }


}

/* ***************atletaservice******************

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Atleta } from '../models/Atleta';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  //DECLARAÇÃO CONSTRUTOR
  constructor(private http: HttpClient) { }

  //ADICIONAR NA API
  adicionarAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`

    return this.http.post<Atleta>(urlApi, atleta)
  }

  //LISTAR ATLETAS NA API   
  listarAtletas(): Observable<Atleta[]> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta`

    return this.http.get<Atleta[]>(urlApi)
  }

  //LISTAR ATLETA
  listarAtleta(idAtleta: number):Observable<Atleta>{
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`

    return this.http.get<Atleta>(urlApi)
  }

  //EXCLUIR NA API
  exluirAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

    return this.http.delete<Atleta>(urlApi)
  }

  //ALTERAR NA API
  alterarAtleta(atleta: Atleta):Observable<Atleta>{
    const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.id}`

    return this.http.put<Atleta>(urlApi, atleta)
  }

  /*
  private atletas: Pessoa[] = []

  adicionar(pessoa: Pessoa) {
    //ARRRRMENGUEEEE PARA GERAR O ID
    pessoa.id = this.atletas.length + 1
    
    this.atletas.push(pessoa)
  }

  listar() {
    console.table(this.atletas)
    return this.atletas
  }

  private localizarAtleta(idAtleta: number){
    return this.atletas.findIndex(elem => elem.id === idAtleta)
  }

  remover(posicaoArray: number){
    this.atletas.splice(1,posicaoArray)
  }

  remover2(pessoa: Pessoa){
    this.atletas = this.atletas.filter(elem => elem.id !== pessoa.id)
  }

  alterar(pessoa : Pessoa){
    let posArray = this.localizarAtleta(pessoa.id)

    if(posArray >=0){
      this.atletas[posArray] = pessoa
    }

  }*/




