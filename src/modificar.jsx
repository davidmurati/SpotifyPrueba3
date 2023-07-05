import { useEffect, useState } from 'react';

import Navbar from './Navbar';
import imagenmodificar from './imagenModificar.jpg';
import imagenmodificar2 from './imagenModificar3.jpg';

function Modificar() {
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




  const Eliminar = (event) => {

    let validCredentials1 = false;
    
    for (let i = 0; i < emails.length; i++) {
      
      if (email === emails[i] && password === clave[i]) {
        validCredentials1 = true;
        break;
        
      }
    }

    if (validCredentials1===true ) {

    fetch(`https://sheet.best/api/sheets/7428bda3-4f1c-49e3-b403-679be3b8e759/Correo/${email}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

  
}
  };


  const Modificar = (event) => {

    let validCredentials1 = false;
    
    for (let i = 0; i < emails.length; i++) {
      
      if (email === emails[i] ) {
        validCredentials1 = true;
        break;
        
      }
    }

    if (validCredentials1===true ) {

    // Update first row setting the name to "Jack Doe"
    fetch(`https://sheet.best/api/sheets/7428bda3-4f1c-49e3-b403-679be3b8e759/Correo/${email}`, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        Correo: email,
        Clave: password,
    }),
  })
    .then((r) => r.json())
    .then(console.log)
    .catch(console.error);

    alert(`Se ha modificado o eliminado el usuario.`);

}

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Realiza la validación y el registro del usuario aquí
    Modificar();
    
    
  };

  
  return (
    <form onSubmit={handleSubmit}>

    <div class="content">

    <div className="logo-container">
       <Navbar />

     <img src={imagenmodificar2} className="App-logo" alt="imagenlogin"/>
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

      

      <div class="content">
      
      <button className="boton" type="submit">Modificar</button>
      <button className="boton"  type="submit" onClick={Eliminar}>Eliminar cuenta</button>

      </div>

    </div>
    </form>
  );
}

export default Modificar;