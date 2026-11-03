# Especificação para agente de desenvolvimento — Audiomanual Consul CPB36

## Objetivo e escopo

Construir um site estático, mobile-first, acessível a pessoa idosa com pouca familiaridade técnica, com **13 telas**, cada qual com título, texto visível simples, ilustração e áudio MP3 pré-gerado. Usar `etapas.json` como fonte canônica do conteúdo e caminhos de mídia. Não depender de API ElevenLabs em execução, backend, login, analytics, pagamento, cookies de rastreamento ou chaves. Hospedar gratuitamente em GitHub Pages (preferência) ou Vercel.

## Fluxo do usuário

- Abertura na etapa 1, ou última etapa visitada, com controle explícito de 'Recomeçar'.
- Uma única etapa visível; progressão `Passo X de 13` e barra visual + representação textual.
- Botões grandes e fixos na área inferior: `Voltar`, `Próximo`; `Próximo` nunca inicia automaticamente. No último passo, `Concluir` retorna à tela inicial somente após escolha explícita.
- Botão de áudio `Ouvir explicação` com ícone, alterna para `Pausar áudio` e `Continuar áudio`, e botão separado `Ouvir de novo`. Áudio nunca toca sem clique. Mudar de etapa sempre pausa e reinicia o áudio; não reproduzir sobreposto.
- Se o áudio estiver ausente ou falhar, exibir mensagem simples e manter todo o texto disponível; nunca impedir navegação.
- Usar título/texto de `etapas.json`, sem expor tags TTS; os arquivos `tts` servem apenas para produção editorial, não devem ser anunciados por leitor de tela na interface.
- Uma ajuda contextual no passo 04/05: `Preciso de ajuda`: 'Feche o registro. Se não souber retirar a torneira ou a conexão não encaixar, chame alguém com experiência.' Sem tentar oferecer instruções técnicas não validadas.
- Etapa 09: exibir observação de 30 segundos e instrução de localizar os dois botões ANTES de conectar. Não utilizar cronômetro automático; não fragmentar esta etapa.
- Persistir índice atual em `localStorage`, tratar indisponibilidade do storage com fallback em memória, sem coletar dados pessoais.

## Acessibilidade

- HTML semântico (`main`, `nav`, `h1`, `button`); idioma `pt-BR`; fonte base >= 20 px, linhas >= 1.45, títulos >= 28 px; botões >= 56 px de altura, áreas de toque >= 48 × 48 px.
- Contraste WCAG AA, foco visível, navegação teclado, suporte a leitores de tela; indicar a mudança de etapa em região `aria-live=polite` sem ler o roteiro inteiro inesperadamente.
- Nenhum texto fundamental dentro da imagem; alt descritivo. Sem animações obrigatórias nem movimento automático.
- Ajustar layout a 320, 360, 390, 430 e 768 px e a zoom de 200%; sem rolagem horizontal.
- Preferir fonte de sistema para carregamento rápido, evitando CDN obrigatória.

## Requisitos técnicos

- Preferir HTML/CSS/JavaScript puros (ou Vite vanilla somente se necessário), sem frameworks pesados.
- Site 100% estático. Em GitHub Pages de projeto, garantir caminhos relativos compatíveis com subdiretório do repositório; não codificar caminhos absolutos de raiz sem base configurável. Os caminhos em `etapas.json` são caminhos lógicos: resolver com helper de base-path para implantação.
- Carregar mídia sob demanda (imagem da etapa atual e próxima; áudio apenas quando iniciado).
- `audio` único com eventos `ended`, `error`, `play`, `pause`; estados de botão sincronizados. Não registrar handlers repetidos ao mudar de etapa.
- Não incluir voz sintética do navegador como substituto silencioso. Se faltar MP3, informar de maneira clara.
- Não publicar antes de revisar as imagens das conexões e do filtro.
- Opcional para versão 2: PWA e cache offline com service worker; não acrescentar como requisito da primeira entrega, pois exige testes de versões e atualização de áudios.

## Estrutura sugerida

```text
index.html
styles.css
app.js
etapas.json
audios/01-intro.mp3 ... 13-done.mp3
imagens/01-intro.webp ... 13-done.webp
README.md
```

## Critérios de aceite

1. Cada uma das 13 telas apresenta título, texto, imagem e controle de áudio independente.
2. Botões de navegação funcionam em celular e teclado; não passam do início/fim.
3. Nenhum áudio começa sozinho; troca de passo interrompe o anterior; replay reinicia do início.
4. O site funciona sem ElevenLabs API, mesmo quando o áudio falha.
5. A etapa 09 preserva a janela de até 30 s após conectar à tomada e os 5 s de botões pressionados.
6. As etapas 10 e 11 mantêm exatamente 5 L de água gelada + 1 L de água natural, sem consumo.
7. Etapa 02 orienta sombra para aparelho **e tubulação**, além de 5 cm livres nas laterais.
8. As imagens foram validadas contra aparelho/manual, ou a publicação fica bloqueada.
9. Testar em aparelhos reais, 320–430 px, e em simulador de conexão lenta.
10. Build/deploy no Pages com caminhos corretos e HTTPS.

## Pendências editoriais que não devem ser resolvidas por suposição

- Orientação final da pega do refil: página 3 do manual menciona posição vertical, enquanto a página 7 menciona horizontal. Confirmar com a figura e equipamento físico; não inventar direção na arte.
- Compatibilidade real da torneira existente, voltagem da tomada e pressão da rede não são verificáveis pelo site. Se não forem conhecidas, orientar ajuda profissional.
- O arquivo original menciona filtro BE1 e CPB36; manter o modelo do projeto e validar o material real antes de publicar.
