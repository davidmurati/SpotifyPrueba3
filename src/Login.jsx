import { useState, useEffect, useContext, createContext  } from "react";
import "./login.css";
import Navbar from './Navbar';
import imagenlogin from './imagenlogin.jpg';





const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  

  let[emails, setEmails] = useState([]);
  let[clave, setClave] = useState([]);



  const PI=3



  const readGoogleSheet = () => {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch("https://sheet.best/api/sheets/7428bda3-4f1c-49e3-b403-679be3b8e759")
      .then((response) => response.json())
      .then((data) => {
        // Construir una cadena de texto con los valores de la hoja de cálculo
         //const text = data.map(row => `ID: ${row.Id}, Usuario: ${row.Usuario}, Correo: ${row.Correo}`).join('\n');
         //setData(text);

         emails = data.map(row => row.Correo)

        //const emails = data.map(row => `Correo: ${row.Correo}, Clave: ${row.Clave}`)
        
        setEmails(emails);

         clave = data.map(row => row.Clave)
        setClave(clave);

        

        
      });
  };



  const handleSubmit = (event) => {
    event.preventDefault();

  

    // Validar las credenciales del usuario aquí
    
    
    let validCredentials1 = false;
    
    for (let i = 0; i < emails.length; i++) {
      
      if (email === emails[i] && password === clave[i]) {
        validCredentials1 = true;
        break;
        
      }
    
      // Almacenar el valor de email en el contexto
    
    }


    if (validCredentials1===true ) {
      window.location.href = '/Principal';
      
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };

  
  useEffect(() => {
   readGoogleSheet();
    
 }, []);

 return  (
    
  <form onSubmit={handleSubmit}>
    <div class="content">

      <div className="logo-container">
          <Navbar />

           <img src={imagenlogin} className="App-logo" alt="imagenlogin"/>
         </div>
         </div>

  <div className="box">
  
    <label>
      Correo electrónico:
      <input  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <label>
      Contraseña:
      <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </label>

    {/*<textarea value={JSON.stringify(clave)} readOnly />*/}
    <div className="container">
    <button className="boton" type="submit">Iniciar sesión</button  >
    </div>
    
  </div> 
  

  
  </form>
  
);


}



export default Login;

