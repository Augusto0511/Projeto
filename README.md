# Projeto HTML com GitHub Actions

Modelo para cumprir o exercício de CI/CD: validar o HTML, executar testes e publicar no GitHub Pages pela branch `gh-pages`.

## Estrutura

- `public/`: arquivos que serão publicados. Coloque aqui seu HTML, CSS, JavaScript e imagens.
- `.github/workflows/ci.yml`: CI em pushes e pull requests; o job `test` depende de `lint-html`.
- `.github/workflows/deploy.yml`: repete lint e testes e publica na branch `gh-pages` somente depois que ambos passarem em `main`.
- `tests/site.test.js`: testes básicos do arquivo HTML.

## Como adaptar ao HTML da prova

Copie os arquivos do seu site para `public/`. Garanta que a página inicial se chame `public/index.html`. Se seu projeto usa outros caminhos, ajuste o comando do lint e os testes em `tests/site.test.js`.

## Publicar no GitHub

1. Crie um repositório público no GitHub e envie estes arquivos para a branch `main`.
2. Em **Settings → Actions → General → Workflow permissions**, permita acesso de leitura e escrita ao repositório caso a organização/repositório sobrescreva as permissões definidas no workflow.
3. Crie uma branch de funcionalidade, por exemplo `feature/site`, faça uma alteração e envie com `git push -u origin feature/site`.
4. Abra um Pull Request de `feature/site` para `main`. A aba **Actions** deve mostrar a CI. O teste só começa depois que `lint-html` passa.
5. Faça o merge do PR em `main`. O workflow **CD - GitHub Pages** roda novamente lint e testes; depois publica `public/` na branch `gh-pages`.
6. Abra **Settings → Pages** e configure **Deploy from a branch**, branch `gh-pages`, pasta `/(root)`. Salve.
7. Após o workflow concluir, a URL do site aparecerá em **Settings → Pages**.

## Executar os testes localmente

Requer Node.js 22 ou superior:

```bash
npm test
npx --yes html-validate public/index.html
```

## Observações

- O workflow de deploy considera `main` como branch principal. Se o repositório usar `master`, altere `main` nos dois arquivos YAML.
- Os arquivos publicados são apenas os de `public/`, para evitar publicar testes e configurações do repositório.
