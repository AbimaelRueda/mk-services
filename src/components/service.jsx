import React from 'react';
import '../stiles/service.css'
import ServiceCard1 from './card1'
import ServiceCard2 from './card2'
import ServiceCard3 from './card3'
import ServiceCard4 from './card4'
import ServiceCard5 from './card5'
import ServiceCard6 from './card6'
import Carousel from './carousel'

export default function Service() {
    return (
        <section
            style={{
                padding: '60px 20px',
                backgroundColor: '#1a1a1a',
                color: 'white',
                textAlign: 'center',
                minHeight: '100vh',
            }}
        >
            <h2 style={{ fontSize: '42px', marginBottom: '20px' }}>Nuestros Servicios</h2>
            <div className="service-grid"
                style={{
                    gap: '20px',
                }}
            >
                <ServiceCard1 title="💻 Diseño Web y Tecnológico" />
                <ServiceCard2 title="Desarrollo Front-End" />
                <ServiceCard3 title="Mantenimiento" />
                <ServiceCard4 title="⚙️ Automatización y Transformación Digital" />
                <ServiceCard5 title="📈 Marketing Digital y Posicionamiento" />
                <ServiceCard6 title="Dashboard y analítica" />
            </div>

            <div
                className="experience-block"
                style={{
                    gridColumn: '1 / -1',
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <h3 style={{ fontSize: '36px', marginBottom: '10px', color: '#000' }}>
                    Nuestras experiencias
                </h3>
                <Carousel />
                <p style={{ fontSize: '18px', maxWidth: '600px', margin: '30px auto 0', color: '#000' }}>
                    Creamos experiencias digitales personalizadas para tu negocio.
                </p>
            </div>
        </section>
    );
}

