import React from 'react';
import './LearnRecycling.css';

function LearnRecycling() {
    const videos = [
        {
            id: "dQw4w9WgXcQ",
            title: "Importância da reciclagem",
            description: "Este vídeo explica por que a reciclagem é crucial para nosso meio ambiente."
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
            <footer className="footer">
                <p>Projeto desenvolvido para a disciplina de Engenharia de software II - UDESC</p>
                <p>Alunos: Wellinton Matheus Karvat, Isabelly Ribeiro e Mateus Adada</p>
                <p>© 2024 EducaRecicla.</p>
            </footer>
        </div>
    );
}

export default LearnRecycling;
