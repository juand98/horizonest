import React, { useEffect, useState } from 'react'
import useData from '../Hooks/useData'
import useGetInformation from '../Hooks/useGetinformation';
import Tittle_welcome from '../components/Tittle_welcome';
import "../styles/memory1.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Header from '../components/Header';


const Memory2 = () => {
  const data = useData();
  const jsonData = useGetInformation("../json/videoJson.json");
  const [memory, setMemory] = useState(undefined);
  const [carrusel, setCarrusel]= useState(1);

  const [selectedThumbanil, setSelectedThumbnail]= useState("1");


  const qualityFunctions = {
    "1080P": (array, cantidad) => array.find(e => parseInt(e[1]['1080P']) >= cantidad),
    "720P": (array, cantidad) => array.find(e => parseInt(e[1]['720P']) >= cantidad),
    "480P": (array, cantidad) => array.find(e => parseInt(e[1]['480P']) >= cantidad)
  };
  
  let calidad = data.calidadVideos;
  let cantidad = parseInt(data.cantidadVideos);
  
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

  const handleThumbnail= (e)=>{
    console.log(e.target);
    if(e.target.id == 'thumbnail1'){
      setSelectedThumbnail("1");
    }else if(e.target.id == 'thumbnail2'){
      setSelectedThumbnail("2");
    }else if(e.target.id == 'thumbnail3'){
      setSelectedThumbnail("3");
    }
  };

  if(memory != undefined){
    return (
      <div className='container'>
        <Header/>
        <Tittle_welcome text= "Memorias para almacenamiento de video" img='/iconos/video.svg'/>
        <main className='main-container'>
          <section className="galeria">
            <div className="galeria-thumbnails">
              <img onClick={handleThumbnail} id='thumbnail1' src="/video/thumbnails/1.jpg" alt="" className={selectedThumbanil== '1' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
              <img onClick={handleThumbnail} id='thumbnail2' src="/video/thumbnails/2.jpg" alt="" className={selectedThumbanil== '2' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
              <img onClick={handleThumbnail} id='thumbnail3' src="/video/thumbnails/3.jpg" alt="" className={selectedThumbanil== '3' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
            </div>
            <img src={`/video/${selectedThumbanil}.jpg`} alt="" className="galeria-img" />
          </section>
          <section className="memory-section">
              <div className="img">
                  <img className='memory-img' src={`/capacidades/${memory}.svg`} alt="" />
              </div>
              <div className="info-carrusel">
                <div className="info">
                    <p>{`La memoria ideal para almacenar más de ${cantidad} videos en calidad ${calidad} es:`}</p>
                    <p>{memory}</p>
                    <p>HORIZONE CLASS 10 / 2.0</p>
                </div>
                <div className="carrusel">
                  <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
                  <img className='carrusel-image' src={`/video/${carrusel.toString()}.jpg`} alt="" />
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
          <Tittle_welcome text= "Memorias para almacenamiento de música" img='/iconos/video.svg'/>
          <div>ERROR VIDEO</div>
        </main>
    )
  }

  
}

export default Memory2