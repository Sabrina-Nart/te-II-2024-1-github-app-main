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

  Chamada http do tipo get sendo feita

  Mesma URL, só troca por Repos
*/

/*

1. **Importações**:
    - `import { HttpClient } from "@angular/common/http";`: Isso importa o módulo `HttpClient` do pacote `@angular/common/http`. O `HttpClient` é usado para fazer solicitações HTTP.
    - `import { Injectable } from "@angular/core";`: Aqui, estamos importando o decorador `Injectable` do pacote `@angular/core`. O decorador `Injectable` é usado para marcar a classe como um serviço injetável.

2. **Classe `GithubService`**:
    - `@Injectable()`: O decorador `Injectable` é aplicado à classe `GithubService`, indicando que ela pode ser injetada em outros componentes ou serviços.
    - `constructor(private httpClient: HttpClient) { }`: O construtor da classe recebe uma instância do `HttpClient`. Isso permite que o serviço faça solicitações HTTP para a API do GitHub.

3. **Métodos**:
    - `searchProfile(profileName: string): Observable<Profile>`: Este método recebe um nome de perfil como parâmetro e retorna um `Observable` contendo informações do perfil. Ele faz uma solicitação GET para a URL `http://api.github.com/users/${profileName}`.
    - `getRepositories(profileName: string): Observable<Repository[]>`: Este método recebe um nome de perfil como parâmetro e retorna um `Observable` contendo uma lista de repositórios associados ao perfil. Ele faz uma solicitação GET para a URL `http://api.github.com/users/${profileName}/repos`.

4. **Tipos**:
    - `Profile` e `Repository` são tipos definidos em outro arquivo chamado `github.model`. Esses tipos representam os dados retornados pela API do GitHub para perfis de usuário e repositórios.

Em resumo, o `GithubService` é usado para buscar informações de perfis de usuário e repositórios do GitHub por meio de solicitações HTTP.

*/
