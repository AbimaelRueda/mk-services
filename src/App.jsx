import './App.css'
import Header from './components/header'
import Start from './components/start'
import Service from './components/service'
import Footer from './components/footer'

function App() {
  return (
    <div >
      <title>Market Service</title>
      <Header />
      <div
        style={{
          height: '1px',
          backgroundColor: '#2d2d2d',
          width: '100%',
          boxShadow: '0 1px 3px rgba(0,0,0,0.5)',
        }}
      />
      <section id="inicio">
        <Start />
      </section>

      <section id="servicios">
        <Service />
      </section>

      <section id="contacto">
        <Footer />
      </section>
    </div>
  );
}
export default App