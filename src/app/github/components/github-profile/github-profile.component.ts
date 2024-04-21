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
