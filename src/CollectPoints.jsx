import 'leaflet/dist/leaflet.css';
import './CollectPoints.css'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


const icon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/228603/recycling-trash.svg',
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
            name: "Brasília",
            lat: -26.23242215343466,
            lng: -49.36090281962348,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/5a0dbc820a3185d2440a-ecoponto_brasilia_1.jpeg',
            address: 'Av. dos Imigrantes, 1046 - Brasília, São Bento do Sul - SC, 89281-552 (No EcoParque SAME. Próximo ao 23º Batalhão da Polícia Militar)'
        },
        {
            id: 5,
            name: "Local de Entrega Voluntária",
            lat: -26.24029492936397,
            lng: -49.357798976203604,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/062627c2bfe533ba5aac-image019.jpg',
            address: 'R. Ladislau Jelinski, 200 - Brasília, São Bento do Sul - SC, 89280-816 (Ao final da rua)'
        },
        {
            id: 6,
            name: "Germânia Super Center",
            lat: -26.243896433292367,
            lng: -49.375834719344695,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/56e04add23affe091fd2-P_20210714_110130_1.jpg',
            address: 'R. Capitão Ernesto Nunes, 669 - Progresso, São Bento do Sul - SC, 89280-388 (Na entrada do supermercado)'
        },
        {
            id: 7,
            name: "Centro",
            lat: -26.2519533738534,
            lng: -49.37957418360799,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/1ed6baa039a5a64c338b-Ecoponto_Centro.jpg',
            address: 'R. Benjamin Constant, 118 - Centro, São Bento do Sul - SC, 89280-484 (Em frente ao SESI Clínica Médica e Odontológica)'
        },
        {
            id: 8,
            name: "Rio Vermelho Estação",
            lat: -26.278911338942898,
            lng: -49.330405628274264,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/0ace7362c6a93c0220ff-image007.jpg',
            address: 'R. Antônio dos Santos, S/N - Rio Vermelho Estação, São Bento do Sul - SC, 89292-570 (Em frente ao posto de saúde Mato Preto)'
        },
        {
            id: 9,
            name: "Serra Alta",
            lat: -26.273849536848278,
            lng: -49.39114658422245,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/172803261886d43aae15-Ecoponto_Serra_Alta.jpg',
            address: 'R. Otto Eduardo Lepper, S/N - Serra Alta, São Bento do Sul - SC, 89291-665 (Próximo do Terminal Urbano de passageiros de Serra Alta)'
        },
        {
            id: 10,
            name: "25 de Julho",
            lat: -26.26188722676966,
            lng: -49.376977778497974,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/d27f5dd0b78eab687aa8-image005.jpg',
            address: 'R. Cedro, S/N - 25 de Julho, São Bento do Sul - SC, 89290-093 (Próximo da antena de telefonia)'
        },
        {
            id: 11,
            name: "Reciclagem eletrônica",
            lat: -26.25780942791223,
            lng: -49.36158707361999,
            imageUrl: 'https://sbs-reciclagem-eletronica.s3.amazonaws.com/1e4f4bcef3ee912bf5bc-sede-SBS-Reciclagem-Eletronica.jpg',
            address: 'R. Carlos Urban, 690 - Schramm, São Bento do Sul - SC, 89280-816 (Rua em frente à Lanchonete Maka)'
        }
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
            <div className="map-wrapper">  {/* Contêiner Pai */}
                <MapContainer className="map-container" center={[-26.243352928163745, -49.39114641779776]} zoom={12}>
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
                                    <a href={`https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}`} target="_blank">Abrir rota</a>
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
