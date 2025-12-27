export default function Values() {
    return (
        <div
            className="card"
            style={{
                width: '20rem',
                marginTop: '40px',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                borderRadius: '0',
                backgroundColor: '#3a3a3a',
                color: 'white',
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
                Valores
            </h5>
            <div className="card-body" style={{ padding: '0' }}>
                <ul className="card-text" style={{
                    margin: '0',
                    lineHeight: '1.6',
                    fontSize: '15px',
                    textAlign: 'left'
                }}>
                    <li>Responsabilidad social</li>
                    <li>Integridad</li>
                    <li>Calidad</li>
                    <li>Pasión</li>
                    <li>Lealtad</li>
                    <li>Competitividad</li>
                    <li>Innovación</li>
                </ul>
            </div>
        </div>
    )
}