import React from 'react';

const Home = (props) => {
    return (
    <main className='holder'>
        <div>
            
        </div>
        <div className='columnas'>
            <section className='bienvenidos'>
                <h2>Bienvenidos</h2>
                <p>El centro Winter les da la bienvenida. Somos una familia que se dedica al entretenimiento desde 1993, buscando la diversion en familia y los precios mas accesibles.</p>             
            </section>   
            <section className='testimonios'> 
                <h2>Testimonios</h2>
                <div className='testimonios'>
                    <span class="cita"> Ambiente agradable, muy recomendable</span>
                    <span class="autor"> Leonel Caliva</span>
                </div>
            </section>  
        </div>  
    </main>
    )
} 
export default Home;
