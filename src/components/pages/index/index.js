import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../../assets/foto-principal.jpg'
import img2 from '../../../assets/historia.jpg'

function Index  () {

    return (
        <section>
            <section class="parallax1">
                <p>Bienvenido a San Nicolás</p>
            </section>
            <section className="ml-1 mr-1 flex-column flex-md-row d-flex presentacion">
                <img src={img1} alt="Imagen principal" className="cuadro1_img "/>
                <section className="px-1 py-1 text-white bg-secondary cuadro1">
                    <p className="titulo_menor font-weight-bold">San Nicolas</p>
                    <p>Escápese a uno de los municipios de Santa Bárbara con clima agradable y propicio para un paseo familiar.</p>
                    <p>Ubicado a unos 15 kilómetros de la cabecera departamental, este municipio está rodeado de cerros que lo engalanan como el Montuca, Loma del Zacate, Maneto, Cerro del Vigía, Las Lajas, La Peña, La Cuesta y Rumaldita o Cerro La Cruz. La ciudad se mantiene fresca casi todo el tiempo.</p>
                    <p>“Estamos cerca de montañas que están vírgenes y que nos dan ese aire puro. Lo más bello que nosotros tenemos es el clima. Ventilamos un aire puro, después de eso una tranquilidad. Hasta la fecha nosotros salimos a la calle a cualquier hora de la noche y nos sentamos a las calles a platicar sin ningún problema”, contó el maestro jubilado y ahora vicealcalde, Manuel de Jesús Izaguirre.</p>
                    <p>Como en todo el territorio patepluma sus tierras son propicias para el cultivo del café.</p>
                    <p>“A la gente de aquí hábleles de café. Los meses más productivos son de noviembre a marzo, donde se ve bastante movimiento económico. Las amas de casa se dedican bastante a la elaboración de pan”, agregó Izaguirre.</p>
                    <p>Por eso anualmente la población junto a los estudiantes de los diferentes centros educativos celebran el Día de la rosquilla. Las de cuajada y de maíz blanco son de las más populares en la zona y que encantan al paladar de propios y extraños. En la ciudad hay establecimientos de comida y lugares para tomar una taza de café.</p>
                </section>
            </section>
            <section className="mx-1 my-2 flex-column flex-md-row d-flex historia">
                <section className="px-1 py-1 text-white bg-secondary cuadro2">
                    <p className="titulo_menor font-weight-bold">Datos Historicos</p>
                    <p>Los datos historicos se remontan al año 1693, fecha en que los señores Sebastian Henríquez y José Mejíia compraron una caballeria de tierra a los reyes de España por 26 tostones y un real; pero este titulo fue legalizado 132 años después en junio de 1825.</p>
                    <p>La portada de dicho documento reza: "Testimonio del Titulo Real de una Caballería de Tierra del Sitio nombrado". La Estancia de San Nicolás del Llano de Erazo, medida y compuesta en 1693 por Sebastián Henríquez y José Mejía que a la fecha han transcurrido 132 años. "Se sacó este testamento en junio de 1825".</p>
                    <p>Esta propiedad está inscrita a favor de Josefa Henríquez en los derechos correspondientes bajo No. 16931, pag. 142 y 143 del Tomo 49 del registro de la Propiedad.</p>
                    <p>Los que han escrito sobre la historia de San Nicolás, establecen que los terrenos antes mencionados fueron donados al municipio por Doña Tomasa Mejía, quien habia heredado a sus ascendientes, pero según un documento del 27 de julio de 1949 del Juzgado de Letras de Santa Bárbara, declara al Municipio de San Nicolás, como heredero ab-intestato de la difunta Doña Tomasa Mejía, y concede la posesión de dicha herencia, ya que ella no dejó herederos al momento de su muerte.</p>
                </section>
                <img src={img2} alt="Imagen de historia" className="cuadro2_img"/>
            </section>
            <section class="parallax2">
                <p>¡Visitanos!</p>
            </section>
            <section class="afterparallax">
                <section class="titulo">
                    <p>Datos Interesantes Sobre Nuestra Ciudad</p>
                </section>
                <section class="datos">
                    <section class="dato1">
                        <p class="dato11">Somos más de</p>
                        <p class="dato12">20,000</p>
                        <p class="dato11">habitantes</p>
                    </section>
                    <section class="dato2">
                        <p class="dato21">Contamos con</p>
                        <p class="dato22">19</p>
                        <p class="dato21">aldeas</p>
                    </section>
                    <section class="dato1">
                        <p class="dato11">Contamos con</p>
                        <p class="dato12">35</p>
                        <p class="dato11">caseríos</p>
                    </section>
                    <section class="dato2">
                        <p class="dato21">Estamos ubicados a</p>
                        <p class="dato22">18,000</p>
                        <p class="dato21">pies sobre el mar</p>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Index;