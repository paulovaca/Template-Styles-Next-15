import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import styles from './home.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.themeControls}>
        <ThemeToggle />
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>Next.js Template</h1>
        <h2 className={styles.subtitle}>Template Moderno para Aplicações Web</h2>
        <p className={styles.author}>Criado por Paulo Minari</p>
      </header>

      <main>
        <p className={styles.description}>
          Este é um template completo e moderno para inicializar projetos Next.js. 
          Desenvolvido com as melhores práticas de desenvolvimento web, inclui 
          sistema de temas, componentes reutilizáveis e uma arquitetura escalável 
          para todo tipo de aplicação.
        </p>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎨</div>
            <h3 className={styles.featureTitle}>Sistema de Temas</h3>
            <p className={styles.featureDescription}>
              Suporte completo a temas claro e escuro com variáveis CSS customizáveis
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3 className={styles.featureTitle}>Performance Otimizada</h3>
            <p className={styles.featureDescription}>
              Construído com Next.js 15 e React 19 para máxima performance
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🧩</div>
            <h3 className={styles.featureTitle}>Componentes Modulares</h3>
            <p className={styles.featureDescription}>
              Biblioteca completa de componentes reutilizáveis e bem documentados
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3 className={styles.featureTitle}>Design Responsivo</h3>
            <p className={styles.featureDescription}>
              Interface adaptável que funciona perfeitamente em todos os dispositivos
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3 className={styles.featureTitle}>Pronto para Produção</h3>
            <p className={styles.featureDescription}>
              Configuração completa e otimizada para deploy imediato
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🛠️</div>
            <h3 className={styles.featureTitle}>TypeScript</h3>
            <p className={styles.featureDescription}>
              Desenvolvimento type-safe com TypeScript configurado
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/styles-example" className={`${styles.button} ${styles.buttonPrimary}`}>
            🎨 Ver Guia de Estilos
          </Link>
          <a 
            href="https://github.com/paulominari" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.buttonSecondary}`}
          >
            📚 Ver no GitHub
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Template Next.js by Paulo Minari - Utilize livremente em seus projetos</p>
      </footer>
    </div>
  )
}