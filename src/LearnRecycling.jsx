import React from 'react';
import './LearnRecycling.css';

function LearnRecycling() {
    const videos = [
        {
            id: "ITur0JNJZos",
            title: "Importância da reciclagem",
            description: "Este vídeo explica por que a reciclagem é crucial para nosso meio ambiente."
        },
        {
            id: "ICyutt3iQ2g",
            title: "Passos básicos para reciclar",
            description: "Este vídeo explica Passos básicos para reciclar."
        },
        {
            id: "yph1W5stHHY",
            title: "Como reciclar o lixo de casa passo a passo",
            description: "Reciclando o lixo de caso passo a passo."
        },
        {
            id: "gl0vNEtT-zU",
            title: "Vidro quebrado e objetos cortantes: saiba como descartar esses itens",
            description: "Passo a passo para descarte de objetos cortantes e vidros."
        },
        {
            id: "xNYZQpT6aB0",
            title: "Como separar o SEU LIXO em CASA",
            description: "Passo a passo para separar o lixo de casa de forma eficiente."
        },
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
            <div className="video-container">
                <h1>Aprenda a reciclar</h1>
                <div className="videos">
                    {videos.map(video => (
                        <div key={video.id} className="video">
                            <h2>{video.title}</h2>
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={video.title}
                                width="560"
                                height="315"
                            ></iframe>
                            <p>{video.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LearnRecycling;
