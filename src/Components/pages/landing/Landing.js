import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import devices from '../../../assets/devices.svg'
import huawei from '../../../assets/huawei3.png'



function Landing  () {

    return (
       <div>
            <section class="contenedor mobileapp">
                <h1 class="titulo">MuniApp</h1>
                <div class="contenedor-mobile-app">
                    <img src="assets/mobileapp.svg" alt="App móvil" class="imagen-app"/>
                    <div class="contenido-textos">
                        <h3><span>1</span>Cercanía</h3>
                        <p>Porque nuestra prioridad siempre será el bienestar del pueblo sannicolasense, queremos que te sientas más cerca de nosotros que nunca, por eso MuniApp trae todas las novedades de nuestra labor incansable para hacer de nuestro pueblo un lugar próspero para tí, para mí, para todos.</p>
                        <h3><span>2</span>Tu opinión cuenta</h3>
                        <p>¿Sugerencias? Claro que queremos escucharte, acércate a nosotros desde tu móvil y cuéntanos qué sugerencias podrías aportar.</p>
                        <h3><span>3</span>Mejora continua</h3>
                        <p>Nuestra labor como los líderes del pueblo es invertir de la mejor manera nuestros impuestos</p>
                </div>
            </div>
        </section>
        <section class="contenedor mobileapp">
            <h1 class="titulo">Ventajas</h1>
            <div class="contenedor-mobile-app">
                <div class="contenido-textos">
                    <h3 class="yellow"><span>1</span>24/7</h3>
                    <p>Estamos para tí siempre que nos necesites</p>
                    <h3 class="yellow"><span>2</span>San Nicolás contigo</h3>
                    <p>Lleva todas las noticias y actualizaciones sobre nuestro trabajo a un click de distancia</p>
                    <h3 class="yellow"><span>3</span>Multiplataforma</h3>
                    <p>Accede a nuestra paltaforma web, Android e iPhone</p>
            </div>
            <img src={devices} alt="Dispositivos móviles" class="imagen-app"/>
        </div>
        <section class="contenedor mobileapp">
            <h1 class="titulo">Descargas</h1>
            <div class="contenedor-mobile-app">
                <div class="par">
                    <div class="tienda-nombre">
                        <a href=""><p>Play Store</p></a>
                        <img src="https://img.icons8.com/bubbles/200/000000/google-play.png" alt="Icono de Play Store"/>
                    </div>
                </div>
                <div class="impar">
                    <div class="tienda-nombre">
                        <div class="tienda-nombre">
                            <a href=""><p>App Store</p></a>
                            <img src="https://img.icons8.com/bubbles/200/000000/apple-app-store.png" alt="Icono de AppStore"/>
                            </div>
                    </div>
                </div>
                <div class="par">
                    <div class="tienda-nombre">
                        <a href=""><p>App Gallery</p></a>
                        <img src={huawei} width="200px" alt="Icono de App Gallery"/>
                        </div>
                </div>
            </div>
        </section>
        </section>
       </div>
    );
}

export default Landing;