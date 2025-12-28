function ServiceCard2({ title }) {
    return (
        <div
            style={{
                position: 'relative',
                backgroundColor: '#000',
                minHeight: '320px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                display: 'flex',
                alignItems: 'flex-end',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
            <div>
                {title}
            </div>
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 1,
                }}
            >
                <source src="/video/card1v.mp4" type="video/mp4" media="(max-width: 768px)" />
                <source src="/video/card1h.mp4" type="video/mp4" />
                <source src="/video/principal2.mp4" type="video/mp4" />
            </video>
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))',
                    zIndex: 2,
                }}
            />

            {/* CONTENIDO */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 3,
                    padding: '40px',
                    textAlign: 'left',
                    color: 'white',
                }}
            >
                <h3
                    style={{
                        fontSize: '28px',
                        fontWeight: '600',
                        marginBottom: '12px',
                    }}
                >
                    {title}
                </h3>

                <p
                    style={{
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#ddd',
                        margin: 0,
                        maxWidth: '420px',
                    }}
                >
                    Desarrollo de interfaces modernas, rápidas y escalables
                    con React, optimización de rendimiento y UX profesional.
                </p>
            </div>
            <style>{`
                .video-card {
                    position: relative;
                    min-height: 320px;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                }

                .video-card video {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,0.75),
                        rgba(0,0,0,0.2)
                    );
                }

                .content {
                    position: relative;
                    padding: 40px;
                    z-index: 2;
                    max-width: 420px;
                    text-align: left;
                }

                .content h3 {
                    font-size: 26px;
                    margin-bottom: 12px;
                }

                @media (max-width: 768px) {
                    .content {
                        padding: 24px;
                    }

                    .content h3 {
                        font-size: 22px;
                    }

                    .content p {
                        font-size: 15px;
                    }
                }
            `}</style>
        </div>
    );
}

export default ServiceCard2;