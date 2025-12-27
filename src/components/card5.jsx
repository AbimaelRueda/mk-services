function ServiceCard1({ title }) {
    return (
        <div
            style={{
                backgroundColor: '#000',
                padding: '40px 50px',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
            {/* TÍTULO */}
            <h3
                style={{
                    fontSize: '28px',
                    fontWeight: '600',
                    marginBottom: '16px',
                    textAlign: 'center'
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '16px 0 0 0',
                    fontWeight: 'bold',
                }}
            >
                1. Estrategias de marketing digital 360°
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                Campañas integrales en redes sociales, Google Ads, email marketing y contenido digital.
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '16px 0 0 0',
                    fontWeight: 'bold',
                }}
            >
                2. SEO y posicionamiento web
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                Optimización técnica y de contenido para mejorar la visibilidad en buscadores.
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '16px 0 0 0',
                    fontWeight: 'bold',
                }}
            >
                3. Gestión de redes sociales
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                Creación de contenido, diseño visual y community management estratégico.
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '16px 0 0 0',
                    fontWeight: 'bold',
                }}
            >
                4. Analítica y reportes de resultados
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                Paneles de control (dashboards) con métricas clave y seguimiento de rendimiento.
            </p>
            <style>{`
                .service-card {
                    background: #000;
                    padding: 40px 50px;
                    min-height: 320px;
                    text-align: left;
                    transition: transform 0.3s ease;
                }

                .service-card h3 {
                    text-align: center;
                    margin-bottom: 24px;
                    font-size: 26px;
                }

                .bold {
                    font-weight: bold;
                    margin-top: 16px;
                }

                .text {
                    margin-left: 12px;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .service-card {
                        padding: 30px 20px;
                    }

                    .service-card h3 {
                        font-size: 22px;
                    }
                }
            `}</style>
        </div>
    );
}

export default ServiceCard1;
