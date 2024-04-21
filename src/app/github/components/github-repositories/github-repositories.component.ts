import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GithubService } from "../../github.service";
import { Subscription } from "rxjs";
import { Repository } from "../../github.model";

@Component({
    templateUrl: './github-repositories.component.html'
})
export class GithubRepositoriesComponent implements OnInit, OnDestroy {

    private subscription = new Subscription();

    repositories: Repository[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private githubService: GithubService
    ) { }

    ngOnInit(): void {
        const user = this.activatedRoute.snapshot.params['user'];

        this.subscription.add(
            this.githubService.getRepositories(user).subscribe(
                response => {
                    console.log(response)
                    this.repositories = response;
                },
                () => alert('Erro ao buscar repositórios')
            )
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}

/*

1. **Injeção de Dependência**:
    - `constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }`: O construtor recebe duas instâncias de serviços. O `ActivatedRoute` é usado para obter informações sobre a rota atual (como parâmetros da URL), e o `GithubService` é usado para buscar informações sobre os repositórios.

2. **Método `ngOnInit()`**:
    - Este método é chamado quando o componente é inicializado.
    - Ele obtém o nome do usuário da URL usando `this.activatedRoute.snapshot.params['user']`.
    - Em seguida, faz uma chamada ao método `getRepositories(user)` do serviço `GithubService`.
    - Se a chamada for bem-sucedida, a resposta é atribuída à variável `repositories`.
    - Se ocorrer um erro, uma mensagem de alerta é exibida.

3. **Método `ngOnDestroy()`**:
    - Este método é chamado quando o componente está prestes a ser destruído (por exemplo, quando o usuário navega para outra página).
    - Ele cancela a inscrição no `Subscription` para evitar vazamentos de memória.

Em resumo, o `GithubRepositoriesComponent` busca informações sobre os repositórios associados a um perfil de usuário do GitHub e exibe essas informações na página.

*/
