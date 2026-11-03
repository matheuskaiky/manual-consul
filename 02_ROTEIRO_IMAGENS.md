# Roteiro visual e produção das imagens

## Padrões gerais

- **13 ilustrações**, uma por etapa, com fidelidade às peças do CPB36; usar como referência principal as figuras do manual nas páginas 2 a 5, e fotos reais do aparelho e do kit quando disponíveis.
- **Quadro mestre:** 1536 × 1024 px (3:2, paisagem), RGB; manter a ação no centro de 1200 × 850 px para cortes em telas estreitas. **Exportar:** WebP 1200 × 800 px, qualidade 80–85, alvo 80–200 KB por imagem (não sacrificar nitidez técnica).
- **Área de segurança:** margem de pelo menos 120 px nas bordas do arquivo mestre. O site mostra em proporção 3:2 e usa `object-fit: contain` para não esconder conexões ou setas.
- **Estilo:** ilustração técnica editorial, iluminação suave, fundo branco/quase branco, cores discretas, sombras leves, formas precisas; mãos adultas apenas quando necessárias. Evitar fotos genéricas e cenários que ocultem detalhes.
- **Anotações:** nomes, números, unidades e avisos devem ser sobrepostos em HTML/CSS, e não gerados como texto dentro da arte. Exceção: rótulos reais já existentes no aparelho devem ser reproduzidos a partir de foto comprovada.
- **Acessibilidade:** texto alternativo específico por imagem; jamais usar cor como único meio de diferenciar aberto/fechado.
- **Validação obrigatória:** forma do adaptador, direção e posição da torneira, profundidade dos engates, painel do produto, orientação do filtro e status de alavanca precisam ser conferidos no manual/fotos reais antes da aprovação. Se não houver referência suficiente, produzir esquema neutro e sinalizar pendência em vez de inventar.

## Imagens por etapa

### 01 — Vamos começar

- Arquivo: `01-intro.webp`
- Cena: Purificador inteiro sobre uma bancada, vista frontal em ambiente doméstico simples; sem mãos, sem pessoas; aparência correspondente ao modelo CPB36.
- Texto alternativo: Purificador Consul sobre uma bancada.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 02 — Escolha o lugar

- Arquivo: `02-location.webp`
- Cena: Aparelho na bancada à sombra, distância lateral de 5 cm marcada por dupla seta; luz solar incidindo longe do aparelho e tubulação; sol riscado apenas como alerta visual.
- Texto alternativo: Instalação em local sombreado, com espaço livre nas laterais.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 03 — Coloque o filtro

- Arquivo: `03-filter.webp`
- Cena: Sequência visual em três quadros: tampa do purificador aberta, remoção da tampa vermelha do refil, encaixe do refil com chave fornecida. Não mostrar posição final de pega ambígua; obter direção exata a partir do equipamento/manual validado.
- Texto alternativo: Como retirar a tampa vermelha e encaixar o filtro.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 04 — Feche a água

- Arquivo: `04-valve.webp`
- Cena: Mão girando registro de água doméstico até fechar, torneira ao fundo; sem sugerir sentido de giro se modelo desconhecido.
- Texto alternativo: Fechamento do registro de água antes da instalação.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 05 — Coloque o adaptador

- Arquivo: `05-adapter.webp`
- Cena: Diagrama técnico explodido da conexão do manual figura 1 e 2: ponto de água roscado, adaptador Consul com registro, torneira, anéis/setas de montagem e fita veda-rosca. Geometria fiel ao kit.
- Texto alternativo: Adaptador instalado entre o cano e a torneira.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 06 — Ligue a mangueirinha

- Arquivo: `06-hose.webp`
- Cena: Dois detalhes lado a lado: tubo branco entrando na conexão rápida do adaptador e tubo entrando na entrada traseira do CPB36; detalhe de marca de profundidade. Sem cortes na mangueira.
- Texto alternativo: Conexão da mangueira no adaptador e atrás do purificador.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 07 — Abra a água

- Arquivo: `07-leaks.webp`
- Cena: Close do adaptador com pequena alavanca horizontal indicada como ABERTO; gotas apenas em painel secundário com alerta ilustrado, sem confundir montagem correta.
- Texto alternativo: Alavanca do adaptador aberta e inspeção de vazamentos.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 08 — Confira a tomada

- Arquivo: `08-outlet.webp`
- Cena: Etiqueta com 127 V ou 220 V representada sem selecionar opção; tomada de parede com plugue direto; ilustração de extensão riscada.
- Texto alternativo: Conferência da voltagem e ligação direta na tomada.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 09 — Ligue e ative o filtro

- Arquivo: `09-activate.webp`
- Cena: Vista superior frontal do painel CPB36 mostrando exatamente os botões natural e gelada destacados por dois círculos discretos e dedos apontando; símbolo discreto 5 s e relógio de 30 s, sem sobreposição sobre rótulos originais.
- Texto alternativo: Botões natural e gelada pressionados simultaneamente.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 10 — Retire cinco litros

- Arquivo: `10-flush-five.webp`
- Cena: Purificador dispensando água em jarra doméstica estável, contador visual 5 L e botão gelada destacado na vista superior em pequeno detalhe.
- Texto alternativo: Primeiros cinco litros de água sendo descartados.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 11 — Retire mais um litro

- Arquivo: `11-flush-one.webp`
- Cena: Purificador dispensando água em jarra, marcador visual 1 L e botão natural destacado, continuidade com a imagem da etapa anterior.
- Texto alternativo: Mais um litro retirado pela opção de água natural.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 12 — Aprenda a usar

- Arquivo: `12-usage.webp`
- Cena: Vista frontal correta do CPB36 com os três botões natural, fria e gelada visíveis; copo centralizado sob bica; mão apertando um botão sem ocultar rótulos.
- Texto alternativo: Copo sob a bica e os três botões de água.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

### 13 — Tudo pronto!

- Arquivo: `13-done.webp`
- Cena: Purificador sobre bancada sombreada com copo cheio de água, composição limpa e acolhedora, sem pessoas, sem qualquer texto desenhado.
- Texto alternativo: Purificador instalado e copo com água pronto para beber.
- Tamanho de exportação: 1200 × 800 WebP; fonte 1536 × 1024.

## Restrições adicionais de produção

- O tubo e a entrada de água devem parecer realmente ligados e não suspensos no ar.
- Não mostrar a mangueira conectada à saída de água de consumo.
- Não representar instalação em torneira sem adaptador apropriado ou dispositivo elétrico com extensão.
- Para as etapas 05, 06 e 09, comparar render lado a lado com as figuras 1–4 e painel do manual.
- Não assumir que imagens sintéticas são automaticamente corretas: revisão humana obrigatória.
