import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { AnimatedTooltip } from '../../components/ui/animated-tooltip';
import style from '../../styles/perfil.module.css';
import perfil from '../../assets/image.png';
import imgBoxUno from '../../assets/paisajes/montaña.jpg'; 

const people =[{ 
    id: 1,
    name: "Alex Carter",
    designation: "Director , Productor Audiovisual y Fotógrafo",
    image: perfil,
}]

export function DesingPagePerfil(){

    const parrafos = [
        {id:1, textos:"Durante los últimos diez años me especialicé en contar historias a través de la imagen. Mi trabajo combina dirección creativa, fotografía comercial y producción audiovisual para marcas, agencias y artistas."},
        {id:6, textos:"Me apasiona construir una identidad visual sólida para cada proyecto, desde la idea inicial hasta la entrega final, cuidando cada detalle de iluminación, composición y narrativa."},
        {id:5, textos:"He trabajado en campañas publicitarias, videoclips, contenido para redes sociales, documentales cortos y fotografía corporativa, colaborando con equipos multidisciplinarios en distintos países."},
        {id:4, textos:"Mi objetivo siempre es el mismo: crear imágenes que transmitan emociones y generen impacto."},
        {id:5, textos:"Creo que una buena fotografía va más allá de la técnica. Cada proyecto representa una oportunidad para descubrir una historia única y transformarla en una experiencia visual que conecte con las personas de manera auténtica. Busco siempre encontrar el equilibrio entre creatividad, estrategia y ejecución."},
        {id:6, textos:"A lo largo de mi carrera he colaborado con marcas, empresas y profesionales de diferentes industrias, adaptándome a las necesidades de cada producción sin perder una identidad visual propia. La planificación, el trabajo en equipo y la atención al detalle son pilares fundamentales en cada proyecto que desarrollo."},
        {id:7, textos:"Mi enfoque está inspirado en el lenguaje cinematográfico y la fotografía editorial, utilizando la luz, el color y la composición como herramientas narrativas. Cada imagen que creo tiene un propósito: comunicar, inspirar y dejar una impresión duradera, convirtiendo ideas en piezas visuales con personalidad y significado."},

    ]

    return (
        <>
        <header className={style.header_desing}> 
            <Link to = "/" className={style.section_link}><IoArrowBackSharp/></Link>
        </header>

        <section className={style.desing_section}>
           <div className="flex flex-row items-center justify-center w-full mt-16 mb-10" >
           <AnimatedTooltip items={people} />
           </div>
           <article className={style.desing_article}>
            {parrafos.map((usuario)=>(
                   <p key={usuario.id}> 
                    {usuario.textos}
                     </p>
                ))} 
           </article>
        </section>
    
        <section className={style.section_box}> 
            <div className={style.box_1}> 
                <h2 className={style.text_box1}> Cada proyecto es una historia, cada encuadre una decisión. </h2>
                <img src={imgBoxUno} className={style.imgBoxUno}/>
            </div>
            <div className={style.box_2}> 
                <h2 className={style.text_box2}> Trusted by </h2> 
                <p className={style.text_box2_p}> Trabajé con marcas y artistas que confían en mi visión</p>
            </div>
            <div className={style.box_3}>
                <h2 className={style.text_box2}> 50% </h2> 
                <p className={style.text_box2_p}> 120+ proyectos entregados</p>
            </div>
            <div className={style.box_4}> caja 4</div>
        </section>
        </>
    )
}