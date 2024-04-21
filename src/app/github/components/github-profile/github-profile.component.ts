import { Component, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { GithubService } from "../../github.service";
import { Subscription } from "rxjs";
import { Profile } from "../../github.model";

@Component({
    templateUrl: './github-profile.component.html'
})
export class GithubProfileComponent implements OnDestroy {
    profileForm: FormGroup = new FormGroup({
        profile: new FormControl('', Validators.required)
    })
    profile!: Profile;

    private subscriptions = new Subscription();

    constructor(private githubService: GithubService) { }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    onSubmit(): void {
        const { profile } = this.profileForm.value;

        this.subscriptions.add(
            this.githubService.searchProfile(profile).subscribe(
                (response) => {
                    this.profile = response;
                },
                (error) => alert('Erro ao buscar o profile')
            )
        )
    }
}

/*
  Templete URL
  Caminho URL
  Serviço
  Activate route

  anapshot.params[' ']
  A página tem um comportamento assim que inícia

  interface onInit
  Metodo ngOnInit

  erro
    github/componetes/git-hib-prfiole/githiub
    profile
    só logo a resposta[
      a minha respsota, é o profile do
    ]disponilbiliza o prfile para o html7
*/

/*

1. **Componente**:
    - `@Component({ templateUrl: './github-profile.component.html' })`: Este decorador define o componente `GithubProfileComponent` e especifica o arquivo de modelo HTML associado a ele.

2. **Formulário**:
    - `profileForm: FormGroup = new FormGroup({ profile: new FormControl('', Validators.required) })`: Aqui, estamos criando um formulário reativo usando o `FormGroup`. O formulário contém um campo chamado `profile` que é obrigatório (validado pelo `Validators.required`).
    - `profile!: Profile;`: Esta variável do tipo `Profile` será usada para armazenar as informações do perfil do usuário.

3. **Injeção de Dependência**:
    - `constructor(private githubService: GithubService) { }`: O construtor recebe uma instância do serviço `GithubService`. Isso permite que o componente faça chamadas à API do GitHub para buscar informações do perfil.

4. **Método `onSubmit()`**:
    - Este método é chamado quando o formulário é enviado.
    - Ele obtém o valor do campo `profile` do formulário.
    - Em seguida, faz uma chamada ao método `searchProfile(profile)` do serviço `GithubService`.
    - Se a chamada for bem-sucedida, a resposta é atribuída à variável `profile`.
    - Se ocorrer um erro, uma mensagem de alerta é exibida.

Em resumo, o `GithubProfileComponent` é responsável por exibir um formulário onde o usuário pode inserir o nome de um perfil do GitHub. Quando o formulário é enviado, ele busca as informações desse perfil usando o serviço `GithubService`.

*/
