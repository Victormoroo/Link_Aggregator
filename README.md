<h1 align="center">Victor Moro — Link Aggregator</h1>

<p align="center">
  Página de links pessoais estilo Linktree, construída com Vite + React + TypeScript.
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=6366f1&labelColor=0d1117">
  <img alt="TypeScript" src="https://img.shields.io/static/v1?label=TypeScript&message=5.7&color=3178c6&labelColor=0d1117">
  <img alt="React" src="https://img.shields.io/static/v1?label=React&message=18&color=61dafb&labelColor=0d1117">
</p>

<br />

<p align="center">
  <img alt="Preview do projeto" src=".github/Preview.jpg" width="80%">
</p>

---

## Tecnologias

- [Vite 6](https://vite.dev/) — build tool e dev server
- [React 18](https://react.dev/) — UI
- [TypeScript 5](https://www.typescriptlang.org/) — tipagem estática
- [CSS Modules](https://github.com/css-modules/css-modules) — estilos escopados
- [Lucide React](https://lucide.dev/) — ícones tree-shakeable
- ESLint + Prettier — qualidade de código

## Funcionalidades

- Tema escuro e claro, com detecção automática da preferência do sistema
- Preferência de tema salva no `localStorage`
- Links com ícones, hover com microinterações
- Badge "em breve" para links indisponíveis
- Totalmente responsivo (mobile-first)
- Acessível: HTML semântico, `aria-label`, navegação por teclado, estados de foco visíveis
- SEO: `<title>`, `<meta description>`, Open Graph, `author`

---

## Rodando localmente

**Pré-requisitos:** Node.js 18+ e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/Victormoroo/Link_Aggregator.git
cd Link_Aggregator

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run preview` | Pré-visualiza o build localmente |
| `npm run lint` | Roda o ESLint |
| `npm run format` | Formata o código com Prettier |

---

## Como editar os links

Abra o arquivo `src/data/links.ts`. Cada link é um objeto com esta estrutura:

```ts
{
  id: 'github',       // identificador único
  label: 'GitHub',    // texto exibido no botão
  url: 'https://...', // URL de destino
  icon: Github,       // ícone do Lucide React
  external: true,     // abre em nova aba se true
  disabled: false,    // exibe badge "em breve" se true
}
```

Para adicionar um novo link, importe o ícone desejado do `lucide-react` e adicione um novo objeto ao array `links`. Nome e handle estão no objeto `profileData` no mesmo arquivo.

---

## Deploy

O projeto gera uma pasta `dist/` com arquivos estáticos prontos para qualquer plataforma:

```bash
npm run build
```

Compatível com **Vercel**, **Netlify**, **Render**, **Cloudflare Pages** e qualquer serviço de hospedagem de sites estáticos.

> Após o deploy, atualize a meta tag `og:url` em `index.html` com o seu domínio real.

---

## Estrutura do projeto

```
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── avatar-dark.png
│   │   └── avatar-light.png
│   ├── components/
│   │   ├── LinkCard.tsx + .module.css
│   │   ├── Profile.tsx + .module.css
│   │   └── ThemeToggle.tsx + .module.css
│   ├── data/
│   │   └── links.ts          ← edite seus links aqui
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── App.tsx + App.module.css
│   ├── main.tsx
│   └── index.css
├── index.html
└── vite.config.ts
```

---

## Próximos passos sugeridos

- [ ] Adicionar URL do portfólio em `links.ts` quando estiver pronto
- [ ] Adicionar uma bio curta em `Profile.tsx`
- [ ] Criar uma imagem OG (`og-image.png`) em `public/` e referenciar em `index.html`
- [ ] Atualizar a meta tag `og:url` com o domínio final

---

## Licença

MIT — desenvolvido por [Victor Moro](https://github.com/Victormoroo)
