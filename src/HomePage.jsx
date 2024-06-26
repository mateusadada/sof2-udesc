import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="page-container">
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
                    <h2>Por que reciclar?</h2>
                    <p>Reciclar é essencial para proteger nosso meio ambiente e reduzir o desperdício. Aprenda como você pode fazer a diferença no dia a dia.</p>
                </section>

                <section className="intro">
                    <h2>Benefícios</h2>
                    <p>A reciclagem não apenas preserva os recursos naturais, mas também economiza energia e reduz a poluição. Descubra como pequenos atos de reciclagem podem gerar grandes impactos positivos no meio ambiente e na sociedade.</p>
                </section>

                <section className="intro">
                    <h2>Impacto econômico</h2>
                    <p>Além dos benefícios ambientais, a reciclagem também pode impulsionar a economia. Saiba como a indústria da reciclagem gera empregos, economiza custos de produção e cria novas oportunidades de negócio.</p>
                </section>

                <p id='image-main'>
                    <img src="https://cdn.pixabay.com/photo/2024/04/18/00/26/environment-8703269_1280.png" alt="Tipos de reciclagem" width="575" height="455"/>
                </p>
            </div>

            <footer className="footer">
                <p>Projeto desenvolvido para a disciplina de Engenharia de Software II - UDESC</p>
                <p>Acadêmicos: Isabelly Ribeiro, Mateus Adada e Wellinton Matheus Karvat</p>
                <a href="https://github.com/mateusadada/sof2-udesc" target="_blank">
                    <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub logo" className="github-logo"/>
                </a>
            </footer>
        </div>
    );
}

export default HomePage;
