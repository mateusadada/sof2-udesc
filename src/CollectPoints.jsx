import 'leaflet/dist/leaflet.css';
import './CollectPoints.css'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


// Icone personalizado para os marcadores
const icon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/228603/recycling-trash.svg', // Adicione o caminho para o ícone desejado
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

function CollectPoints() {

    const points = [
        {
            id: 1,
            name: "Mato Preto",
            lat: -26.196245468844964,
            lng: -49.39361584849793,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/d612c41e8a132eb1fd0a-image009.jpg',
            address: 'R. Adélia Lili Schneider, S/N - Mato Preto, São Bento do Sul - SC, 89285-030 (Em frente ao posto de saúde Mato Preto)'
        },
        {
            id: 2,
            name: "Oxford",
            lat: -26.22142352346326,
            lng: -49.40292818666018,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/b1ad1588f569b1b9364a-image015.jpg',
            address: 'R. Francisco Spitzner, S/N - Oxford, São Bento do Sul - SC, 89285-050 (Na praça Leopoldo Rudnick)'
        },
        {
            id: 3,
            name: "Alpeste",
            lat: -26.251507370721168,
            lng: -49.43573424904653,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/993f7ed78049afa38f73-image003.jpg',
            address: 'R. Rosane Grossl, S/N - Alpeste, São Bento do Sul - SC, 89289-090 (Ao lado do ponto de ônibus)'
        },
        {
            id: 4,
            name: "Ponto de coleta 4",
            lat: -26.218220,
            lng: -49.373793,
            imageUrl: 'https://www.motelkolyna.com.br/admin2/uploads/imagens/k2st12_1.jpg',
            address: 'Rodovia SC 301, 2900 - Progresso, São Bento do Sul - SC'
        },
        {
            id: 5,
            name: "Ponto de coleta 5",
            lat: -26.218220,
            lng: -49.373793,
            imageUrl: 'https://www.motelkolyna.com.br/admin2/uploads/imagens/k2st12_1.jpg',
            address: 'Rodovia SC 301, 2900 - Progresso, São Bento do Sul - SC'
        },
        {
            id: 6,
            name: "Ponto de coleta 6",
            lat: -26.218220,
            lng: -49.373793,
            imageUrl: 'https://www.motelkolyna.com.br/admin2/uploads/imagens/k2st12_1.jpg',
            address: 'Rodovia SC 301, 2900 - Progresso, São Bento do Sul - SC'
        },
        {
            id: 7,
            name: "Ponto de coleta 7",
            lat: -26.218220,
            lng: -49.373793,
            imageUrl: 'https://www.motelkolyna.com.br/admin2/uploads/imagens/k2st12_1.jpg',
            address: 'Rodovia SC 301, 2900 - Progresso, São Bento do Sul - SC'
        },
        {
            id: 8,
            name: "Ponto de coleta 8",
            lat: -26.218220,
            lng: -49.373793,
            imageUrl: 'https://www.motelkolyna.com.br/admin2/uploads/imagens/k2st12_1.jpg',
            address: 'Rodovia SC 301, 2900 - Progresso, São Bento do Sul - SC'
        },
        {
            id: 9,
            name: "Ponto de coleta 9",
            lat: -26.218220,
            lng: -49.373793,
            imageUrl: 'https://www.motelkolyna.com.br/admin2/uploads/imagens/k2st12_1.jpg',
            address: 'Rodovia SC 301, 2900 - Progresso, São Bento do Sul - SC'
        },
        {
            id: 10,
            name: "Ponto de coleta 10",
            lat: -26.218220,
            lng: -49.373793,
            imageUrl: 'https://www.motelkolyna.com.br/admin2/uploads/imagens/k2st12_1.jpg',
            address: 'Rodovia SC 301, 2900 - Progresso, São Bento do Sul - SC'
        },
        {
            id: 11,
            name: "Ponto de coleta 11",
            lat: -26.218220,
            lng: -49.373793,
            imageUrl: 'https://www.motelkolyna.com.br/admin2/uploads/imagens/k2st12_1.jpg',
            address: 'Rodovia SC 301, 2900 - Progresso, São Bento do Sul - SC'
        }
    ];

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
            <div className="map-wrapper">  {/* Contêiner Pai */}
                <MapContainer className="map-container" center={[-26.304408, -49.520481]} zoom={10}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {points.map(point => (
                        <Marker key={point.id} position={[point.lat, point.lng]} icon={icon}>
                            <Popup>
                                <div>
                                    <h2>{point.name}</h2>
                                    <img src={point.imageUrl} alt={point.name} style={{ width: '100%', height: 'auto' }} />
                                    <p className='point_address'>{point.address}</p>
                                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}`} target="_blank">Abrir Rota</a>
                                </div>
                            </Popup>
                        </Marker>

                    ))}
                </MapContainer>
            </div>

        </div>
    );
}

export default CollectPoints;
