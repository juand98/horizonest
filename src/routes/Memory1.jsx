import React, { useEffect, useState } from 'react'
import useData from '../Hooks/useData'
import Tittle_welcome from '../components/Tittle_welcome';
import "../styles/memory1.css";
import Header from '../components/Header';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Memory1 = () => {
  const data = useData();
  const jsonData = {
    "4gb": {
      "alta": "550",
      "media": "1000",
      "baja": "2800"
    },
    "8gb": {
      "alta": "1000",
      "media": "2000",
      "baja": "5600"
    },
    "16gb": {
      "alta": "2000",
      "media": "4500",
      "baja": "11300"
    },
    "32gb": {
      "alta": "4500",
      "media": "9100",
      "baja": "22700"
    },
    "64gb": {
      "alta": "9100",
      "media": "18200",
      "baja": "45500"
    }
  };
  const [memory, setMemory] = useState(undefined);
  const [carrusel, setCarrusel]= useState(1);
  const [kbps, setKbps]= useState("");

  const [selectedThumbanil, setSelectedThumbnail]= useState("1");
 

  const qualityFunctions = {
    alta: (array, cantidad) => array.find(e => parseInt(e[1].alta) >= cantidad),
    media: (array, cantidad) => array.find(e => parseInt(e[1].media) >= cantidad),
    baja: (array, cantidad) => array.find(e => parseInt(e[1].baja) >= cantidad)
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

    switch (calidad){
      case "alta":
        setKbps("320 kbps");
        break;
      case "media":
        setKbps("160 kbps");
        break;
      case "baja":
        setKbps("64 kbps");
        break;
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

  if(memory != undefined){
    return (
    <div className='container'>
      <Header/>
      <Tittle_welcome text= "Memorias para almacenamiento de Música" img='/iconos/musica.svg'/>
        <main className='main-container'>
          <section className="galeria">
            <div className="galeria-thumbnails">
              <img onClick={handleThumbnail} id='thumbnail1' src="/music/thumbnails/1.jpg" alt="" className={selectedThumbanil== '1' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
              <img onClick={handleThumbnail} id='thumbnail2' src="/music/thumbnails/2.jpg" alt="" className={selectedThumbanil== '2' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
              <img onClick={handleThumbnail} id='thumbnail3' src="/music/thumbnails/3.jpg" alt="" className={selectedThumbanil== '3' ? 'galeria-thumbnail thumbnail-selected' : 'galeria-thumbnail'} />
            </div>
            <img src={`/music/${selectedThumbanil}.jpg`} alt="" className="galeria-img" />
          </section>
          <section className="memory-section">
              <div className="img">
                  <img className='memory-img' src={`/memorias/CL10USB_${memory}.png`} alt="" />
              </div>
              <div className="info-carrusel">
                <div className="info">
                    <p>La memoria ideal para almacenar más de <span className="bold">{`${cantidad}`}</span> canciones en  <span className="bold">{` calidad ${calidad}`}</span> <span>{`(${kbps})`}</span> es:</p>
                    <div className="memory-data">
                      <img src={`/capacidades/${memory}.svg`} alt="" className="memory-capacity" />
                      <p className='memory-reference'>HORIZONE CLASS 10 / 2.0</p>
                    </div>
                </div>
                <div className="carrusel">
                  <AiFillCaretLeft onClick={handlePrev} className='carrusel-button-left carrusel-button'/>
                  <img className='carrusel-image' src={`/music/${carrusel.toString()}.jpg`} alt="" />
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
          <Tittle_welcome text= "Memorias para almacenamiento de música" img='/iconos/musica.svg'/>
          <div className="error-container">
            <p className="error-text">Parece que ha ocurrido un error, vuelve a llenar el <Link to={"/musica"}>formulario</Link>. Si el error persiste es porque no contamos con una memoria que se acomode a tus necesidades.</p>
          </div>
        </main>
    )
  }

  
}

export default Memory1