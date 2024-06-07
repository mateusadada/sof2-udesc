import React from 'react';
import './SustainabilityTips.css';

function SustainabilityTips() {
    const tips = [
        {
            id: 1,
            title: "Reduza o Uso de Plásticos",
            content: "Evite produtos que vêm em embalagens de plástico sempre que possível. Opte por alternativas reutilizáveis ou biodegradáveis."
        },
        {
            id: 2,
            title: "Compostagem",
            content: "Comece a compostar em casa para reduzir a quantidade de resíduos que vai para o aterro e enriquecer o solo do seu jardim."
        },
        {
            id: 3,
            title: "Economize Energia",
            content: "Desligue luzes e eletrônicos quando não estiverem em uso. Considere mudar para lâmpadas de LED, que são mais eficientes."
        },
        // Adicione mais dicas conforme necessário
    ];

    return (
        <div>
            <header className="header">
                <h1 className='header_h1'><a href="/">EducaRecicla</a></h1>
                <nav>
                    <a href="learn-recycling">Aprenda a reciclar</a>
                    <a href="/collect-points">Pontos de coleta</a>
                    <a href="/sustainability-tips">Dicas de sustentabilidade</a>
                </nav>
            </header>

            <div className="tips-container">
                <h1>Dicas de Sustentabilidade</h1>
                {tips.map(tip => (
                    <div key={tip.id} className="tip">
                        <h2>{tip.title}</h2>
                        <p>{tip.content}</p>
                    </div>
                ))}

            </div>
            <footer className="footer">
                <p>Projeto desenvolvido para a disciplina de Engenharia de software || - UDESC</p>
                <p>Alunos: Wellinton Matheus Karvat, Isabelly Ribeiro e Mateus Adada </p>
                <p>© 2024 EducaRecicla.</p>
            </footer>
        </div>
    );
}

export default SustainabilityTips;
