# 🎬 Gerenciador de Vídeos

Este é um projeto simples de **cadastro e listagem de vídeos**, utilizando HTML, CSS e JavaScript com integração a uma **API Node.js**.

A interface é inspirada no layout do YouTube, com um tema personalizado em **tons de azul**.

## 🚀 Funcionalidades

- 📥 Cadastro de vídeos com título, descrição e duração
- 📃 Listagem de vídeos cadastrados
- ✏️ Edição de vídeos diretamente na interface
- 🗑️ Exclusão de vídeos
- 🔄 Integração com backend via API REST (Node.js)

## 🌐 Acesso Online

> A aplicação **foi publicada de forma ilustrativa no GitHub Pages** para que seja possível visualizar o frontend:

🔗 [Acesse aqui o frontend no GitHub Pages](https://helendellaroveri.github.io/VideosNode/)

⚠️ **Importante**: O GitHub Pages serve apenas para exibir o frontend. Como a aplicação depende de uma API local (`localhost:3333`), as funcionalidades só funcionarão se o backend estiver rodando localmente em sua máquina.

## 💻 Tecnologias utilizadas

### Frontend
- HTML5
- CSS3 (tema visual inspirado no YouTube)
- JavaScript (vanilla)

### Backend
- Node.js
- Express.js
- CORS habilitado

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/HelenDellaRoveri/VideosNode.git
```

2. Acesse a pasta do projeto:

```bash
cd VideosNode
```

3. Instale as dependências (caso esteja com o backend incluso):

```bash
npm install
```

4. Inicie o servidor backend:

```bash
npm run dev
```

5. Abra o `index.html` no navegador para usar o frontend.

## ⚠️ Observações importantes

- Certifique-se de que o backend está rodando na porta `http://localhost:3333`
- O projeto utiliza requisições **CORS**, portanto o backend precisa estar configurado corretamente com o middleware de CORS liberando os métodos `GET`, `POST`, `PUT`, `DELETE`.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Feito por Helen Yohanna.
```
