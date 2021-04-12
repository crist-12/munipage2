import './asanic.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../../assets/asanic_logo.jpg'


function Asanic() {


    return (




        <section>

            <section className="mx-1  text-center pt-3 pb-5 box-sizing block place-items-center clear-both ">
            
                <img src={img1} alt="Imagen principal" className="mb-5 img1 inline-block text-center clear-both isolate"/>  
                
            </section>

            <section class="hacemos">
                <h1>¿Que Hacemos?</h1>
                <p>Nos encargamos de producir, suministrar, 
                optimizar y mantener el sistema de distribución de agua potable.
                 Abastecemos al 95% de San Nicolás realizando controles bajo estrictas normas de calidad, 
                 cuidando la salud de cada vecino.</p>
                

            </section>


            <section class="uno">
                <div class="hvr-grow-shadow card">
                    <div class="top"></div>
                    <div>
                        <p>Nos ocupamos de la reparación, recambio, limpieza y mantenimiento general de toda 
                            la red de cloacas y agua de San Nicolás.</p>
                    </div>
                    
                    <div class="down"></div>
                </div>
                <div class="hvr-grow-shadow card">
                    <div class="top"></div>
                    <div>
                        <p>El sistema de cloacas se encarga de transportar, a través de caños y conductos, 
                            los líquidos residuales domiciliarios. Es una red subterránea que evita el uso de pozos negros 
                            y otros sistemas de tratamiento de residuos orgánicos a más del 95% de los san nicolasenses.</p>
                    </div>
                       
                        <div class="down"></div>
                    </div>
                <div class="hvr-grow-shadow card">
                    <div class="top"></div>
                    <div>
                        <p>La suma de pequeñas acciones reducen de manera significativa el consumo diario. 
                            Saber cuánto consumimos, es la mejor forma de poder pensar en cómo ahorrar agua.</p>
                    </div>
                <div class="down"></div>
                </div>
                
            </section>

            <section class="parallax">
                <p>Trabajamos todos los días para cuidar el agua, pero necesitamos tu ayuda.</p>
            </section>
        </section>



    );


}

export default Asanic;