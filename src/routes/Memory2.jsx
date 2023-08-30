import React, { useEffect, useState } from 'react'
import useData from '../Hooks/useData'
// import useGetInformation from '../Hooks/useGetinformation';
import Tittle_welcome from '../components/Tittle_welcome';
import "../styles/memory1.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Header from '../components/Header';
import { Link } from 'react-router-dom';


const Memory2 = () => {
  const data = useData();
  const jsonData = {
    "4gb": {
      "1080 Full HD": "1",
      "720 HD": "2",
      "480 P": "4"
    },
    "8gb": {
      "1080 Full HD": "2",
      "720 HD": "4",
      "480 P": "8"
    },
    "16gb": {
      "1080 Full HD": "5",
      "720 HD": "9",
      "480 P": "16"
    },
    "32gb": {
      "1080 Full HD": "9",
      "720 HD": "17",
      "480 P": "32"
    },
    "64gb": {
      "1080 Full HD": "19",
      "720 HD": "34",
      "480 P": "64"
    }
  };
  const [memory, setMemory] = useState(undefined);
  const [carrusel, setCarrusel]= useState(1);

  const [selectedThumbanil, setSelectedThumbnail]= useState("1");


  const qualityFunctions = {
    "1080 Full HD": (array, cantidad) => array.find(e => parseInt(e[1]['1080 Full HD']) >= cantidad),
    "720 HD": (array, cantidad) => array.find(e => parseInt(e[1]['720 HD']) >= cantidad),
    "480 P": (array, cantidad) => array.find(e => parseInt(e[1]['480 P']) >= cantidad)
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
                  <img className='memory-img' src={`/memorias/CL10USB_${memory}.png`} alt="" />
              </div>
              <div className="info-carrusel">
                <div className="info">
                    <p>La memoria ideal para almacenar <span className="bold">{`más de ${cantidad} videos`}</span>  en calidad <span className="bold">{`${calidad}`}</span> es:</p>
                    <img src={`/capacidades/${memory}.svg`} alt="" className="memory-capacity" />
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
      <main className='container'>
      <Header/>
      <Tittle_welcome text= "Memorias para almacenamiento de video" img='/iconos/video.svg'/>
      <div className="error-container">
        <p className="error-text">Parece que ha ocurrido un error, vuelve a llenar el <Link to={'/video'}>formulario</Link>. Si el error persiste es porque no contamos con una memoria que se acomode a tus necesidades.</p>
      </div>
    </main>
    )
  }

  
}

export default Memory2