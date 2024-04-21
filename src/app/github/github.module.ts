import { NgModule } from "@angular/core";
import { GithubRoutingModule } from "./github-routing.module";
import { IonicModule } from "@ionic/angular";
import { GithubProfileComponent } from "./components/github-profile/github-profile.component";
import { GithubRepositoriesComponent } from "./components/github-repositories/github-repositories.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GithubService } from "./github.service";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [GithubProfileComponent, GithubRepositoriesComponent],
    imports: [IonicModule, GithubRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
    providers: [GithubService]
})
export class GithubModule { }

/*
  Traz as rotas juntas

  Precissa carregar

  Module - contem contem a configuração e rotas, que contem os Path

  O github vai usar formulário

  HTTP

  só os módulos http usam ele

  o que eu precisso está no import

  o que se usa, está na declaração

  Seviço está nos profile dele

  Forma os components

  Combum Modium
*/

/*

1. **Declarações**:
    - `declarations: [GithubProfileComponent, GithubRepositoriesComponent]`: Aqui, estamos declarando os componentes que fazem parte deste módulo. Os componentes `GithubProfileComponent` e `GithubRepositoriesComponent` são definidos em outros arquivos e serão usados neste módulo.

2. **Importações**:
    - `imports: [IonicModule, GithubRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule]`: Aqui, estamos importando outros módulos necessários para o funcionamento do `GithubModule`. Vamos entender cada um deles:
        - `IonicModule`: Este módulo é usado para integrar recursos do Ionic Framework ao aplicativo.
        - `GithubRoutingModule`: Este módulo contém as rotas específicas para as páginas relacionadas ao GitHub.
        - `FormsModule` e `ReactiveFormsModule`: Esses módulos são usados para trabalhar com formulários no Angular.
        - `HttpClientModule`: Este módulo é necessário para fazer solicitações HTTP usando o `HttpClient`.
        - `CommonModule`: Este módulo é usado para importar diretivas e recursos comuns do Angular.

3. **Provedores de Serviço**:
    - `providers: [GithubService]`: Aqui, estamos fornecendo o serviço `GithubService` para ser injetado em outros componentes ou serviços. O `GithubService` é responsável por interagir com a API do GitHub para obter informações sobre perfis de usuário e repositórios.

Em resumo, o `GithubModule` configura os componentes, importa os módulos necessários e fornece o serviço `GithubService` para o aplicativo Angular.

*/
