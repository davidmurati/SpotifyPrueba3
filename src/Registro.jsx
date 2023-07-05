import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import imagenregistro from './imagenRegistro.jpg';


function Registro() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [data, setData] = useState([]);
let[emails, setEmails] = useState([]);
let[clave, setClave] = useState([]);



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

  useEffect(() => {
    readGoogleSheet();
     
  }, []);




//let id= Math.random().toString(36);


const PostGoogleSheet = () => {
    fetch("https://sheet.best/api/sheets/7428bda3-4f1c-49e3-b403-679be3b8e759", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify([
    {
      Correo: email,
      Clave: password,
      
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

    let validCredentials1 = false;
    for (let i = 0; i < emails.length; i++) {
      if (email === emails[i]) {
        validCredentials1 = true;
        break;
      }
    }



    // Realiza la validación y el registro del usuario aquí
    if (validCredentials1===false) {
    PostGoogleSheet();
    
    alert(`Se ha registrado el usuario con ${email} con el correo ${password}.`);
  } else {
    alert('Usuario ya existente');
  }
};


  return (
    <form onSubmit={handleSubmit}>
    <div class="content">

    <div className="logo-container">
       <Navbar />

     <img src={imagenregistro} className="App-logo" alt="imagenlogin"/>
     </div>
    </div>

    <div className="box">
      <label>
        Correo electrónico:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <div className="container">

      <button className="boton" type="submit">Registrarse</button>

      </div>
    </div>
    
    </form>
  );
}

export default Registro;
