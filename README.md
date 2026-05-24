# CinemidiaTV

Aplicação web desenvolvida em Vue.js para explorar filmes e séries utilizando a API do TMDB.

O projeto entrega uma experiência moderna, responsiva e interativa, com destaques para carrosséis touch, watchlist persistente, trailers integrados e interface inspirada em plataformas de streaming.

## Preview

<img width="380" height="200" alt="Captura de tela 2026-05-04 172532" src="https://github.com/user-attachments/assets/870f6868-6a50-472f-8f92-4ec015dc845d" /> <br />
<img width="100" height="230" alt="Galaxy-S20-370x822" src="https://github.com/user-attachments/assets/20f905e8-605b-48b9-8ad2-bc377d8a2b7f" />


## Principais recursos

• Catálogo de filmes <br />
• Catálogo de séries <br />
• Página de populares <br />
• Sistema de Watchlist <br />
• Persistência com LocalStorage <br />
• Slider touch responsivo <br />
• Trailer dinâmico do YouTube <br />
• Interface responsiva <br />
• Loading global entre rotas <br />
• Navegação SPA com Vue Router <br />
• Integração com a API do TMDB

## Tecnologias utilizadas

### Front-end

• Vue 3 <br />
• Vue Router <br />
• JavaScript (ES6+) <br />
• CSS3 <br />
• HTML5 <br />
• Vite <br />

### API

• TMDB API

## Funcionalidades

### Home dinâmica

A página principal exibe: <br />
• Filmes populares em destaque <br />
• Background dinâmico <br />
• Informações do filme <br />
• Nota média <br />
• Gêneros <br />
• Navegação por slider <br />
• Controle por toque (touch swipe)

### Sistema de slider

O CinemidiaTV possui sliders interativos com: <br />
• Navegação por botões <br />
• Navegação touch para mobile <br />
• Poster ativo destacado <br />
• Responsividade automática <br />
• Transições suaves

### Página de lançamentos

A seção de lançamentos apresenta: <br />
• Filmes futuros do TMDB <br />
• Cards responsivos <br />
• Gêneros do filme <br />
• Data formatada <br />
• Link externo para página oficial do TMDB


### Trailer integrado

O projeto busca automaticamente o trailer do primeiro filme disponível e exibe diretamente via iframe do YouTube.

### Watchlist

Usuários podem: <br />
• Adicionar filmes <br />
• Remover filmes <br />
• Adicionar séries <br />
• Persistir dados no navegador <br />

A watchlist utiliza:
````localStorage```` para manter os dados salvos mesmo após atualizar a página.

### Loading global

O projeto possui um sistema de loading global entre mudanças de rota.

Fluxo: <br />
• beforeEach ativa loading <br />
• afterEach desativa loading <br />
• Spinner centralizado <br />
• Overlay fullscreen

## Responsividade

O CinemidiaTV foi desenvolvido com foco em dispositivos mobile e desktop.

### Mobile

• Menu lateral hamburger <br />
• Navegação touch <br />
• Ajustes automáticos de layout <br />
• Posters redimensionados <br />
• Sliders adaptados

### Desktop

• Layout widescreen <br />
• Navegação horizontal <br />
• Cards maiores <br />
• Melhor aproveitamento visual <br />

## Integração com TMDB

O projeto utiliza endpoints como: <br />

```
/movie/popular
/movie/upcoming
/discover/movie
/discover/tv
/movie/{id}/videos
/genre/movie/list
```

Imagens: <br />

```https://image.tmdb.org/t/p```

## Instalação

Clone o repositório

```
git clone https://github.com/seu-usuario/cinemidiatv.git
```

Entre na pasta

```
cd cinemidiatv
```

Instale as dependências

```
npm install
```

## Variáveis e configuração

Arquivo:

```
src/config/tmdb.js
```

Estrutura:

```
const API_KEY = "SUA_API_KEY"
const BASE_URL = "https://api.themoviedb.org/3"
```

Você pode gerar sua chave gratuitamente em:

https://www.themoviedb.org/settings/api

## Melhorias futuras

• Sistema de busca <br />
• Página individual do filme <br />
• Favoritos separados <br />
• Infinite scroll <br />
• Dark/Light mode <br />
• Autenticação <br />
• Integração com Firebase <br />
• Avaliações personalizadas <br />
• Player interno <br />
• Filtros avançados <br />
• Paginação dinâmica <br />
• Skeleton loading <br />

## Performance

O projeto utiliza: <br />
• Componentização Vue <br />
• Computed properties <br />
• Renderização dinâmica <br />
• Persistência local <br />
• Transições leves <br />
• Estrutura SPA

## Desenvolvido por

Rafael Ott.

### Contato

• Portfólio: Em Produção <br />
• LinkedIn: [https://www.linkedin.com/rafaelott](https://www.linkedin.com/in/rafael-ott-8435572b1/) <br/>
• Projeto Online: https://cinemidiatv.vercel.app/

## Licença

Este projeto é destinado para fins educacionais e de portfólio.

TMDB API utilizada conforme os termos da plataforma.
