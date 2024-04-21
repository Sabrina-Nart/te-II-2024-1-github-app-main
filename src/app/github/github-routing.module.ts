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
