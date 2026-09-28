# Trabalho G1 - Front-End: Clone da tela de login do Spotify

Nome: Michel Balzan da Veiga
Matrícula: 1139750
Disciplina: Front-End 
Prof. Matheus Henrique Barquette
Site de referência: https://accounts.spotify.com/pt/login

# Projeto:
Reproduzi a tela de login do Spotify usando HTML e CSS, sem copiar o código-fonte, só olhando o visual do site original.

# Diferenças do site original:
- Troquei a fonte do Spotify (que é paga) pela Montserrat, do Google Fonts.
- Os ícones de Google, Facebook e Apple eu recriei em SVG.
- Os links do rodapé não levam a lugar nenhum, só é decorativo mesmo.
- No Spotify real, primeiro pede o e-mail e só depois mostra a senha em
  outra tela. No meu ficou tudo numa etapa só, já que não tem back-end
  pra validar isso.
- Não coloquei a opção de login por número de telefone, porque exigiria
  verificação por SMS.
- Troquei o título "Olá de novo" por "Login para continuar", pra deixar
  mais claro o que a tela faz.

# Checklist Parte 1:
1.1 Estrutura HTML semântica e acessível
- [x] header com o logo
- [x] main com o conteúdo central
- [x] section pro cartão de login
- [x] article pra cada botão de login social
- [x] footer com nota e nav de links
- [x] formulário com label em cada campo
- [x] ícones decorativos com aria-hidden, logo com aria-label

1.2 Fidelidade visual
- [x] fundo preto, cartão centralizado, botão verde
- [x] mesma organização geral do original (topo, conteúdo, rodapé)
- [x] prints comparativos (mais abaixo)

1.3 CSS: seletores, box model e variáveis
- [x] seletor de classe
- [x] seletor descendente
- [x] pseudo-classe (hover, focus)
- [x] variáveis CSS em :root
- [x] box-sizing: border-box

1.4 Responsividade
- [x] CSS mobile first, funciona sem media query
- [x] grid pra estrutura geral
- [x] flexbox pros cartões e formulário
- [x] media query min-width 768px pra telas maiores
- [x] testado no DevTools e no Live Server

1.5 Personalização
- [x] rodapé com nota pessoal dizendo que é um clone acadêmico

# Prints para comparação:
## Prints comparação

Clone:
<img width="1919" height="1079" alt="Meu clone" src="https://github.com/user-attachments/assets/37ea4902-cd46-4ae2-b4e7-12876ee80be6" />

Site original:
<img width="1915" height="1079" alt="Spotify original" src="https://github.com/user-attachments/assets/77a49095-d7da-4b63-90f9-1feeaa2d744d" />


# Análise da página original (itens da 1.1)
Tags semânticas: o Spotify tem um topo só com o logo (header), o cartão de login no meio (main e section), cada botão social como uma opção independente (article) e os links institucionais no final (footer com nav). Usei essas mesmas tags na mesma ordem.

Imagens e alt: a página não usa tags img, os ícones são SVG. Os decorativos têm aria-hidden="true" e o logo tem aria-label descrevendo o link.

Formulário acessível: o login tem label ligado a cada campo (for e id), autocomplete nos campos e botão de mostrar/ocultar senha com aria-label.
