import {useEffect, useState } from 'react';
import "./principal.css";
import Navbar from './Navbar';
import logo5 from './logo5podcast.jpg';
import imagenS1 from './imagenservicios1.jpg';
import imagenS2 from './imagenservicios2.jpg';
import imagenS3 from './imagenTelefono.jpg';

import axios from 'axios';

const Principal = () => {

const CLIENT_ID = "604059900c384dee93a2c1f39bd1c749"
const REDIRECT_URI = "https://spotify-prueba3.vercel.app/Principal"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"




const [token, setToken] = useState("")
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])

const [description, setDescription] = useState('');
const [publico, setPublico] = useState('');
const [correo, setCorreo] = useState('');




useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    // getToken()


    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)
}, [])



const searchArtists = async (e) => {
  e.preventDefault()
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
          Authorization: `Bearer ${token}`
      },
      params: {
          q: searchKey,
          type: "artist"
      }
  })

  setArtists(data.artists.items)
}









const PostGoogleSheet = () => {
    fetch("https://sheet.best/api/sheets/39a68aab-3a59-4140-b060-0c876b106a37", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify([
    {
      Correo: correo,
      Descripcion: description,
      Publico: publico,
      
    },

  ]),
})
  .then((r) => r.json())
  .then((data) => {
    // The response comes here
    console.log(data);
  })
  .catch((error) => {
    // Errors are reported there
    console.log(error);
  });

  };


  const handleSubmit = (event) => {
    
    event.preventDefault();

    if (correo!="" && description!="" && publico!=""){
    // Realiza la validación y el registro del usuario aquí
    PostGoogleSheet();
    
    alert(`Se ha registrado la solicitud del servicio`);
    alert(`Una vez evaluado el contenido se le escribira al correo para acordar metodo de pago y tiempo de entrega del producto`);
} 

  };

  const handleSpotifyClick=()=> {
    window.location.href = 'https://open.spotify.com/'

  };

  const handleSalirClick = () => {
    setToken("/")
    window.localStorage.removeItem("token")
    window.location.href = '/';
}


    return (
      <>
      <form onSubmit={handleSubmit}>
        <div class="content">

        

        <div className="logo-container">
          <Navbar />

           <img src={logo5} className="App-logo" alt="logo"/>
         </div>


        <h1 class="title" >Describe y envia el podcast que quieres realizar</h1>
        
          <p class="subtitle">¡Ha comenzado tu camino al éxito en la difusión de contenido!</p>
          

            <h1 class="title" ><br/>Solicitud del servicio</h1>

          <div className='container'>


          <div className="card">
            <img src={imagenS2} className="App-logo" alt="logo"/>
            <h2>{"Describe el contenido que deseas realizar"}</h2>
            <input className="input-box" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

          </div>

          <div className="card">
            <img src={imagenS1} className="App-logo" alt="logo"/>
            <h2>{"Público al que desea llegar"}<br/><br/></h2>
            <input className="input-box" type="text" value={publico} onChange={(e) => setPublico(e.target.value)} />
          </div>

          <div className="card">
            <img src={imagenS3} className="App-logo" alt="logo"/>
            <h2>{"Correo o whatsapp"}<br/><br/></h2>
            <input className="input-box" type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} />
          </div>

          </div>
          
          <button className="boton" type="submit">ENVIAR</button>
          
          
            
        </div>

        <div class="content">

        <h2>Revisa nuestra colección  de podcast entrando a Spotify</h2>
       

        {token ?
                    <form onSubmit={searchArtists}>

                    </form>

                    : <h2></h2>

                }

        {!token ?
                     <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Abrir cuenta de Spotify</a>


                    : <button type="submit" class="boton" onClick={handleSpotifyClick}>Entrar a Spotify</button> 

                    
                    
                }

        <button type="submit" class="boton" onClick={handleSalirClick}>Salir</button>

        
        
        </div>

        

        </form>
        
        
                
                

           
        
    </>
  );
        
    
}


export default Principal