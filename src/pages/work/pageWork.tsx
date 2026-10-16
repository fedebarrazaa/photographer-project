import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";


export function DesingPageWork() {
    return (
        <> 
        <header> 
            <Link to = "/" className={style.section_link}><IoArrowBackSharp/></Link>
        </header>
        <section> 
            caja grande 1 component de fotos 
            </section> 

            <section> 
                <p> email... </p>
                </section>

        
        </>
    )
}


