import { Link } from 'react-router-dom';
import { Image } from "@nextui-org/react";
import { useLogin } from '../hooks/useLogin';
import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
export const Navbar = () => {
    const {Salir}=useLogin()
    return (
        <div>
            <ul> 
                
                
         
                 <li>    <Image src="https://github.com/Juandi22001/ImagenesAYD1/blob/main/registroLogo/16.png?raw=true" width={200} margin-left={200} maxDelay={10000} height={100} alt="efe?" /></li>
                 <li> <Link to="/Perfil">Perfil</Link></li>
                 <li>   <Link to="/VerHotel">Reservar Habitacion</Link></li>
                 <li>   <Link to="/VerAutos">Reservar Autos</Link></li>
                 <li>   <Link to="/VerVuelos">Reservar Vuelos</Link></li>
                 <li>  <Link to="/VerReseña">Reseñas</Link></li>
                 <li> <Link to="/VerServicio">Servicios</Link></li>
                 <Button color="primary"   onClick={() => Salir()}>
                                    SALIR
                                </Button>
                
                </ul>
                </div>
    )
}