import React from 'react';
import './LearnRecycling.css';

function LearnRecycling() {
    const videos = [
        {
            id: "ITur0JNJZos",
            title: "Importância da reciclagem",
            description: "Por que a reciclagem é crucial para nosso meio ambiente?"
        },
        {
            id: "ICyutt3iQ2g",
            title: "Passos básicos para reciclar",
            description: "Conheça os passos básicos para reciclar"
        },
        {
            id: "yph1W5stHHY",
            title: "Como reciclar o lixo de casa",
            description: "Reciclando o lixo de casa passo a passo"
        },
        {
            id: "gl0vNEtT-zU",
            title: "Como descartar vidro e objetos cortantes",
            description: "Aprenda a descartar objetos cortantes e vidros"
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
