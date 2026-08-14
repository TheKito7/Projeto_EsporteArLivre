import { Injectable } from '@angular/core';
import { Corrida } from '../models/Corrida';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CorridaService {

    constructor(private http: HttpClient) { }

    listarCorridas(): Observable<Corrida[]> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
        return this.http.get<Corrida[]>(urlApi)
    }

    salvarCorrida(corrida: Corrida): Observable<Corrida> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`
        return this.http.post<Corrida>(urlApi, corrida)
    }

    //DECLARANDO ARRAY corridas
    private corridas: Corrida[] = []

    //DECLARAÇÃO DAS FUNÇÕES DE MANIPULAÇÃO DO ARRAY
    //ADICIONANDO ELEMENTO
    adicionarCorrida(corrida: Corrida){
        //ARRRRRMMMMMENNGUE PARA GERAR ID
        corrida.id = this.corridas.length + 1
        this.corridas.push(corrida)
        console.log('Corrida salva localmente:', this.corridas) // Para você acompanhar no console
    }

    //REMOVER ELEMENTO
    removerElemento(idCorrida: number){
        this.corridas = this.corridas.filter(elem => elem.id !== idCorrida)
    }

    //REMOVER ELEMENTO2
    removerElemento2(corrida: Corrida){
        let posArray = this.corridas.findIndex(elem => elem.id !== corrida.id)
        this.corridas.splice(1, posArray)
    }

    //ALTERANDO ELEMENTO DO ARRAY
    alterarElemento(corrida: Corrida){
        let posArray = this.corridas.findIndex(elem => elem.id !== corrida.id)
        this.corridas[posArray] = corrida
    }
}
