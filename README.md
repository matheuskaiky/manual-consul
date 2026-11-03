# Audiomanual Consul CPB36

Site estático, mobile-first, com 13 etapas carregadas de `etapas.json`. Não usa backend, dependências ou API de voz.

## Abrir localmente

Na pasta do projeto, execute `python3 -m http.server 8000` e abra `http://localhost:8000`. O arquivo JSON precisa ser servido por HTTP; abrir `index.html` diretamente não funciona.

## Mídia e publicação

Os arquivos MP3 e WebP ainda não estão incluídos. O site mostra placeholders acessíveis e mantém a navegação disponível quando a mídia falta. Coloque os arquivos nos caminhos `audios/` e `imagens/` definidos em `etapas.json`.

As imagens técnicas das etapas 03, 05, 06 e 09 dependem de validação com o aparelho/manual antes de publicar. Os briefs e roteiros editoriais estão em `01_ROTEIRO_ELEVENLABS.md` e `02_ROTEIRO_IMAGENS.md`; o escopo completo está em `03_ESPECIFICACAO_AGENTE.md`.

O site resolve os caminhos de mídia e do JSON em relação ao diretório de implantação, incluindo GitHub Pages em subdiretório.
