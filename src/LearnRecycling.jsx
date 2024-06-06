import React from 'react';
import './LearnRecycling.css';

function LearnRecycling() {
    const videos = [
        {
            id: "dQw4w9WgXcQ", // O ID do vídeo do YouTube
            title: "Importância da Reciclagem", // Título do vídeo
            description: "Este vídeo explica por que a reciclagem é crucial para nosso meio ambiente." // Descrição breve
        },
        // Adicione mais objetos para cada vídeo que deseja incluir
    ];

    return (
        <div>
            <header className="header">
                <h1><a href="/">EducaRecicla</a></h1>
                <nav>
                    <a href="learn-recycling">Aprenda a Reciclar</a>
                    <a href="/collect-points">Pontos de Coleta</a>
                    <a href="/sustainability-tips">Dicas de Sustentabilidade</a>
                </nav>
            </header>
            <div className="video-container">
                <h1>Aprenda a Reciclar</h1>
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
                <p>Projeto desenvolvido para a disciplina de Engenharia de software || - UDESC</p>
                <p>Alunos: Wellinton Matheus Karvat, Isabelly Ribeiro e Mateus Adadas</p>
                <p>© 2024 EducaRecicla.</p>
            </footer>
        </div>
    );
}

export default LearnRecycling;
