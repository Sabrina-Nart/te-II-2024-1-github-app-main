import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile, Repository } from "./github.model";

@Injectable()
export class GithubService {

    constructor(
        private httpClient: HttpClient
    ) { }

    searchProfile(profileName: string): Observable<Profile> {
        return this.httpClient.get<Profile>(`
        http://api.github.com/users/${profileName}
        `)
    }

    getRepositories(profileName: string): Observable<Repository[]> {
        return this.httpClient.get<Repository[]>(`
        http://api.github.com/users/${profileName}/repos
        `)
    }
}

/*
  injectabe e provideRouter
  para usar na aplicação inteira

  httmp
  importar module do github module
  importar httpcliente

  sercheprofile
  pesquisa do profile aqi

  retorna o profile - tipo observale

  profile - pode fazer em cima, ou criar um arquivo e reunir tudo o que é interface

  passar o  nome

  Observable de um http response - tipo assincrono de dados - não vai o dado agora, terá no futuro proximo - modidica o dado
  Promice = muda depois

  Chamada http do tipo get seno feita

  Mesma URL, só troca por Repos
*/
