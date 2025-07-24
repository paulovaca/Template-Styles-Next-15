
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

      {/* Seção 1: Fundamentos (Cores e Layout) */}
      <section className="section">
        <h2>Fundamentos</h2>
        
        <h3>Paleta de Cores</h3>
        <div className="color-palette">
          <div className="color-card">
            <div className="color-swatch primary-color"></div>
            <span>Primária</span>
          </div>
          <div className="color-card">
            <div className="color-swatch secondary-color"></div>
            <span>Secundária</span>
          </div>
          <div className="color-card">
            <div className="color-swatch accent-color"></div>
            <span>Acento</span>
          </div>
          <div className="color-card">
            <div className="color-swatch success-color"></div>
            <span>Sucesso</span>
          </div>
          <div className="color-card">
            <div className="color-swatch error-color"></div>
            <span>Erro</span>
          </div>
          <div className="color-card">
            <div className="color-swatch warning-color"></div>
            <span>Aviso</span>
          </div>
          <div className="color-card">
            <div className="color-swatch info-color"></div>
            <span>Informação</span>
          </div>
        </div>
      </section>

      {/* Seção 2: Tipografia */}
      <section className="section">
        <h2>Tipografia</h2>
        
        <div className="typography-demo">
          <h1>Título H1 - Heading Principal</h1>
          <h2>Título H2 - Seção Principal</h2>
          <h3>Título H3 - Subseção</h3>
          <h4>Título H4 - Subtítulo</h4>
          <h5>Título H5 - Texto Menor</h5>
          <h6>Título H6 - Texto Pequeno</h6>
          
          <p>Este é um parágrafo regular que demonstra como o texto comum aparece na aplicação. Ele deve ser legível e confortável para leitura em ambos os temas.</p>
          
          <blockquote>
            Esta é uma citação em bloco que se destaca do texto principal. Ela é usada para destacar informações importantes ou citações de outras fontes.
          </blockquote>
          
          <p>Aqui temos um <a href="#" className="link">link padrão</a> que demonstra os diferentes estados de interação.</p>
          
          <p>Código inline: <code>const exemplo = 'Hello World'</code></p>
          
          <pre><code>{`// Bloco de código
function exemploFuncao() {
  console.log('Este é um exemplo de bloco de código');
  return true;
}`}</code></pre>
        </div>
      </section>

      {/* Seção 3: Botões */}
      <section className="section">
        <h2>Botões</h2>
        
        <div className="button-group">
          <h3>Botão Primário</h3>
          <div className="button-variations">
            <button className="button-primary">Normal</button>
            <button className="button-primary" disabled>Desabilitado</button>
          </div>
          
          <h3>Botão Secundário</h3>
          <div className="button-variations">
            <button className="button-secondary">Normal</button>
            <button className="button-secondary" disabled>Desabilitado</button>
          </div>
          
          <h3>Botão Fantasma</h3>
          <div className="button-variations">
            <button className="button-ghost">Normal</button>
            <button className="button-ghost" disabled>Desabilitado</button>
          </div>
          
          <h3>Botão Destrutivo</h3>
          <div className="button-variations">
            <button className="button-destructive">Excluir</button>
            <button className="button-destructive" disabled>Desabilitado</button>
          </div>
        </div>
      </section>

      {/* Seção 4: Elementos de Formulário */}
      <section className="section">
        <h2>Elementos de Formulário</h2>
        
        <div className="form-demo">
          <div className="field-group">
            <label htmlFor="text-input">Rótulo do Campo</label>
            <input 
              type="text" 
              id="text-input"
              className="input"
              placeholder="Digite aqui..."
            />
          </div>
          
          <div className="field-group">
            <label htmlFor="email-input">Email</label>
            <input 
              type="email" 
              id="email-input"
              className="input"
              placeholder="seu@email.com"
            />
          </div>
          
          <div className="field-group">
            <label htmlFor="password-input">Senha</label>
            <input 
              type="password" 
              id="password-input"
              className="input"
              placeholder="••••••••"
            />
          </div>
          
          <div className="field-group">
            <label htmlFor="textarea">Área de Texto</label>
            <textarea 
              id="textarea"
              className="input"
              rows={4}
              placeholder="Digite sua mensagem..."
            ></textarea>
          </div>
          
          <div className="field-group">
            <label htmlFor="select">Seleção</label>
            <select id="select" className="select">
              <option>Selecione uma opção</option>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
            </select>
          </div>
          
          <div className="field-group">
            <div className="checkbox-group">
              <input type="checkbox" id="checkbox1" className="checkbox" />
              <label htmlFor="checkbox1">Opção de checkbox 1</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="checkbox2" className="checkbox" />
              <label htmlFor="checkbox2">Opção de checkbox 2</label>
            </div>
          </div>
          
          <div className="field-group">
            <div className="radio-group">
              <input type="radio" id="radio1" name="radio-example" className="radio" />
              <label htmlFor="radio1">Opção de rádio 1</label>
            </div>
            <div className="radio-group">
              <input type="radio" id="radio2" name="radio-example" className="radio" />
              <label htmlFor="radio2">Opção de rádio 2</label>
            </div>
          </div>
          
          <div className="field-group">
            <label htmlFor="error-input">Campo com Erro</label>
            <input 
              type="text" 
              id="error-input"
              className="input"
              aria-invalid="true"
              placeholder="Campo com erro"
            />
          </div>
          
          <div className="field-group">
            <label htmlFor="disabled-input">Campo Desabilitado</label>
            <input 
              type="text" 
              id="disabled-input"
              className="input"
              disabled
              placeholder="Campo desabilitado"
            />
          </div>
        </div>
      </section>

      {/* Seção 5: Componentes de UI Comuns */}
      <section className="section">
        <h2>Componentes de UI</h2>
        
        <h3>Cards</h3>
        <div className="card-grid">
          <div className="card">
            <h4>Card Exemplo</h4>
            <p>Este é um exemplo de card com conteúdo básico.</p>
          </div>
          <div className="card">
            <h4>Outro Card</h4>
            <p>Cards são úteis para organizar conteúdo relacionado.</p>
          </div>
        </div>
        
        <h3>Avatars</h3>
        <div className="avatar-group">
          <div className="avatar avatar-small">JS</div>
          <div className="avatar avatar-medium">MD</div>
          <div className="avatar avatar-large">LG</div>
        </div>
        
        <h3>Badges</h3>
        <div className="badge-group">
          <span className="badge badge-primary">Primário</span>
          <span className="badge badge-success">Sucesso</span>
          <span className="badge badge-error">Erro</span>
          <span className="badge badge-warning">Aviso</span>
        </div>
        
        <h3>Alertas</h3>
        <div className="alert-group">
          <div className="alert alert-success">
            <strong>Sucesso!</strong> Operação realizada com êxito.
          </div>
          <div className="alert alert-error">
            <strong>Erro!</strong> Algo deu errado. Tente novamente.
          </div>
          <div className="alert alert-warning">
            <strong>Atenção!</strong> Esta ação não pode ser desfeita.
          </div>
          <div className="alert alert-info">
            <strong>Informação:</strong> Aqui está uma informação útil.
          </div>
        </div>
        
        <h3>Tabela</h3>
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
              <td>joao@exemplo.com</td>
              <td><span className="badge badge-success">Ativo</span></td>
              <td><button className="button-ghost">Editar</button></td>
            </tr>
            <tr>
              <td>Maria Santos</td>
              <td>maria@exemplo.com</td>
              <td><span className="badge badge-warning">Pendente</span></td>
              <td><button className="button-ghost">Editar</button></td>
            </tr>
            <tr>
              <td>Pedro Costa</td>
              <td>pedro@exemplo.com</td>
              <td><span className="badge badge-error">Inativo</span></td>
              <td><button className="button-ghost">Editar</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Seção 6: Navegação */}
      <section className="section">
        <h2>Navegação</h2>
        
        <nav className="navbar">
          <ul>
            <li><a href="#" className="nav-link active">Home</a></li>
            <li><a href="#" className="nav-link">Produtos</a></li>
            <li><a href="#" className="nav-link">Sobre</a></li>
            <li><a href="#" className="nav-link">Contato</a></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}
