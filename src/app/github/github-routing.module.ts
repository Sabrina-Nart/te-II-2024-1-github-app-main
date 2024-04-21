import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GithubProfileComponent } from "./components/github-profile/github-profile.component";
import { GithubRepositoriesComponent } from "./components/github-repositories/github-repositories.component";

const routes: Routes = [
    {
        path: 'profile',
        component: GithubProfileComponent,
    },
    {
        path: 'repositories/:user',
        component: GithubRepositoriesComponent
    },
    {
        path: '**',
        pathMatch: "full",
        redirectTo: 'profile'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GithubRoutingModule { }

/*
  1 module
  2 module
  3
  export
  Classe

  Passar as rotas
  Configura aqui e exporta com as rotas

  rota com lazyload

  carregar do github

  carregar o módulo do github
    import do app.module

    rotas normais, porque os componentes serão carregados com o githunb

    pathMath
    quando não for nenhuma das rotas, redireciona para o profile

    configure os compoentes e math z, carrega z

    um arquivo mode, pasta para os compoentes, model
*/

/*

1. **Definição das Rotas**:
    - `const routes: Routes = [...]`: Aqui, estamos definindo as rotas do aplicativo relacionadas ao GitHub. O array `routes` contém objetos que especificam o caminho da URL e o componente associado a esse caminho.
    - `{ path: 'profile', component: GithubProfileComponent }`: Esta rota mapeia a URL `/profile` para o componente `GithubProfileComponent`. Quando o usuário acessa `/profile`, o Angular carrega esse componente.
    - `{ path: 'repositories/:user', component: GithubRepositoriesComponent }`: Esta rota mapeia a URL `/repositories/:user` para o componente `GithubRepositoriesComponent`. O parâmetro `:user` permite que o Angular capture o nome do usuário na URL e passe-o para o componente.
    - `{ path: '**', pathMatch: "full", redirectTo: 'profile' }`: Esta rota redireciona qualquer outra URL desconhecida (qualquer coisa que não corresponda às rotas anteriores) para a rota `/profile`.

2. **NgModule**:
    - `@NgModule({ ... })`: Aqui, estamos configurando o módulo `GithubRoutingModule`.
    - `imports: [RouterModule.forChild(routes)]`: Importamos o módulo `RouterModule` e configuramos as rotas definidas no array `routes`.
    - `exports: [RouterModule]`: Exportamos o módulo de roteamento para que ele possa ser usado em outros lugares do aplicativo.

Em resumo, o `GithubRoutingModule` define as rotas específicas para as páginas relacionadas ao GitHub no aplicativo Angular.

*/
