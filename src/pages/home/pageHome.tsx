import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../../styles/home.module.css'

import { MdOutlineMenu } from "react-icons/md";
import { GrLinkNext } from "react-icons/gr";


import imgFoto from '../../assets/image.png'
import imgFotoUno from '../../assets/montaña.png'
import imgFotoDos  from '../../assets/retrato.png'
import imgLogo from '../../assets/logo-img.png'

import { LuSigma } from "react-icons/lu";
import { SiSony, SiDavinciresolve, SiFramer, SiNotion} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

export function DesingHome() {
    const pages = [
        {id: 1, name: 'Home', href: '#'},
        {id: 2, name: 'Work', href: '#'},
        {id: 3, name: 'Contact', href: '#'},
    ]

    const datos = [
        {id: 1, contact: '@alexcarterfilms'},
        {id: 2, contact: 'alexcarter@northframe.studio'}
    ]

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleClick= () => setIsOpen(!isOpen)

   {/*useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = () => {
      setIsOpen({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleClick);
    return () => window.removeEventListener('resize', handleClick);
  }, []);

  return isOpen;
}*/} 


    const iconos = [
       {id: 1, icon: <LuSigma />},
       {id: 2, icon: <SiSony />},
       {id: 3, icon: <DiPhotoshop />},
       {id: 4, icon: <SiDavinciresolve  />},
       {id: 5, icon: <SiFramer  />},
       {id: 6, icon: <SiNotion />}
    ]

    
    return (
        <>
        <header className={style.header_desing}>
            <div className={style.header_div}>
                <img src={imgLogo} width='40px' height='20px' /> 
                <button onClick={handleClick}> 
                    <MdOutlineMenu />
                </button>
                <ul className={isOpen ? style.menu_open : style.menu_closed}>
                    {pages.map((usuario)=>(
                        <li key={usuario.id}>
                            {usuario.name}
                        </li>
                    ))}
                </ul>
            </div>
        </header>

        <section className={style.section_desing}>
            <img src={imgFoto} className={style.img_perfil} />
            <article>
                <p className={style.section_desing_p}> Me apasiona construir una identidad visual sólida para cada proyecto, desde la idea inicial hasta la entrega final, cuidando cada detalle de iluminación, composición y narrativa.</p>
                <Link to='perfil' className={style.section_link}><GrLinkNext /> </Link>
            </article>
        </section>

         <section className={style.section_desing_icon}> 
           <ul className={style.section_ul}> 
            {iconos.map((usuarios)=> (
                <li key={usuarios.id}>
                    {usuarios.icon}
                </li>
            ))}
            </ul> 
        </section>

        <section className={style.section_desing_dos}>  
            <div className={style.section_desing_div}>
                <img src={imgFotoUno} className={style.img_montain} />
               <article className={style.section_desing_article}> 
                <h1>Horizonte</h1>
                <p>Seleccionada entre las mejores fotografias del año por su compoisicion, luz y capacidad de transmitir la 
                    inmensidad de la naturaleza en un solo instante.
                </p>
               </article> 
            </div>

            <div className={style.section_desing_div}>
                <img src={imgFotoDos} className={style.img_montain} />
               <article className={style.section_desing_article}> 
                <h1>Esencia</h1>
                <p>Reconocida por capturar la autenticidad y profundidad emocional, destacando la 
                    belleza de lo real y espontaneo.
                </p>
               </article> 
            </div>
        </section>

        <section className={style.section_desging_tres}>
                {datos.map((usuario)=>(
                   <p key={usuario.id}> 
                    {usuario.contact}
                     </p>
                ))} 
            </section>  

       
        </>
    )
}