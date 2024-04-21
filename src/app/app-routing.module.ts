import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'github',
    pathMatch: 'full'
  },
  {
    path: 'github',
    loadChildren: () => import('./github/github.module').then(module => module.GithubModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

/*

1. **Importações**:
    - `import { NgModule } from '@angular/core';`: Isso importa o módulo `NgModule` do pacote `@angular/core`.
    - `import { PreloadAllModules, RouterModule, Routes } from '@angular/router';`: Aqui, estamos importando os módulos necessários para configurar o roteamento no Angular. O `RouterModule` é usado para definir rotas e o `PreloadAllModules` é uma estratégia de pré-carregamento para carregar todos os módulos preguiçosos (lazy-loaded) no início.

2. **Definição das Rotas**:
    - `const routes: Routes = [...]`: Aqui, estamos definindo as rotas do aplicativo. O array `routes` contém objetos que especificam o caminho da URL e o módulo associado a esse caminho.
    - `{ path: '', redirectTo: 'github', pathMatch: 'full' }`: Esta rota redireciona a URL raiz (`''`) para a rota `'github'`. O `pathMatch: 'full'` garante que a correspondência seja exata.
    - `{ path: 'github', loadChildren: () => import('./github/github.module').then(module => module.GithubModule) }`: Esta rota carrega o módulo `GithubModule` de forma preguiçosa (lazy-loaded) quando a URL contém `/github`.

3. **NgModule**:
    - `@NgModule({ ... })`: Aqui, estamos configurando o módulo principal do aplicativo.
    - `imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })]`: Importamos o módulo de roteamento e configuramos a estratégia de pré-carregamento para carregar todos os módulos preguiçosos no início.
    - `exports: [RouterModule]`: Exportamos o módulo de roteamento para que ele possa ser usado em outros lugares do aplicativo.

Em resumo, o código define as rotas do aplicativo Angular, redireciona a URL raiz para a rota `'github'` e carrega o módulo `GithubModule` de forma preguiçosa quando necessário.

*/
