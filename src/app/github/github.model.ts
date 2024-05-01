
export type Follower = {
  login: string;
  avatar_url: string;
}

export type Profile = {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
};

export type Repository = {
  name: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  svn_url: string;
}

/*
  avatar_url
  name
  bio

  São os nossos atributos do profile que vamos usar

  Atributos da APi
*/

/*

1. **`export type Profile`**:
    - Isso define um tipo chamado `Profile`.
    - O tipo `Profile` possui as seguintes propriedades:
        - `login`: Uma string que representa o nome de usuário.
        - `avatar_url`: Uma string que contém a URL do avatar.
        - `name`: Uma string que representa o nome completo.
        - `bio`: Uma string que contém informações sobre a biografia.

2. **`export type Repository`**:
    - Isso define outro tipo chamado `Repository`.
    - O tipo `Repository` possui as seguintes propriedades:
        - `name`: Uma string que representa o nome do repositório.
        - `stargazers_count`: Um número inteiro que indica a quantidade de estrelas (favoritos) que o repositório recebeu.
        - `watchers_count`: Um número inteiro que representa a quantidade de pessoas que estão observando o repositório.
        - `forks_count`: Um número inteiro que indica quantos forks (cópias) do repositório existem.
        - `svn_url`: Uma string que contém a URL do repositório no sistema de controle de versão (Subversion).

Esses tipos podem ser usados para definir a estrutura de dados de perfis de usuário e informações de repositórios em um aplicativo TypeScript. Eles são úteis para garantir que os dados sejam consistentes e bem tipados durante o desenvolvimento. 😊

*/
