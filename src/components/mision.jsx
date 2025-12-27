export default function Mision() {
    return (
        <div
            className="card"
            style={{
                width: '20rem',
                marginTop: '40px',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                backgroundColor: '#3a3a3a',
                color: 'white',
                borderRadius: '0',
            }}
        >
            <h5 className="card-header" style={{
                padding: '12px',
                margin: '-16px -16px 16px -16px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                backgroundColor: '#2d2d2d',
                color: '#737373',
                borderRadius: '0',
            }}>
                Misión
            </h5>
            <div className="card-body" style={{ padding: '0' }}>
                <p className="card-text" style={{
                    margin: '0',
                    lineHeight: '1.6',
                    fontSize: '15px',
                    justifyContent: 'center',
                }}>
                    Nuestra misión es diseñar experiencias web inteligentes, automatizar procesos y potenciar marcas mediante estrategias creativas y efectivas
                    que impulsen el crecimiento de personas y organizaciones en todos los sectores, alcanzando los objetivos que se establezcan.
                </p>
            </div>
        </div>
    )
}