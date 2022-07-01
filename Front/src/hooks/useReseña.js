import { useState, useEffect } from "react"
import axios from 'axios';

export const Reseña = () => {

    let localusuario = JSON.parse(localStorage.getItem('usuario') || '[]');
    const [usuario, setUsuario] = useState(localusuario);

    const [reseña, setReseña] = useState([])
    const [cargandoVuelos, setCargandoVuelos] = useState(true)



    const GetReseña = async (id) => {


      await axios.get('http://localhost:5000/review/'+id)
      .then(response => {

   
       

        setReseña(response.data.result)
      

     








      }).catch(error => {
        console.log(error)
      })

      ;

    }
   
      
 return {reseña,GetReseña}
}