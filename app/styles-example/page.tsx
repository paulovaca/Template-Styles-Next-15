'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function StyleGuide() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container" data-theme={theme}>
      {/* Header com controle de tema */}
      <header className="header">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
          <Link href="/" className="button-secondary" style={{textDecoration: 'none'}}>
            ← Voltar para Home
          </Link>
          <h1 style={{margin: 0, flex: 1, textAlign: 'center'}}>Guia de Estilos</h1>
          <button 
            onClick={toggleTheme}
            className="button-primary theme-toggle"
          >
            {theme === 'light' ? '🌙 Tema Escuro' : '☀️ Tema Claro'}
          </button>
        </div>
      </header>

      {/* Seção 1: Paleta de Cores */}
      <section className="section">
        <h2>Paleta de Cores</h2>
        <div className="color-palette">
          <div className="color-item">
            <div className="color-sample" style={{backgroundColor: 'var(--color-primary)'}}></div>
            <div className="color-info">
              <h4>Primária</h4>
              <p>Cor principal da aplicação</p>
            </div>
          </div>
          <div className="color-item">
            <div className="color-sample" style={{backgroundColor: 'var(--color-secondary)'}}></div>
            <div className="color-info">
              <h4>Secundária</h4>
              <p>Cor de apoio</p>
            </div>
          </div>
          <div className="color-item">
            <div className="color-sample" style={{backgroundColor: 'var(--color-accent)'}}></div>
            <div className="color-info">
              <h4>Destaque</h4>
              <p>Cor de acento</p>
            </div>
          </div>
          <div className="color-item">
            <div className="color-sample" style={{backgroundColor: 'var(--color-success)'}}></div>
            <div className="color-info">
              <h4>Sucesso</h4>
              <p>Para mensagens positivas</p>
            </div>
          </div>
          <div className="color-item">
            <div className="color-sample" style={{backgroundColor: 'var(--color-error)'}}></div>
            <div className="color-info">
              <h4>Erro</h4>
              <p>Para mensagens de erro</p>
            </div>
          </div>
          <div className="color-item">
            <div className="color-sample" style={{backgroundColor: 'var(--color-warning)'}}></div>
            <div className="color-info">
              <h4>Aviso</h4>
              <p>Para alertas importantes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Tipografia */}
      <section className="section">
        <h2>Tipografia</h2>
        <h1>Título 1 (H1)</h1>
        <h2>Título 2 (H2)</h2>
        <h3>Título 3 (H3)</h3>
        <h4>Título 4 (H4)</h4>
        <h5>Título 5 (H5)</h5>
        <h6>Título 6 (H6)</h6>

        <p>Este é um parágrafo de exemplo que demonstra como o texto comum aparece na aplicação. Ele deve ser legível e ter um bom contraste com o fundo.</p>

        <blockquote>
          Esta é uma citação de exemplo que se destaca do texto comum através de estilização diferenciada.
        </blockquote>

        <p>
          Este é um link <a href="#">que leva a outro lugar</a> e demonstra o estilo dos links na aplicação.
        </p>

        <p>
          Código inline: <code>const exemplo = "Hello World"</code>
        </p>

        <pre><code>{`function exemplo() {
  return "Hello World";
}`}</code></pre>
      </section>

      {/* Seção 3: Botões */}
      <section className="section">
        <h2>Botões</h2>

        <h3>Variações</h3>
        <div style={{marginBottom: '2rem'}}>
          <button className="button-primary">Botão Primário</button>
          <button className="button-secondary">Botão Secundário</button>
          <button className="button-ghost">Botão Fantasma</button>
          <button className="button-destructive">Botão Destrutivo</button>
        </div>

        <h3>Estados Desabilitados</h3>
        <div>
          <button className="button-primary" disabled>Primário Desabilitado</button>
          <button className="button-secondary" disabled>Secundário Desabilitado</button>
          <button className="button-ghost" disabled>Fantasma Desabilitado</button>
          <button className="button-destructive" disabled>Destrutivo Desabilitado</button>
        </div>
      </section>

      {/* Seção 4: Formulários */}
      <section className="section">
        <h2>Elementos de Formulário</h2>

        <div style={{maxWidth: '400px'}}>
          <label htmlFor="text-input">Campo de Texto</label>
          <input 
            type="text" 
            id="text-input"
            className="input"
            placeholder="Digite algo..."
          />

          <label htmlFor="email-input">Email</label>
          <input 
            type="email" 
            id="email-input"
            className="input"
            placeholder="seu@email.com"
          />

          <label htmlFor="password-input">Senha</label>
          <input 
            type="password" 
            id="password-input"
            className="input"
            placeholder="Sua senha"
          />

          <label htmlFor="textarea">Área de Texto</label>
          <textarea 
            id="textarea"
            rows={4}
            placeholder="Digite uma mensagem mais longa..."
          ></textarea>

          <label htmlFor="select">Seleção</label>
          <select id="select" className="select">
            <option>Escolha uma opção</option>
            <option>Opção 1</option>
            <option>Opção 2</option>
            <option>Opção 3</option>
          </select>

          <div className="checkbox-group">
            <input type="checkbox" id="checkbox" className="checkbox" />
            <label htmlFor="checkbox">Checkbox</label>
          </div>

          <div className="radio-group">
            <input type="radio" id="radio1" name="radio" className="radio" />
            <label htmlFor="radio1">Opção 1</label>
          </div>

          <div className="radio-group">
            <input type="radio" id="radio2" name="radio" className="radio" />
            <label htmlFor="radio2">Opção 2</label>
          </div>

          <h3>Estados de Erro</h3>
          <label htmlFor="error-input">Campo com Erro</label>
          <input 
            type="text" 
            id="error-input"
            className="input"
            aria-invalid="true"
            defaultValue="Valor inválido"
          />
        </div>
      </section>

      {/* Seção 5: Componentes UI */}
      <section className="section">
        <h2>Componentes de UI</h2>

        <h3>Cards</h3>
        <div className="card-grid">
          <div className="card">
            <h4>Card de Exemplo 1</h4>
            <p>Este é um exemplo de card que pode conter várias informações organizadas de forma clara e acessível.</p>
          </div>
          <div className="card">
            <h4>Card de Exemplo 2</h4>
            <p>Outro exemplo de card demonstrando como eles se comportam em um layout de grid responsivo.</p>
          </div>
          <div className="card">
            <h4>Card de Exemplo 3</h4>
            <p>Um terceiro card para mostrar como múltiplos elementos se organizam no espaço disponível.</p>
          </div>
        </div>

        <h3>Avatares</h3>
        <div className="avatar-group">
          <div className="avatar avatar-small">JS</div>
          <div className="avatar avatar-medium">MD</div>
          <div className="avatar avatar-large">AB</div>
        </div>

        <h3>Badges</h3>
        <div className="badge-group">
          <span className="badge badge-primary">Primário</span>
          <span className="badge badge-secondary">Secundário</span>
          <span className="badge badge-success">Sucesso</span>
          <span className="badge badge-warning">Atenção</span>
          <span className="badge badge-error">Erro</span>
        </div>

        <h3>Pills/Tags</h3>
        <div className="pill-group">
          <span className="pill">React</span>
          <span className="pill">TypeScript</span>
          <span className="pill">Next.js</span>
          <span className="pill">CSS</span>
        </div>

        <h3>Progress Bar</h3>
        <div className="progress-examples">
          <div className="progress-item">
            <label>Progresso 25%</label>
            <div className="progress">
              <div className="progress-bar" style={{width: '25%'}}></div>
            </div>
          </div>
          <div className="progress-item">
            <label>Progresso 60%</label>
            <div className="progress">
              <div className="progress-bar" style={{width: '60%'}}></div>
            </div>
          </div>
          <div className="progress-item">
            <label>Progresso 90%</label>
            <div className="progress">
              <div className="progress-bar" style={{width: '90%'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6: Notificações e Estados */}
      <section className="section">
        <h2>Notificações e Estados</h2>

        <h3>Alerts</h3>
        <div className="alert alert-success">
          <strong>Sucesso!</strong> Operação realizada com sucesso.
        </div>
        <div className="alert alert-warning">
          <strong>Atenção!</strong> Verifique as informações antes de continuar.
        </div>
        <div className="alert alert-error">
          <strong>Erro!</strong> Algo deu errado. Tente novamente.
        </div>
        <div className="alert alert-info">
          <strong>Informação:</strong> Esta é uma mensagem informativa.
        </div>

        <h3>Loading States</h3>
        <div className="loading-examples">
          <div className="spinner"></div>
          <div className="skeleton-box"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text skeleton-text-short"></div>
        </div>

        <h3>Empty States</h3>
        <div className="empty-state">
          <div className="empty-state-icon">📂</div>
          <h4>Nenhum item encontrado</h4>
          <p>Comece adicionando um novo item ao seu projeto.</p>
          <button className="button-primary">Adicionar Item</button>
        </div>
      </section>

      {/* Seção 7: Navegação e Layout */}
      <section className="section">
        <h2>Navegação e Layout</h2>

        <h3>Breadcrumbs</h3>
        <nav className="breadcrumb">
          <a href="#">Home</a>
          <span className="breadcrumb-separator">/</span>
          <a href="#">Projetos</a>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Guia de Estilos</span>
        </nav>

        <h3>Tabs</h3>
        <div className="tabs">
          <button className="tab tab-active">Visão Geral</button>
          <button className="tab">Configurações</button>
          <button className="tab">Relatórios</button>
          <button className="tab">Histórico</button>
        </div>

        <h3>Dividers</h3>
        <p>Texto antes do divisor</p>
        <hr className="divider" />
        <p>Texto depois do divisor</p>
        <div className="divider-with-text">
          <span>OU</span>
        </div>
        <p>Texto após divisor com texto</p>
      </section>

      {/* Seção 8: Interação e Feedback */}
      <section className="section">
        <h2>Interação e Feedback</h2>

        <h3>Tooltips</h3>
        <div className="tooltip-examples">
          <button className="button-secondary tooltip-trigger" title="Esta é uma dica de ferramenta">
            Hover para tooltip
          </button>
        </div>

        <h3>Modal/Overlay</h3>
        <div className="modal-example">
          <div className="modal-backdrop">
            <div className="modal">
              <div className="modal-header">
                <h3>Título do Modal</h3>
                <button className="modal-close">×</button>
              </div>
              <div className="modal-body">
                <p>Conteúdo do modal vai aqui. Este é um exemplo de como um modal deve aparecer.</p>
              </div>
              <div className="modal-footer">
                <button className="button-secondary">Cancelar</button>
                <button className="button-primary">Confirmar</button>
              </div>
            </div>
          </div>
        </div>

        <h3>Accordion</h3>
        <div className="accordion">
          <details className="accordion-item">
            <summary className="accordion-header">Seção 1</summary>
            <div className="accordion-content">
              <p>Conteúdo da primeira seção do accordion.</p>
            </div>
          </details>
          <details className="accordion-item">
            <summary className="accordion-header">Seção 2</summary>
            <div className="accordion-content">
              <p>Conteúdo da segunda seção do accordion.</p>
            </div>
          </details>
        </div>
      </section>

      {/* Seção 9: Dados e Tabelas */}
      <section className="section">
        <h2>Dados e Tabelas</h2>

        <h3>Table</h3>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>João Silva</td>
                <td>joao@email.com</td>
                <td><span className="badge badge-success">Ativo</span></td>
                <td>
                  <button className="button-ghost">Editar</button>
                  <button className="button-destructive">Excluir</button>
                </td>
              </tr>
              <tr>
                <td>Maria Santos</td>
                <td>maria@email.com</td>
                <td><span className="badge badge-warning">Pendente</span></td>
                <td>
                  <button className="button-ghost">Editar</button>
                  <button className="button-destructive">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>List Items</h3>
        <ul className="list">
          <li className="list-item">
            <div className="list-item-content">
              <h4>Item de Lista 1</h4>
              <p>Descrição do primeiro item</p>
            </div>
            <div className="list-item-actions">
              <button className="button-ghost">Editar</button>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item-content">
              <h4>Item de Lista 2</h4>
              <p>Descrição do segundo item</p>
            </div>
            <div className="list-item-actions">
              <button className="button-ghost">Editar</button>
            </div>
          </li>
        </ul>
      </section>

      {/* Seção 10: Gradientes e Degradês */}
      <section className="section">
        <h2>Gradientes e Degradês</h2>

        <h3>Gradientes Lineares</h3>
        <div className="gradient-examples">
          <div className="gradient-box gradient-primary">
            <span>Gradiente Primário</span>
          </div>
          <div className="gradient-box gradient-secondary">
            <span>Gradiente Secundário</span>
          </div>
          <div className="gradient-box gradient-sunset">
            <span>Pôr do Sol</span>
          </div>
          <div className="gradient-box gradient-ocean">
            <span>Oceano</span>
          </div>
        </div>

        <h3>Gradientes Radiais</h3>
        <div className="gradient-examples">
          <div className="gradient-box gradient-radial-primary">
            <span>Radial Primário</span>
          </div>
          <div className="gradient-box gradient-radial-rainbow">
            <span>Arco-íris</span>
          </div>
        </div>

        <h3>Botões com Gradiente</h3>
        <div style={{marginBottom: '2rem'}}>
          <button className="button-gradient-primary">Botão Gradiente</button>
          <button className="button-gradient-success">Sucesso Gradiente</button>
          <button className="button-gradient-warning">Aviso Gradiente</button>
        </div>

        <h3>Cards com Gradiente</h3>
        <div className="card-grid">
          <div className="card gradient-card-1">
            <h4>Card Gradiente 1</h4>
            <p>Card com fundo gradiente sutil e elegante.</p>
          </div>
          <div className="card gradient-card-2">
            <h4>Card Gradiente 2</h4>
            <p>Outro exemplo de card com gradiente diferente.</p>
          </div>
        </div>
      </section>

      {/* Seção 11: Animações e Transições */}
      <section className="section">
        <h2>Animações e Transições</h2>

        <h3>Animações de Hover</h3>
        <div className="animation-examples">
          <div className="animation-box hover-scale">
            <span>Hover Scale</span>
          </div>
          <div className="animation-box hover-rotate">
            <span>Hover Rotate</span>
          </div>
          <div className="animation-box hover-bounce">
            <span>Hover Bounce</span>
          </div>
          <div className="animation-box hover-slide">
            <span>Hover Slide</span>
          </div>
        </div>

        <h3>Animações Contínuas</h3>
        <div className="animation-examples">
          <div className="animation-box pulse-animation">
            <span>Pulse</span>
          </div>
          <div className="animation-box float-animation">
            <span>Float</span>
          </div>
          <div className="animation-box rotate-animation">
            <span>Rotate</span>
          </div>
          <div className="animation-box glow-animation">
            <span>Glow</span>
          </div>
        </div>

        <h3>Elementos com Animação de Entrada</h3>
        <div className="entry-animations">
          <div className="entry-box fade-in">
            <h4>Fade In</h4>
            <p>Aparece gradualmente</p>
          </div>
          <div className="entry-box slide-in-left">
            <h4>Slide In Left</h4>
            <p>Desliza da esquerda</p>
          </div>
          <div className="entry-box slide-in-up">
            <h4>Slide In Up</h4>
            <p>Desliza de baixo</p>
          </div>
          <div className="entry-box zoom-in">
            <h4>Zoom In</h4>
            <p>Aparece com zoom</p>
          </div>
        </div>

        <h3>Botões Animados</h3>
        <div style={{marginBottom: '2rem'}}>
          <button className="button-animated-1">Botão Animado 1</button>
          <button className="button-animated-2">Botão Animado 2</button>
          <button className="button-animated-3">Botão Ripple</button>
        </div>

        <h3>Loading com Animação</h3>
        <div className="animated-loading">
          <div className="spinner-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="spinner-bars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="spinner-wave">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Seção 12: Efeitos Visuais Avançados */}
      <section className="section">
        <h2>Efeitos Visuais Avançados</h2>

        <h3>Glassmorphism</h3>
        <div className="glass-container">
          <div className="glass-card">
            <h4>Efeito Glass</h4>
            <p>Card com efeito de vidro translúcido</p>
            <button className="button-glass">Botão Glass</button>
          </div>
        </div>

        <h3>Neumorphism</h3>
        <div className="neuro-container">
          <div className="neuro-card">
            <h4>Neumorphism</h4>
            <p>Design com sombras suaves</p>
          </div>
          <button className="neuro-button">Botão Neuro</button>
        </div>

        <h3>Bordas Animadas</h3>
        <div className="border-animations">
          <div className="border-box border-gradient">
            <span>Borda Gradiente</span>
          </div>
          <div className="border-box border-moving">
            <span>Borda Movendo</span>
          </div>
          <div className="border-box border-neon">
            <span>Borda Neon</span>
          </div>
        </div>

        <h3>Shadows Avançadas</h3>
        <div className="shadow-examples">
          <div className="shadow-box shadow-soft">Sombra Suave</div>
          <div className="shadow-box shadow-colored">Sombra Colorida</div>
          <div className="shadow-box shadow-multiple">Sombras Múltiplas</div>
          <div className="shadow-box shadow-inset">Sombra Interna</div>
        </div>
      </section>
    </div>
  )
}