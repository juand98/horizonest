import React, { useEffect, useState } from 'react'
import useData from '../../Hooks/useData'
import useGetInformation from '../../Hooks/useGetinformation';
import Tittle_welcome from '../../components/Tittle_welcome';
import "../../styles/memory1.css";
import Header from '../../components/Header';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Memory1 = () => {
  const data = useData();
  const jsonData = useGetInformation("../json/musicJson.json");
  const [memory, setMemory] = useState(undefined);
  const [carrusel, setCarrusel]= useState(1);

 

  const qualityFunctions = {
    Alta: (array, cantidad) => array.find(e => parseInt(e[1].alta) >= cantidad),
    Media: (array, cantidad) => array.find(e => parseInt(e[1].media) >= cantidad),
    Baja: (array, cantidad) => array.find(e => parseInt(e[1].baja) >= cantidad)
  };
  
  let calidad = data.calidadCanciones;
  let cantidad = parseInt(data.cantidadCanciones);
  
  useEffect(() => {
    const jsonArray = Object.entries(jsonData);
    
    try{
        const memoryResult = qualityFunctions[calidad](jsonArray, cantidad);
        if (memoryResult) {
        setMemory(memoryResult[0]);
        }
    }catch{
        setMemory(undefined);
    }

  }, [data, jsonData]);

  const handlePrev =()=>{
    if(carrusel == 1){
      setCarrusel(3);
    }else if(carrusel != 1){
      setCarrusel(carrusel - 1);
    }
  };

  const handleNext =()=>{
    if(carrusel == 3){
      setCarrusel(1);
    }else if(carrusel != 3){
      setCarrusel(carrusel + 1);
    }
  };

  if(memory != undefined){
    return (
    <div className='container'>
      <Header/>
        <main className='main-container'>
          <Tittle_welcome text= "Memorias para almacenamiento de Música."/>
          <section className="memory-section">
              <div className="img">
                  <img className='memory-img' src={`../src/assets/capacidades/${memory}.svg`} alt="" />
              </div>
              <div className="info-carrusel">
                <div className="info">
                    <p>{`La memoria ideal para almacenar más de ${cantidad} canciones en calidad ${calidad} es:`}</p>
                    <div className="memory-data">
                      <p className='memory-capacity'>{memory}</p>
                      <p className='memory-reference'>HORIZONE CLASS 10 / 2.0</p>
                    </div>
                </div>
                <div className="carrusel">
                  <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
                  <img className='carrusel-image' src={`../src/assets/music/${carrusel.toString()}.jpg`} alt="" />
                  <AiFillCaretRight onClick={handleNext} className='carrusel-button-right carrusel-button'/>
                </div>
              </div>
          </section>
        </main>
    </div>
        
    )
  }else{
    return (
        <main className='main-container'>
          <Tittle_welcome text= "Memorias para almacenamiento de música"/>
          <div>ERROR</div>
        </main>
    )
  }

  
}

export default Memory1