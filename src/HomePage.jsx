import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div>
            <header className="header">
                <h1 className='header_h1'>Bem-vindo ao EducaRecicla</h1>
                <nav>
                    <a href="learn-recycling">Aprenda a reciclar</a>
                    <a href="/collect-points">Pontos de coleta</a>
                    <a href="/sustainability-tips">Dicas de sustentabilidade</a>
                </nav>
            </header>

            <div className="container">

                <section className="intro">
                    <h2>Por que Reciclar?</h2>
                    <p>Reciclar é essencial para proteger nosso meio ambiente e reduzir o desperdício. Aprenda como você pode fazer a diferença no dia a dia.</p>
                </section>

            </div>
            <footer className="footer">
                <p>Projeto desenvolvido para a disciplina de Engenharia de software || - UDESC</p>
                <p>Alunos: Wellinton Matheus Karvat, Isabelly Ribeiro e Mateus Adada</p>
                <p>© 2024 EducaRecicla.</p>
            </footer>
        </div>
    );
}

export default HomePage;
