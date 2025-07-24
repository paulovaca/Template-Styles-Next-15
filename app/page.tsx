'use client'

import { useState } from 'react'

export default function StyleGuide() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container" data-theme={theme}>
      {/* Header com controle de tema */}
      <header className="header">
        <h1>Guia de Estilos</h1>
        <button 
          onClick={toggleTheme}
          className="button-primary theme-toggle"
        >
          {theme === 'light' ? '🌙 Tema Escuro' : '☀️ Tema Claro'}
        </button>
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
          <div className="avatar avatar-large">LG</div>
        </div>
      </section>
    </div>
  )
}