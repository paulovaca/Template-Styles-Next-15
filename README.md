

# Next.js 15 Template Moderno

Um template completo e moderno para inicializar projetos Next.js com sistema de temas, componentes reutilizáveis e uma arquitetura escalável.

## 🚀 Características

- **Next.js 15** com React 19
- **TypeScript** configurado
- **Sistema de Temas** claro/escuro completo
- **Componentes Modulares** reutilizáveis
- **Design Responsivo** mobile-first
- **Guia de Estilos** completo com exemplos
- **Variáveis CSS** centralizadas
- **Arquitetura Escalável**

## 🎨 Sistema de Estilos

### Variáveis CSS Centralizadas

Todas as cores, espaçamentos, fontes e outros estilos são definidos no `app/globals.css` através de variáveis CSS:

- **Cores**: Primária, secundária, accent, sucesso, erro, aviso, info
- **Temas**: Suporte automático a tema claro e escuro
- **Espaçamentos**: Sistema consistente de `--spacing-xs` a `--spacing-3xl`
- **Tipografia**: Tamanhos de fonte de `--font-size-xs` a `--font-size-5xl`
- **Bordas**: Raios padronizados de `--border-radius-sm` a `--border-radius-2xl`
- **Sombras**: Sombras consistentes para cards e elementos

### Componentes Disponíveis

O template inclui uma biblioteca completa de componentes estilizados:

#### Elementos Básicos
- Botões (primário, secundário, fantasma, destrutivo)
- Formulários (inputs, selects, textareas, checkboxes, radios)
- Tipografia (headings, parágrafos, links, código)

#### Componentes de UI
- Cards com hover effects
- Avatares (pequeno, médio, grande)
- Badges e Pills/Tags coloridos
- Progress bars animadas
- Breadcrumbs de navegação
- Tabs interativas

#### Notificações e Estados
- Alerts (sucesso, erro, aviso, info)
- Loading states (spinners, skeleton)
- Empty states
- Tooltips

#### Navegação e Layout
- Modal/Overlay
- Accordion expansível
- Tabelas responsivas
- List items

#### Efeitos Visuais Avançados
- **Gradientes**: Lineares e radiais
- **Glassmorphism**: Efeito de vidro translúcido
- **Neumorphism**: Design com sombras suaves
- **Bordas Animadas**: Gradiente, neon, movimento
- **Sombras Avançadas**: Suaves, coloridas, múltiplas, internas

#### Animações e Transições
- **Hover Effects**: Scale, rotate, bounce, slide
- **Animações Contínuas**: Pulse, float, rotate, glow
- **Animações de Entrada**: Fade in, slide in, zoom in
- **Botões Animados**: Efeitos de shimmer, 3D, ripple
- **Loading Animado**: Dots, bars, wave patterns

## 🛠️ Como Usar

### 1. Iniciando o Projeto

Clique no botão **Run** no Replit para iniciar o servidor de desenvolvimento.

### 2. Estrutura do Projeto

```
app/
├── globals.css          # Variáveis CSS e estilos globais
├── home.module.css      # Estilos específicos da página inicial
├── page.tsx             # Página inicial
├── layout.tsx           # Layout principal
└── styles-example/
    └── page.tsx         # Guia de estilos completo

components/
└── ThemeToggle.tsx      # Componente de mudança de tema

hooks/
└── useTheme.tsx         # Hook para gerenciamento de tema
```

### 3. Personalizando Cores e Estilos

Para personalizar o template para seu projeto:

1. **Edite as variáveis no `app/globals.css`**:
   ```css
   :root {
     --color-primary: #sua-cor-primaria;
     --color-accent: #sua-cor-accent;
     /* ... outras variáveis */
   }
   ```

2. **Mantenha a consistência**: Use sempre as variáveis CSS em vez de cores hardcoded
3. **Teste ambos os temas**: Claro e escuro

### 4. Criando Novas Páginas

```tsx
// app/nova-pagina/page.tsx
import styles from './pagina.module.css'

export default function NovaPagina() {
  return (
    <div className={styles.container}>
      <h1>Nova Página</h1>
      {/* Use as classes globais do globals.css */}
      <button className="button-primary">Botão</button>
    </div>
  )
}
```

### 5. Usando o Sistema de Temas

```tsx
import { useTheme } from '../hooks/useTheme'

export default function MeuComponente() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <div data-theme={theme}>
      <button onClick={toggleTheme}>
        Trocar para {theme === 'light' ? 'escuro' : 'claro'}
      </button>
    </div>
  )
}
```

## 📋 Guia de Estilos

Acesse `/styles-example` para ver todos os componentes e estilos disponíveis em ação. O guia inclui:

- Paleta de cores completa
- Exemplos de tipografia
- Todos os componentes de UI
- Demonstrações de animações
- Efeitos visuais avançados
- Estados e interações

## Getting Started

Hit the run button to start the development server.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) allow you to create custom request handlers for a given route using the Web Request and Response APIs.

The `app/api` directory is mapped to `/api/*`. Folders in this directory with files named `route.ts` are treated as [Route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) instead of pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## 🎯 Melhores Práticas

1. **Sempre use variáveis CSS** em vez de valores hardcoded
2. **Mantenha a consistência** entre os temas claro e escuro
3. **Use módulos CSS** para estilos específicos de componentes
4. **Teste a responsividade** em diferentes dispositivos
5. **Aproveite as animações** para melhorar a experiência do usuário

## 🚀 Deploy no Replit

Para fazer deploy do seu projeto:

1. Clique em **Deploy** no header do workspace
2. Escolha **Static Deployment** ou **Autoscale Deployment**
3. Configure as opções conforme necessário
4. Clique em **Deploy**

## Productionizing your Next App

To make your next App run smoothly in production make sure to deploy your project with [Repl Deployments](https://docs.replit.com/hosting/deployments/about-deployments)!

You can also produce a production build by running `npm run build` and [changing the run command](https://docs.replit.com/programming-ide/configuring-repl#run) to `npm run start`.

## 📝 Customização Rápida

Para adaptar rapidamente para diferentes projetos:

1. Altere as cores primárias e accent no `globals.css`
2. Substitua o título e descrição em `app/page.tsx`
3. Atualize o favicon em `app/favicon.ico`
4. Modifique os textos e links conforme necessário

## 🤝 Contribuição

Este template foi criado para ser livremente utilizado e modificado. Sinta-se à vontade para:

- Usar em projetos pessoais e comerciais
- Modificar conforme suas necessidades
- Compartilhar melhorias
- Sugerir novas funcionalidades

## 📄 Licença

Este projeto é disponibilizado sob licença MIT. Você pode usar, modificar e distribuir livremente.

---

**Template criado por Paulo Minari** - Utilize livremente em seus projetos Next.js

