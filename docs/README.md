# RCodeAnimes
## Acesse o projeto clicando aqui: https://solicmoba.github.io/RCodeAnimes/

## Esse projeto vai conter: Catálogo de animes, Listagem de animes da temporada, e Sugestões de animes.

### Esse projeto está sendo desenvolvido por mim mesmo como forma de estudos em programação.

#### Estou usando uma API gratuita do site https://jikan.moe/

O projeto não tem data prévia de finalização ou algo do tipo.

Tecnologias a serem utilizadas:
- HTML
- CSS
- JavaScript

Observações: Como pode ver o projeto não tem muitas tecnologias devido as minhas limitações, então estou fazendo esse projeto para que eu possa melhorar meus códigos e ter um projeto com tecnologias puras registradas no github. Digo também que em algum tempo breve eu vou refazer o projeto utilizando mais tecnologias a meu gosto, agradeço desde já =D

### Dia 1 - Estrutura de cabeçalho HTML (3h)
>  Primeiro eu terminei o header, demorei mais ou menos 3 horas mas completei ele praticamente, não tem nada a mais por agora para implementar nele.
 - Responsividade: 🟢 
 - Criação de logo: 🟢
 - Menu hambúrguer: 🟢

### Dia 2 - Conteúdo inicial (4h)
> Notícia boa, estou no dia seguinte e já estou no projeto a mais 4 horas e meia. 
> Hoje eu implementei e arrumei um monte de coisa.

 - Responsividade: 🟢
    - Corrigido o problema onde em dispositivos com telas menores o cabeçalho ficava grudado.
 - Sessão de animes da temporada: 🟡
    - Sessão criada mas ainda não executa nenhuma função.
 - Sessão de Review de fãs: 🟢
    - Criada sessão onde são citados análises de usuários que gostam do conteúdo. Criado 4 cards contendo as informações dentro.
    - Sessão criada mas ainda não executa todas as funções que se espera.
 - Sessão de listagem de animes da temporada: 🟢
    - Criada sessão onde é listado automaticamente os animes da temporada atual.
    - Essa sessão faz junção com a primeira sessão “Sessão de animes da temporada”.
    - Sessão criada mas ainda não executa todas as funções que se espera, e nenhuma API foi adicionada ainda.

### Dia 3 - Progressão na Listagem e Responsividade(4h)
> Hoje eu progredi muito na tarefa que tinha ficado no dia anterior que era a de dar melhorias na listagem de animes de temporada.

> **Progresso:**

- **Atualização 1 (🟡):** A área de responsividade na aba de listagem ainda precisa ser programada. Atualmente, não há responsividade, mas em telas com largura superior a 768px, a tela se ajusta corretamente.
- **Atualização 2 (🟢):** Corrigido o problema na área inicial onde as informações das análises dos usuários fãs só apareciam no primeiro card.
- **Atualização 3 (🟢):** Agora, quando o usuário clica em algum anime da listagem, é redirecionado para outra página com todas as informações úteis sobre o anime, como ano, título, título em inglês, título em japonês, temporada, ranking, popularidade, gêneros, fonte (ex: adaptado pela light novel) e quantidade de episódios. Optei por essa solução por não ter conhecimento prévio de react.js e, portanto, não poder usar o react router. Assim, quando o usuário clica em algum card, o JavaScript cria uma nova camada de CSS para cobrir tudo e cria o HTML diretamente pelo arquivo de JS.
- **Atualização 3 (🟢):** Na parte inicial do site, a imagem de *Animes da Temporada* (que antes era fixa) agora tem função aleatória para mostrar qualquer anime da temporada. Acredito que dessa forma o site fica mais dinâmico e não apenas uma imagem e título fixo.

### Dia 4 - Melhora nas funcionalidades atuais do site
> Hoje eu concertei muita coisa, e também apliquei muito conteúdo novo.

> **Progresso:**

- **Atualização 1 (🟢):** Quando o usuário clica na lupa de pesquisa, agora ela abre uma "nova página" onde ele pode pesquisar por um conteúdo específico e é carregado 25 resultados (no momento só aceita nomes de animes).
- **Atualização 2 (🟢):** Melhorado o Design para dispositívos móveis.

### Dia 5 - Nova sessão: Review de usuários. (3h)
> Hoje eu criei uma nova sessão que mostra reviews de usuários que falaram sobre o anime, lembrando que eu estou utilizando a API Jikan.moe, e por tanto, as reviews dos usuários são resgatadas diretamente do MyAnimeList

> **Progresso:**

- **Atualização 1 (🟡):** Algumas partes do site estão sofrendo um pouco em questão da API, por conta de muitos requests, eu pesquisei e cheguei em um assunto chamado "getStorage para Cache de requests", porém como não tenho conhecimento nessa parte do JS, eu deixei o código como está, não conseguindo implementar todas as sessões novas que eu queria.
- **Promessa 1 (❤️):** Em breve vou aprender sobre esse conceito, e vou refazer esse projeto, ou talvez outro mas com a mesma pegada desse, mas da próxima vez utilizando algum framework que provavelmente vai ser o React.JS já que já tenho alguma noção dele e me sinto mais confortável em trabalhar usando ele.
- **Atualização 2 (🟢):** Melhorado algumas sessões no quesito responsividade para telas menores.

- **Atualização 2 (🟡):** O site está funcional para navegadores no desktops, porém em dispositivos móveis pode surgir alguns problemas na troca de página ao clicar em cards, em breve pretendo arrumar isso.

> Creio que seja isso, o site está quase pronto, e pela primeira vez eu fiz um projeto do início ao fim, não precisando de muita ajuda da web e ter conseguido aprender com os erros de logs, como dizia um grande sábio:

> A programação é = tentar algo novo => errar => pesquisar => (resolver) { return; }

### Dia 6 - Solução para API (1h)
> Notei que sempre que meu código era relogado (F5)
,acontecia um problema onde a API retornava o erro (429 Too Many Requests). Com isso eu me frustrei no dia que ocorreu, e para solucionar eu adicionei um setTimeout() de 3 segundos, que é o tempo para requisitar a API por vez, então com isso os problemas diminuiram.


## License
Copyright (c) 2024 Richard Re'Code
