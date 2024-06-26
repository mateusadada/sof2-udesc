import React from 'react';
import './SustainabilityTips.css';

function SustainabilityTips() {
    const tips = [
        {
            id: 1,
            title: "Reduza o uso de plásticos",
            content: "Evite produtos que vêm em embalagens de plástico sempre que possível. Opte por alternativas reutilizáveis ou biodegradáveis."
        },
        {
            id: 2,
            title: "Compostagem",
            content: "Comece a compostar em casa para reduzir a quantidade de resíduos que vai para o aterro e enriquecer o solo do seu jardim."
        },
        {
            id: 3,
            title: "Economize energia",
            content: "Desligue luzes e eletrônicos quando não estiverem em uso. Considere mudar para lâmpadas de LED, que são mais eficientes."
        },
        {
            id: 4,
            title: "Use transporte sustentável",
            content: "Sempre que possível, caminhe, ande de bicicleta ou use transporte público. Compartilhar caronas também ajuda a reduzir a pegada de carbono."
        },
        {
            id: 5,
            title: "Economize água",
            content: "Reduza o tempo no chuveiro e conserte vazamentos. Utilize dispositivos de economia de água, como redutores de fluxo em torneiras e chuveiros."
        },
        {
            id: 6,
            title: "Apoie o comércio local",
            content: "Compre de produtores locais e de mercados de agricultores para reduzir a pegada de carbono associada ao transporte de alimentos."
        },
        {
            id: 7,
            title: "Recicle corretamente",
            content: "Separe seus resíduos e recicle de acordo com as diretrizes locais. Certifique-se de limpar os materiais recicláveis para evitar contaminação."
        },
        {
            id: 8,
            title: "Utilize produtos de limpeza ecológicos",
            content: "Opte por produtos de limpeza naturais e ecológicos. Você também pode fazer seus próprios produtos usando ingredientes como vinagre e bicarbonato de sódio."
        },
        {
            id: 9,
            title: "Reduza o consumo de papel",
            content: "Evite impressões desnecessárias e opte por versões digitais sempre que possível. Utilize ambos os lados do papel ao imprimir."
        },
        {
            id: 10,
            title: "Plante árvores",
            content: "Plante árvores e arbustos em sua comunidade para melhorar a qualidade do ar, fornecer sombra e criar habitats para a vida selvagem."
        }
    ];

    return (
        <div className="page-container">
            <header className="header">
                <h1 className='header_h1'><a href="/">EducaRecicla</a></h1>
                <nav>
                    <a href="learn-recycling">Aprenda a reciclar</a>
                    <a href="/collect-points">Pontos de coleta</a>
                    <a href="/sustainability-tips">Dicas de sustentabilidade</a>
                </nav>
            </header>

            <div className="content-wrap">
                <div className="tips-container">
                    <h1>Dicas de sustentabilidade</h1>
                    {tips.map(tip => (
                        <div key={tip.id} className="tip">
                            <h2>{tip.title}</h2>
                            <p>{tip.content}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default SustainabilityTips;
