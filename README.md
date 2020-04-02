# Be the hero.
Be the Hero é um projeto que ajuda ONGs a encontrarem pessoas que desejam contribuir - feito na Semana OmniStack 11.

## Backend da aplicação desenvolvido em NodeJs.
### Exemplos de requisições enviadas ao backend através do insomnia.

#### Criação de uma nova ONG.
##### Nesta rota é são enviados os dados para o cadastro de uma ONG e a API retorna o ID dessa ONG.
![criaçaoong](https://user-images.githubusercontent.com/49623348/78280712-e4a13f80-74ef-11ea-9d25-6a030f69f00d.png)

#### Criação de um novo caso para uma ONG.
##### Nesta rota é são enviados os dados para o cadastro de um caso junto com o ID de uma ONG já existente e a API retorna o ID desse caso.
![criaçaoincidente](https://user-images.githubusercontent.com/49623348/78280730-e834c680-74ef-11ea-867d-2581094bb29c.png)

## Frontend web da aplicação desenvolvido em Javascript com ReactJs.
### Screenshots das páginas.

#### Página de login da ONG.
##### Nesta página o usuário pode fazer login com o ID recebido no cadastro.
![home](https://user-images.githubusercontent.com/49623348/78280723-e66b0300-74ef-11ea-9d45-69dc643e5cae.png)

#### Página de cadastro de uma ONG.
##### Nesta página o usuário pode preencher o formulário de cadastro e será retornado o ID de sua ONG.
![cadastro](https://user-images.githubusercontent.com/49623348/78280715-e539d600-74ef-11ea-88cf-824734e69e7b.png)

#### Dashboard principal.
##### Esta é a página que o usuário tem acesso após o login, nela ele pode ver uma lista com todos os casos da sua ONG, deletar casos ou criar um novo caso.
![dashboard](https://user-images.githubusercontent.com/49623348/78282151-321eac00-74f2-11ea-9ebd-441a6348a213.png)

#### Página de cadastro de um caso.
##### Nesta página o usuário pode preencher o formulário de cadastro para cadastrar um novo caso em sua ONG.
![casocadastro](https://user-images.githubusercontent.com/49623348/78280719-e5d26c80-74ef-11ea-9993-9a778ff43935.png)

## Frontend mobile da aplicação desenvolvido em Javascript com React Native.
### Screenshots das telas.

#### Splash screen.
##### Tela que o usuário vê ao abrir o aplicativo.
![splash](https://user-images.githubusercontent.com/49623348/78283413-20d69f00-74f4-11ea-8da8-1dc8656c93f6.png)

#### Lista de casos.
##### Tela em que o usuário pode ver os casos de todas as ONGs e se decidir ajudar alguma poderá selecionar mais detalhes. 
![casoslista](https://user-images.githubusercontent.com/49623348/78283412-20d69f00-74f4-11ea-9981-7d31d63071b0.png)

#### Detalhes de um caso.
##### Tela em que o usuário pode ver mais detalhes sobre um caso que ele selecionou.
##### Caso ele escolha ajudar, poderá selecionar "Whatsapp" ou "Email".
##### O botão "Whatsapp" irá redirecioná-lo para uma conversa do whatsapp (Caso esteja instalado) com o número cadastrado pela ONG.
##### O botão "Email" irá redirecioná-lo para o aplicativo padrão de email ja preparado para enviar para o email cadastrado pela ONG.
![casodetalhes](https://user-images.githubusercontent.com/49623348/78283410-203e0880-74f4-11ea-9e01-f81d37b835d4.png)
