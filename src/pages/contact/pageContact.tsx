import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import style from "../../styles/contact.module.css"


export function DesingPageContact() {
    return (
        <> 
        <header className={style.header_contact}> 
            <Link to = "/" className={style.section_link}><IoArrowBackSharp/></Link>
        </header>

        <h1> hola soy contacto </h1>
        <h1> hola soy contacto </h1>
        <h1> hola soy contacto </h1>
        <h1> hola soy contacto </h1>
       </>
    )
}


