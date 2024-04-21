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
