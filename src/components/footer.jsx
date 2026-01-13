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
                            href="https://wa.me/2217191584?text=¡Hola!%20Quiero%20consultar%20sobre%20sus%20servicios"
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
                        <div
                            style={{
                                marginTop: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                flexWrap: 'wrap',
                            }}
                        >
                            <a
                                href="mailto:angelaguilarmarket@gmail.com"
                                style={{
                                    marginTop: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    textDecoration: 'none',
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="white"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>

                                <span
                                    style={{
                                        fontSize: '14px',
                                        color: '#888',
                                    }}
                                >
                                    angelaguilarmarket@gmail.com
                                </span>
                            </a>
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
                                <a
                                    href="tel:+522217191584"
                                    style={{
                                        marginTop: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        textDecoration: 'none',
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

                                    <span
                                        style={{
                                            fontSize: '14px',
                                            color: '#888',
                                        }}
                                    >
                                        +52 221 719 1584
                                    </span>
                                </a>
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