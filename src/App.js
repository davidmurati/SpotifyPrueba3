import logo from './logo.svg';
import './App.css';
import "./home.css";
import Navbar from './Navbar';
import logo5 from './logo5podcast.jpg';
import imagenS1 from './imagenservicios1.jpg';
import imagenS2 from './imagenservicios2.jpg';
import imagenS3 from './imagenservicios3.jpg';

function App() {
  const handleRegistroClick=()=> {
    window.location.href="/Login";
  };

    return (
      <>
      
        <div class="content">

        

        <div className="logo-container">
          <Navbar />

           <img src={logo5} className="App-logo" alt="logo"/>
         </div>


        <h1 class="title" >¿Quieres crear tu propio podcast? </h1>
        
          <p class="subtitle">¡Tenemos la solución perfecta para ti! Ofrecemos un servicio de creación de podcast desde cero,  <br/> en el que te guiaremos a través de cada paso del proceso.</p>
          
            <button type="button" class="home-button" onClick={handleRegistroClick}>INICIAR</button>

            <h1 class="title" ><br/>SERVICIOS </h1>

          <div className='container'>


          <div className="card">
            <img src={imagenS2} className="App-logo" alt="logo"/>
            <h2>{"Conceptualización de podcasts creativos"}</h2>
            <p>{"Creamos conceptos innovadores y atractivos para el podcast de tu negocio. Nos enfocamos en contar historias que conecten con tu audiencia y generen interés."}<br/><br/><br/></p>
          </div>

          <div className="card">
            <img src={imagenS3} className="App-logo" alt="logo"/>
            <h2>{"Producción de audio de alta calidad"}</h2>
            <p>{"Contamos con un equipo de profesionales en producción de audio para asegurar la mayor calidad en la grabación y post-producción de tu podcast. Utilizamos equipos de última generación para asegurar el mejor sonido."}</p>
          </div>

          <div className="card">
            <img src={imagenS1} className="App-logo" alt="logo"/>
            <h2>{"Promoción y distribución del podcast"}</h2>
            <p>{"Una vez listo tu podcast, nos encargamos de la promoción y distribución en las plataformas digitales más importantes. Así aseguramos una mayor visibilidad y alcance del contenido que creamos para tu negocio."}</p>
          </div>

          </div>
          
            

            
        </div>

    </>
  );
}


export default App;
