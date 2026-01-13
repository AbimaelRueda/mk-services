import Imagen from './imagen';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{
                backgroundColor: '#000000',
                color: 'white',
                padding: '20px 40px 30px 20px',
                marginTop: '0px',
                borderTop: '1px solid #2d2d2d',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: '30px',
                }}
            >
                <div style={{ flex: '1 1 250px', minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <Imagen />
                        <span style={{ fontSize: '22px', fontWeight: '600' }}>MARKET SERVICE</span>
                    </div>
                    <p style={{ color: '#aaaaaa', fontSize: '14px', lineHeight: '1.6', margin: '0' }}>
                        Innovación digital para transformar ideas en realidades.
                    </p>
                </div>
                <div style={{ flex: '1 1 180px' }}>
                    <h4 style={{ color: '#1E40AF', margin: '0 0 15px', fontSize: '16px', fontWeight: '600' }}>
                        Enlaces Rápidos
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#cccccc' }}>
                        {['Inicio', 'Servicios', 'Contacto'].map((item) => (
                            <li key={item} style={{ marginBottom: '8px' }}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    style={{
                                        color: '#cccccc',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        transition: 'color 0.3s',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.color = '#1E40AF')}
                                    onMouseLeave={(e) => (e.target.style.color = '#cccccc')}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{ flex: '1 1 180px' }}>
                    <h4 style={{ color: '#1E40AF', margin: '0 0 15px', fontSize: '16px', fontWeight: '600' }}>
                        Síguenos
                    </h4>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/profile.php?id=61581175972374"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '36px',
                                height: '36px',
                                backgroundColor: '#1a1a1a',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                color: '#888',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#1877F2';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#1a1a1a';
                                e.currentTarget.style.color = '#888';
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com/tu_usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '36px',
                                height: '36px',
                                backgroundColor: '#1a1a1a',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                color: '#888',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#E4405F';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#1a1a1a';
                                e.currentTarget.style.color = '#888';
                            }}
                        >
                            📷
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/tu_perfil" // Cambia cuando tengas
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '36px',
                                height: '36px',
                                backgroundColor: '#1a1a1a',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '18px',
                                color: '#888',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#0077B5';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#1a1a1a';
                                e.currentTarget.style.color = '#888';
                            }}
                        >
                            in
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/2214366411?text=¡Hola!%20Quiero%20consultar%20sobre%20sus%20servicios"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: '36px',
                                height: '36px',
                                backgroundColor: '#1a1a1a',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                color: '#888',
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#25D366';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#1a1a1a';
                                e.currentTarget.style.color = '#888';
                            }}
                        >
                            💬
                        </a>
                        {/* <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            <p style={{
                                margin: '5px 0 0 0', fontSize: '14px', color: '#888',
                            }}>
                                angelaguilarmarket@gmail.com
                            </p>
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.038 5.316C10.2984 3.41763 8.50467 1.99608 7.13172 2.00306C5.61307 2.01104 3.30564 3.1329 2.55271 3.88583C1.79978 4.63877 0.5 6.5 4.5 10.5C8.5 14.5 10.3612 13.2002 11.1141 12.4473C11.8671 11.6943 12.9889 9.38691 12.9969 7.86826C13.0039 6.49531 11.5824 4.70156 9.684 4.962C9.45201 4.99157 9.21811 5.06224 9 5.17157L7 7L11 11L13 9C13.1094 8.78189 13.1801 8.54799 13.2096 8.316C13.47 6.41763 12.0484 4.62389 10.15 4.884C10.038 5.316 10.038 5.316 10.038 5.316Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p style={{
                                margin: '5px 0 0 0', fontSize: '14px', color: '#888',
                            }}>
                                221 719 1584
                            </p>
                        </div> */}
                        <div
                            style={{
                                marginTop: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px', // un poco más de separación, se ve mejor
                                flexWrap: 'wrap', // por si en móvil se hace muy angosto
                            }}
                        >
                            {/* Email */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                            </svg>
                            <p style={{
                                margin: '5px 0 0 0', fontSize: '14px', color: '#888',
                            }}>
                                angelaguilarmarket@gmail.com
                            </p>

                            {/* Teléfono */}
                            <div
                                style={{
                                    marginTop: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21 11.36 11.36 0 0 0 3.54.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.75a1 1 0 0 1 1 1c0 1.22.2 2.42.57 3.54a1 1 0 0 1-.21 1.11l-2.49 2.49z" />
                                    <path d="M19.07 4.93a1 1 0 0 0-1.41 0l-1.34 1.34a1 1 0 0 0 0 1.41l.88.88a1 1 0 0 0 1.41 0l1.34-1.34a1 1 0 0 0 0-1.41l-.88-.88zM15.54 6.46a1 1 0 0 0-1.41 0l-1.34 1.34a1 1 0 0 0 0 1.41l.88.88a1 1 0 0 0 1.41 0l1.34-1.34a1 1 0 0 0 0-1.41l-.88-.88z" />
                                </svg>

                                <p
                                    style={{
                                        margin: '5px 0 0 0',
                                        fontSize: '14px',
                                        color: '#888',
                                    }}
                                >
                                    +52 55 1234 5678
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    textAlign: 'center',
                    marginTop: '30px',
                    paddingTop: '20px',
                    color: '#666666',
                    fontSize: '13px',
                }}
            >
                © {currentYear} Market Service. Todos los derechos reservados.
            </div>
        </footer>
    );
}