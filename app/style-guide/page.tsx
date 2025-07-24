
'use client'

import { useState } from 'react'
import styles from './StyleGuide.module.css'

export default function StyleGuide() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={styles.container} data-theme={theme}>
      {/* Header com controle de tema */}
      <header className={styles.header}>
        <h1>Guia de Estilos</h1>
        <button 
          onClick={toggleTheme}
          className={`${styles.buttonPrimary} ${styles.themeToggle}`}
        >
          {theme === 'light' ? '🌙 Tema Escuro' : '☀️ Tema Claro'}
        </button>
      </header>

      {/* Seção 1: Fundamentos (Cores e Layout) */}
      <section className={styles.section}>
        <h2>Fundamentos</h2>
        
        <h3>Paleta de Cores</h3>
        <div className={styles.colorPalette}>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.primaryColor}`}></div>
            <span>Primária</span>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.secondaryColor}`}></div>
            <span>Secundária</span>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.accentColor}`}></div>
            <span>Acento</span>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.successColor}`}></div>
            <span>Sucesso</span>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.errorColor}`}></div>
            <span>Erro</span>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.warningColor}`}></div>
            <span>Aviso</span>
          </div>
          <div className={styles.colorCard}>
            <div className={`${styles.colorSwatch} ${styles.infoColor}`}></div>
            <span>Informação</span>
          </div>
        </div>
      </section>

      {/* Seção 2: Tipografia */}
      <section className={styles.section}>
        <h2>Tipografia</h2>
        
        <div className={styles.typographyDemo}>
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
          
          <p>Aqui temos um <a href="#" className={styles.link}>link padrão</a> que demonstra os diferentes estados de interação.</p>
          
          <p>Código inline: <code>const exemplo = 'Hello World'</code></p>
          
          <pre><code>{`// Bloco de código
function exemploFuncao() {
  console.log('Este é um exemplo de bloco de código');
  return true;
}`}</code></pre>
        </div>
      </section>

      {/* Seção 3: Botões */}
      <section className={styles.section}>
        <h2>Botões</h2>
        
        <div className={styles.buttonGroup}>
          <h3>Botão Primário</h3>
          <div className={styles.buttonVariations}>
            <button className={styles.buttonPrimary}>Normal</button>
            <button className={styles.buttonPrimary} disabled>Desabilitado</button>
          </div>
          
          <h3>Botão Secundário</h3>
          <div className={styles.buttonVariations}>
            <button className={styles.buttonSecondary}>Normal</button>
            <button className={styles.buttonSecondary} disabled>Desabilitado</button>
          </div>
          
          <h3>Botão Fantasma</h3>
          <div className={styles.buttonVariations}>
            <button className={styles.buttonGhost}>Normal</button>
            <button className={styles.buttonGhost} disabled>Desabilitado</button>
          </div>
          
          <h3>Botão Destrutivo</h3>
          <div className={styles.buttonVariations}>
            <button className={styles.buttonDestructive}>Excluir</button>
            <button className={styles.buttonDestructive} disabled>Desabilitado</button>
          </div>
        </div>
      </section>

      {/* Seção 4: Elementos de Formulário */}
      <section className={styles.section}>
        <h2>Elementos de Formulário</h2>
        
        <div className={styles.formDemo}>
          <div className={styles.fieldGroup}>
            <label htmlFor="text-input">Rótulo do Campo</label>
            <input 
              type="text" 
              id="text-input"
              className={styles.input}
              placeholder="Digite aqui..."
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label htmlFor="email-input">Email</label>
            <input 
              type="email" 
              id="email-input"
              className={styles.input}
              placeholder="seu@email.com"
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label htmlFor="password-input">Senha</label>
            <input 
              type="password" 
              id="password-input"
              className={styles.input}
              placeholder="••••••••"
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label htmlFor="textarea">Área de Texto</label>
            <textarea 
              id="textarea"
              className={styles.input}
              rows={4}
              placeholder="Digite sua mensagem..."
            ></textarea>
          </div>
          
          <div className={styles.fieldGroup}>
            <label htmlFor="select">Seleção</label>
            <select id="select" className={styles.select}>
              <option>Selecione uma opção</option>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
            </select>
          </div>
          
          <div className={styles.fieldGroup}>
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="checkbox1" className={styles.checkbox} />
              <label htmlFor="checkbox1">Opção de checkbox 1</label>
            </div>
            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="checkbox2" className={styles.checkbox} />
              <label htmlFor="checkbox2">Opção de checkbox 2</label>
            </div>
          </div>
          
          <div className={styles.fieldGroup}>
            <div className={styles.radioGroup}>
              <input type="radio" id="radio1" name="radio-example" className={styles.radio} />
              <label htmlFor="radio1">Opção de rádio 1</label>
            </div>
            <div className={styles.radioGroup}>
              <input type="radio" id="radio2" name="radio-example" className={styles.radio} />
              <label htmlFor="radio2">Opção de rádio 2</label>
            </div>
          </div>
          
          <div className={styles.fieldGroup}>
            <label htmlFor="error-input">Campo com Erro</label>
            <input 
              type="text" 
              id="error-input"
              className={styles.input}
              aria-invalid="true"
              placeholder="Campo com erro"
            />
          </div>
          
          <div className={styles.fieldGroup}>
            <label htmlFor="disabled-input">Campo Desabilitado</label>
            <input 
              type="text" 
              id="disabled-input"
              className={styles.input}
              disabled
              placeholder="Campo desabilitado"
            />
          </div>
        </div>
      </section>

      {/* Seção 5: Componentes de UI Comuns */}
      <section className={styles.section}>
        <h2>Componentes de UI</h2>
        
        <h3>Cards</h3>
        <div className={styles.cardGrid}>
          <div className={styles.card}>
            <h4>Card Exemplo</h4>
            <p>Este é um exemplo de card com conteúdo básico.</p>
          </div>
          <div className={styles.card}>
            <h4>Outro Card</h4>
            <p>Cards são úteis para organizar conteúdo relacionado.</p>
          </div>
        </div>
        
        <h3>Avatars</h3>
        <div className={styles.avatarGroup}>
          <div className={`${styles.avatar} ${styles.avatarSmall}`}>JS</div>
          <div className={`${styles.avatar} ${styles.avatarMedium}`}>MD</div>
          <div className={`${styles.avatar} ${styles.avatarLarge}`}>LG</div>
        </div>
        
        <h3>Badges</h3>
        <div className={styles.badgeGroup}>
          <span className={`${styles.badge} ${styles.badgePrimary}`}>Primário</span>
          <span className={`${styles.badge} ${styles.badgeSuccess}`}>Sucesso</span>
          <span className={`${styles.badge} ${styles.badgeError}`}>Erro</span>
          <span className={`${styles.badge} ${styles.badgeWarning}`}>Aviso</span>
        </div>
        
        <h3>Alertas</h3>
        <div className={styles.alertGroup}>
          <div className={`${styles.alert} ${styles.alertSuccess}`}>
            <strong>Sucesso!</strong> Operação realizada com êxito.
          </div>
          <div className={`${styles.alert} ${styles.alertError}`}>
            <strong>Erro!</strong> Algo deu errado. Tente novamente.
          </div>
          <div className={`${styles.alert} ${styles.alertWarning}`}>
            <strong>Atenção!</strong> Esta ação não pode ser desfeita.
          </div>
          <div className={`${styles.alert} ${styles.alertInfo}`}>
            <strong>Informação:</strong> Aqui está uma informação útil.
          </div>
        </div>
        
        <h3>Tabela</h3>
        <table className={styles.table}>
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
              <td><span className={`${styles.badge} ${styles.badgeSuccess}`}>Ativo</span></td>
              <td><button className={styles.buttonGhost}>Editar</button></td>
            </tr>
            <tr>
              <td>Maria Santos</td>
              <td>maria@exemplo.com</td>
              <td><span className={`${styles.badge} ${styles.badgeWarning}`}>Pendente</span></td>
              <td><button className={styles.buttonGhost}>Editar</button></td>
            </tr>
            <tr>
              <td>Pedro Costa</td>
              <td>pedro@exemplo.com</td>
              <td><span className={`${styles.badge} ${styles.badgeError}`}>Inativo</span></td>
              <td><button className={styles.buttonGhost}>Editar</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Seção 6: Navegação */}
      <section className={styles.section}>
        <h2>Navegação</h2>
        
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#" className={`${styles.navLink} ${styles.active}`}>Home</a></li>
            <li><a href="#" className={styles.navLink}>Produtos</a></li>
            <li><a href="#" className={styles.navLink}>Sobre</a></li>
            <li><a href="#" className={styles.navLink}>Contato</a></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}
