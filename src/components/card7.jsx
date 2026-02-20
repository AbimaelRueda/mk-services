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
                1.	Diseño Gráfico
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                Creamos logotipos, folletos, material publicitario y más para transmitir tu mensaje de manera impactante.

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
                2.	Community Manager
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                Gestionamos tus redes sociales para una presencia sólida en línea.

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
                3.	Instalaciones Publicitarias
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                Realizamos todo tipo de instalaciones publicitarias, desde bastidores, hasta Paneles de Acrílico y letras.

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
                4.	Impresión y Rotulación
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                Ofrecemos impresión en diversos formatos y rotulación personalizada.

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
                5.	Impresiones en 3D
            </p>
            <p
                style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    margin: '0 0 0 15px',
                    textAlign: 'justify'
                }}>
                La impresión 3D permite crear objetos tridimensionales a partir de un modelo digital, utilizando materiales como plástico, resina o metal. Es ideal para prototipos, piezas personalizadas y proyectos creativos.

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
