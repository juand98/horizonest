import React, { useEffect, useState } from 'react'
import useData from '../Hooks/useData'
import useGetInformation from '../Hooks/useGetinformation';
import Tittle_welcome from '../components/Tittle_welcome';
import "../styles/memory1.css";
import Header from '../components/Header';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const MemoryVideojuegos = () => {
  const data = useData();
  const jsonData = useGetInformation("../json/videojuegos.json");
  const [memoria, setMemoria]= useState("");
  const [carrusel, setCarrusel]= useState(1);

  const [selectedThumbanil, setSelectedThumbnail]= useState("1");


  const consola = data.consolaVideojuegos;
  const cantidad = data.cantidadVideojuegos;


  useEffect(() => {
    try{
        if(jsonData){
            let memory = jsonData[consola][cantidad];
            setMemoria(memory);
          }
    }catch{
        return;
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

  const handleThumbnail= (e)=>{
    console.log(e.target);
    if(e.target.id == 'thumbnail1'){
      setSelectedThumbnail("1");
    }else if(e.target.id == 'thumbnail2'){;
      setSelectedThumbnail("2");
    }else if(e.target.id == 'thumbnail3'){
      setSelectedThumbnail("3");
    }
  };

  if((consola !== null || cantidad !== null) && memoria !== false){
    return (
        <div className='container'>
          <Header/>
          <Tittle_welcome text= "Memorias para almacenamiento de Videojuegos (En consola)" img='/iconos/videojuegos.svg'/>
            <main className='main-container'>
            <section className="galeria">
               <div className="galeria-thumbnails">
                  <img onClick={handleThumbnail} id='thumbnail1' src="/consola/thumbnails/1.jpg" alt="" className={selectedThumbanil== '1' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
                  <img onClick={handleThumbnail} id='thumbnail2' src="/consola/thumbnails/2.jpg" alt="" className={selectedThumbanil== '2' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
                  <img onClick={handleThumbnail} id='thumbnail3' src="/consola/thumbnails/3.jpg" alt="" className={selectedThumbanil== '3' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
                </div>
                <img src={`/consola/${selectedThumbanil}.jpg`} alt="" className="galeria-img" />
            </section>
              <section className="memory-section">
                  <div className="img">
                      <img className='memory-img' src={`/capacidades/.svg`} alt={memoria} />
                  </div>
                  <div className="info-carrusel">
                    <div className="info">
                        <p>{`La memoria ideal para almacenar de ${cantidad} en tu consola es la:`}</p>
                        <div className="memory-data">
                          <p className='memory-capacity'></p>
                          <p className='memory-reference'> HORIZONE {memoria.toUpperCase()}</p>
                        </div>
                    </div>
                    <div className="carrusel">
                      <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
                      <img className='carrusel-image' src={`/consola/${carrusel.toString()}.jpg`} alt="" />
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
          <Tittle_welcome text= "Memorias para almacenamiento de música" img='/iconos/videojuegos.svg'/>
          <div>ERROR</div>
        </main>
    )
  }
  
}

export default MemoryVideojuegos