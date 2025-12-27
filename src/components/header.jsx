import { useState, useEffect } from 'react';
import Imagen from './imagen';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShowHeader(false); 
            } else {
                setShowHeader(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <header
            style={{
                backgroundColor: '#000000',
                padding: '15px 30px',
                color: 'white',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    maxWidth: '1400px',
                    margin: '0 auto',
                }}
            >
                <div
                    onClick={() => scrollToSection('inicio')}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: 'pointer',
                        transition: 'opacity 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.8)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
                >
                    <Imagen />
                </div>
                <nav
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    className="desktop-nav"
                >
                    <ul
                        style={{
                            display: 'flex',
                            gap: '40px',
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                            alignItems: 'center',
                        }}
                    >
                        <li>
                            <button onClick={() => scrollToSection('inicio')} style={linkStyle}>
                                Inicio
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('servicios')} style={linkStyle}>
                                Servicios
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection('contacto')} style={contactButtonStyle}>
                                Contacto
                            </button>
                        </li>
                    </ul>
                </nav>
                <button
                    onClick={() => setMenuOpen(true)}
                    className="mobile-menu-btn"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 1001,
                    }}
                    aria-label="Abrir menú"
                >
                    <svg width="30" height="30" viewBox="0 0 100 100">
                        <rect y="20" width="100" height="10" rx="5" fill="white" />
                        <rect y="45" width="100" height="10" rx="5" fill="white" />
                        <rect y="70" width="100" height="10" rx="5" fill="white" />
                    </svg>
                </button>
            </div>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: menuOpen ? 0 : '-100%',
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.98)',
                    transition: 'left 0.4s ease',
                    zIndex: 999,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '40px',
                }}
                className="mobile-menu"
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '50px',
                        right: '25px',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontSize: '40px',
                        cursor: 'pointer',
                    }}
                >
                    ×
                </button>

                {['inicio', 'servicios', 'contacto'].map((section) => (
                    <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        style={{
                            ...linkStyle,
                            fontSize: '32px',
                            fontWeight: '600',
                        }}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </div>

            <style jsx>{`
                @media (max-width: 900px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
                @media (min-width: 901px) {
                    .mobile-menu-btn,
                    .mobile-menu {
                        display: none !important;
                    }
                }
            `}
            </style>
        </header>
    );
}

const linkStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    fontWeight: '400',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    padding: '8px 0',
    position: 'relative',
};

const contactButtonStyle = {
    ...linkStyle,
    backgroundColor: '#2D2D2D',
    padding: '12px 28px',
    fontWeight: '600',
};

linkStyle[':hover'] = { color: '#2D2D2D' };
contactButtonStyle[':hover'] = { backgroundColor: '#00b0d4', transform: 'translateY(-2px)' };