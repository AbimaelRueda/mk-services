import '../stiles/start.css'
import Mision from './mision'
import Values from './values'
export default function Start() {

    return (
        <section
            style={{
                position: 'relative',
                minHeight: '100vh',
                overflow: 'hidden',
                backgroundColor: '#000',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingTop: '10vh',
                paddingBottom: '10vh',
            }}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    minWidth: '100%',
                    minHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    zIndex: 1,
                    transform: 'translate(-50%, -50%)',
                    objectFit: 'cover',
                }}
            >
                <source src="/video/principalV2.mp4" type="video/mp4" media="(max-width: 768px)" />
                <source src="/video/principal2.mp4" type="video/mp4" />
                <source src="/video/principal2.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: '1000px', padding: '0 20px' }}>
                <h1 className="animated-title" style={{ margin: '0 auto 30px', lineHeight: '1.2' }}>
                    <span className="welcome-text">Bienvenido a {' '}</span>
                    <br className="mobile-break" />
                    <span className="typewriter highlight-text">
                        MARKET SERVICE
                        <span className="cursor">_</span>
                    </span>
                </h1>
                <p
                    style={{
                        fontSize: '20px',
                        maxWidth: '600px',
                        margin: '20px auto 0',
                        opacity: 0.9,
                    }}
                >
                    En Market Service, creemos en el poder de la innovación digital para
                    transformar ideas en realidades.
                </p>
            </div>
        </section>
    );
}
