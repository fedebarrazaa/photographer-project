import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";


export function DesingPageWork() {
    return (
        <> 
        <header> 
            <Link to = "/" className={style.section_link}><IoArrowBackSharp/></Link>
        </header>
        <h1> pagina de work </h1>

        <section>
             <p> asdas </p>
             </section>
        </>
    )
}


