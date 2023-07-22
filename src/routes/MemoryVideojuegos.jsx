import React, { useEffect, useState } from 'react'
import useData from '../Hooks/useData'
// import useGetInformation from '../Hooks/useGetinformation';
import Tittle_welcome from '../components/Tittle_welcome';
import "../styles/memory1.css";
import Header from '../components/Header';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const MemoryVideojuegos = () => {
  const data = useData();
  const jsonData = {
    "PSP": {
      "24 a 48 juegos": false,
      "48 a 96 juegos": "VG_32gb",
      "96 a 190 juegos": "VG_64gb"
    },
    "PSP Go": {
      "24 a 48 juegos": false,
      "48 a 96 juegos": "VG_32gb",
      "96 a 190 juegos": "VG_64gb"
    },
    "PSVITA": {
      "24 a 48 juegos": "VG_64gb",
      "48 a 96 juegos": "PRO_128gb",
      "96 a 190 juegos": false
    },
    "Nintendo 3DS": {
      "8 a 16 juegos": false,
      "16 a 32 juegos": "VG_32gb",
      "32 a 64 juegos": "VG_64gb"
    },
    "Nintendo Switch": {
      "8 a 16 juegos": "PRO_64gb",
      "16 a 32 juegos": "PRO_128gb",
      "32 a 64 juegos": "PRO_256gb"
    },
    "PS2": {
      "8 a 16 juegos": false,
      "16 a 32 juegos": "VG_32gb",
      "32 a 64 juegos": "VG_64gb"
    }
};
  const [memoria, setMemoria]= useState("");
  const [carrusel, setCarrusel]= useState(1);
  const [memoriaNombre, setMemoriaNombre] = useState("");

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

  useEffect(() => {
    switch (memoria){
      case "VG_32gb":
        setMemoriaNombre("VIDEOGAME 32GB");
        break;
      case "VG_64gb":
        setMemoriaNombre("VIDEOGAME 64GB");
        break;
      case "PRO_128gb":
        setMemoriaNombre("PRO 128GB");
        break;
      case "PRO_64gb":
        setMemoriaNombre("PRO 64GB");
        break;
      case "PRO_256gb":
        setMemoriaNombre("PRO 256GB");
        break;
    }
    
  }, [memoria]);

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
                      <img className='memory-img' src={`/memorias/${memoria}.png`} alt={memoria} />
                  </div>
                  <div className="info-carrusel">
                    <div className="info">
                        <p>{`La memoria ideal para almacenar de ${cantidad} en tu consola ${consola} es la:`}</p>
                        <div className="memory-data">
                          <p className='memory-capacity'></p>
                          <p className='memory-reference'> HORIZONE {memoriaNombre}</p>
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
        <main className='container'>
        <Header/>
        <Tittle_welcome text= "Memorias para almacenamiento de música" img='/iconos/videojuegos.svg'/>
        <div className="error-container">
          <p className="error-text">Parece que ha ocurrido un error, vuelve a llenar el <a href='/videojuegos'>formulario</a>. Si el error persiste es porque no contamos con una memoria que se acomode a tus necesidades.</p>
        </div>
        </main>
    )
  }
  
}

export default MemoryVideojuegos