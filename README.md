# Audiomanual Consul CPB36

Site estático, mobile-first, com 13 etapas carregadas de `etapas.json`. Não usa backend, dependências ou API de voz.

## Abrir localmente

Na pasta do projeto, execute `python3 -m http.server 8000` e abra `http://localhost:8000`. O arquivo JSON precisa ser servido por HTTP; abrir `index.html` diretamente não funciona.

## Mídia e publicação

Os 13 arquivos MP3 já estão em `audios/` e são carregados somente quando a pessoa inicia o áudio. As imagens PNG das etapas 01–11 e 13 já estão em `imagens/`; falta a imagem da etapa 12. Enquanto ela não for adicionada, o site mostra um placeholder e mantém o texto e a navegação disponíveis.

Em caso de dúvida maior, a interface orienta consultar o manual que acompanha o equipamento, que contém fotos reais e mais detalhes. As imagens técnicas das etapas 03, 05, 06 e 09 dependem de validação com o aparelho/manual antes de publicar. Os briefs e roteiros editoriais estão em `01_ROTEIRO_ELEVENLABS.md` e `02_ROTEIRO_IMAGENS.md`; o escopo completo está em `03_ESPECIFICACAO_AGENTE.md`.

O site resolve os caminhos de mídia e do JSON em relação ao diretório de implantação, incluindo GitHub Pages em subdiretório.
