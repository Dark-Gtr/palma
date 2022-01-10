import React, {useEffect, useState} from 'react';
import * as CortadorService from './cortadorService'
import "bootstrap/dist/css/bootstrap.min.css"
import {Cortador, Registro} from './cortador'
import { Button, Modal, /* ModalHeader, */ ModalBody, /* ModalFooter, */ /* ModalBodyProps,  Input*/ } from 'reactstrap';
import './App.css';
import axios from 'axios'
//-------------------iconos---------------
import {IconArrow, /* IconGallery, IconHome, */ IconLista, /* IconUser, */ mainColorsBox, mainColor, IconEdit, IconLog, IconEdit2} from './components/icons'

/* import logoconfig2 from './conf2.svg'
import logoconfig from './conf.svg' */
import logoAdd from './button-add.svg'
import {ButtonCortadorTipe, ButtonSave, Fix, /* cortadorTipe, */ ButtonConfirmDel, ButtonConfirmUpdate, ButtonsConfirmDel, ButtonsConfirmUpdate, configurations} from './fix';

const childColor = () => {
  if(mainColor === mainColorsBox.length -1){
    return mainColor - 1;
  } else {
    return mainColor + 1;
  }
}

export let currentId: string;
export let bufferCortador: number;
export let bufferSacador: number;

let currentCortadores:any = [];
let currentSacadores:any = [];
let datosExtras = {
    dineroViaje: 0,
    dineroTotal: 0,
};

const IconConf = () => {
  return(
    
<svg id="iconCfg" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#ffffff" stroke="none">
<path d="M5664 11538 c-38 -40 -55 -68 -68 -113 -19 -65 -44 -149 -70 -235 -9
-30 -74 -248 -145 -484 l-128 -429 -97 -33 c-176 -60 -334 -125 -503 -209
l-168 -83 -100 53 c-55 29 -154 82 -220 117 -66 36 -147 80 -180 98 -232 125
-441 239 -505 275 -41 22 -100 54 -131 70 l-57 29 -108 -101 c-60 -56 -315
-308 -568 -561 l-458 -460 54 -98 c30 -55 77 -139 103 -189 26 -49 62 -115 78
-145 17 -30 57 -103 89 -162 32 -60 86 -159 119 -220 34 -62 84 -156 112 -208
27 -52 56 -104 63 -115 8 -11 14 -26 14 -35 0 -8 -31 -76 -69 -150 -90 -176
-178 -385 -247 -587 -18 -50 -20 -52 -74 -68 -30 -10 -73 -23 -95 -30 -34 -11
-101 -31 -140 -41 -5 -2 -41 -12 -80 -24 -38 -12 -77 -23 -85 -25 -8 -2 -46
-13 -85 -25 -38 -12 -77 -23 -85 -25 -8 -2 -69 -20 -135 -40 -177 -53 -269
-81 -370 -110 -82 -24 -95 -31 -147 -83 l-57 -57 -1 -712 c0 -688 0 -713 19
-722 10 -6 56 -21 102 -35 46 -13 170 -50 274 -81 105 -31 197 -58 205 -60 8
-2 47 -14 85 -25 111 -34 154 -47 245 -73 113 -33 287 -85 326 -98 27 -8 34
-18 49 -67 79 -263 165 -482 275 -702 l68 -136 -52 -100 c-29 -54 -81 -151
-116 -214 -34 -63 -79 -146 -100 -185 -21 -38 -65 -119 -97 -180 -97 -177
-187 -344 -236 -436 l-46 -85 510 -510 509 -509 58 29 c31 17 91 49 132 71 82
46 409 224 535 291 44 24 134 72 200 109 66 36 152 82 191 102 l71 36 179 -90
c98 -50 240 -114 314 -143 74 -29 144 -56 155 -61 18 -7 175 -57 231 -74 14
-3 25 -19 32 -43 18 -63 66 -228 112 -377 11 -38 23 -77 25 -85 3 -13 70 -240
139 -470 13 -41 40 -132 61 -203 l38 -127 723 0 723 0 55 66 c31 36 56 68 57
72 1 13 8 37 29 107 12 39 23 77 25 85 2 8 13 47 25 85 12 39 23 77 25 85 2 8
13 44 24 80 11 36 63 211 116 390 53 179 100 332 105 340 4 8 48 28 97 44 156
50 363 137 548 229 l180 90 55 -29 c30 -16 118 -63 195 -105 125 -68 203 -110
445 -241 36 -20 119 -65 185 -100 66 -36 159 -86 206 -111 47 -26 92 -47 101
-47 18 0 1118 1103 1118 1122 0 7 -12 33 -26 58 -14 25 -45 81 -69 125 -23 44
-71 132 -105 195 -35 63 -138 255 -230 426 -93 170 -177 326 -189 345 -11 19
-21 41 -21 50 0 9 27 69 60 133 53 104 109 230 156 351 9 22 19 47 23 55 4 8
25 69 46 135 21 66 43 125 49 132 6 6 52 23 101 38 148 44 177 52 250 75 39
11 77 23 85 25 8 2 47 13 85 25 39 12 77 23 85 25 8 2 47 13 85 25 39 12 77
23 85 25 8 2 69 20 135 40 66 20 158 47 204 60 74 21 91 30 138 77 l53 52 0
722 0 722 -62 21 c-59 19 -325 98 -358 106 -8 2 -46 14 -85 25 -105 32 -151
46 -250 75 -49 15 -126 37 -170 50 -44 13 -118 35 -165 49 -47 13 -114 33
-150 45 l-65 20 -34 103 c-67 211 -195 507 -293 684 l-45 80 80 145 c43 79 99
182 124 229 57 106 223 413 360 665 24 44 51 95 60 113 l17 33 -499 499 c-275
275 -507 500 -515 500 -9 0 -24 -6 -35 -13 -11 -8 -58 -34 -105 -59 -90 -48
-253 -136 -447 -242 -65 -35 -145 -78 -178 -96 -92 -49 -169 -91 -302 -164
l-121 -66 -159 79 c-192 96 -331 153 -523 216 -80 26 -154 51 -166 55 -15 6
-26 29 -43 86 -33 117 -60 207 -161 544 -51 168 -102 341 -115 385 -13 44 -33
112 -45 150 -12 39 -23 78 -25 88 -2 9 -7 22 -10 27 -4 7 -260 10 -729 10
l-723 0 -49 -52z m981 -3342 c83 -16 89 -17 166 -35 248 -57 582 -231 789
-413 344 -302 557 -671 644 -1118 23 -119 27 -176 27 -362 0 -163 -9 -263 -30
-361 -6 -23 -13 -58 -16 -77 -13 -77 -89 -282 -150 -405 -178 -362 -407 -601
-735 -767 -355 -180 -750 -252 -1120 -203 -63 8 -126 17 -140 20 -14 3 -47 10
-75 16 -91 18 -310 97 -423 154 -560 280 -966 827 -1058 1425 -30 198 -30 501
1 650 3 14 8 41 11 60 31 174 128 426 228 593 120 200 230 324 406 456 216
163 515 302 745 346 73 14 203 35 240 39 83 9 412 -4 490 -18z"/>
</g>
</svg>

  )
}
const html = document.querySelector("html");
html?.style.setProperty('--main-color', `${mainColorsBox[mainColor]}`)
html?.style.setProperty('--child-color', `${mainColorsBox[childColor()]}`)
let currentSlid:any = 0;

function App() {
  
  
  //aqui estan los stados para abrir o cerrar los modals
  const [modalAdd, setmodalAdd] = useState(false)
  const [modalLog, setmodalLog] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalCfg, setModalCfg] = useState(false)
  const [test, setTest] = useState(false)
  /* const [results, setResults] = useState(false) */
  //-----Contador de cortadores-----
  let cortadorCount = 0;
  let sacadorCount =0;
  
  // aqui estan las funciones para abrir o cerrar los modals
  const abrirModalAdd = () => {
    setmodalAdd(!modalAdd)
  }
  const abrirModalLog = () => {
    setmodalLog(!modalLog)
  }
  const abrirModalEdit = () => {
    setModalEdit(!modalEdit)
  }
  const abrirModalCfg = () => {
    setModalCfg(!modalCfg)
    
    
  }
  // aqui se define la interfase de los datos obtenidos
  const [cortadores, setCortadores] = useState<Cortador[]>([])
  const [registroCorte, setRegistroCorte] = useState<Registro[]>([])
  // aqui se hacen las peticiones a la base de datos
  const loadCortadores = async () => {
    const res = await CortadorService.getCortadores()
    setCortadores(res.data);
    
  }

  const loadRegistro = async () => {
    const resReg = await CortadorService.getRegistro()
    setRegistroCorte(resReg.data)
    
    
    
  }
  
  
  const abrirMenu= () => {
    /* let menuButton = document.getElementById("menu-button")
    
    const menuShow = document.getElementById("menu__container--show")
    let buffer = true;
    if(buffer){
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      menuShow?.style.height=
    } */

    
  }
  useEffect(() => {
    loadCortadores();
    loadRegistro();
    abrirMenu()
  }, [])

  useEffect(() => {
    loadCortadores();
  }, [modalEdit])

  useEffect(() => {
    loadCortadores();
  }, [test])

  useEffect(() => {

    let calcularConfirm:any = document.getElementById("calcular-confirm");
    let text
    let cortadorCount = 0;
    let input: any
    
    


    if(test === true){
      calcularConfirm.style.width = '93%';
      calcularConfirm.style.overflow = 'hidden';
      calcularConfirm.style.padding = '10px';
    } else {
      calcularConfirm.style.width = '0';
      calcularConfirm.style.overflow = 'hidden';
      calcularConfirm.style.padding = '0';
    }
    
    for(let i = 0; i < cortadores.length; i++){
        if (cortadores[i].tipo === 1 && test === true) {
            cortadorCount++
            input = document.getElementById(`cortador${cortadorCount}`)
            
            text = document.createElement("span")
            text.innerText = `${cortadores[i].nombre}: ${Number(input.value)}`
            calcularConfirm.firstChild.nextElementSibling.appendChild(text)
        }
        

    }

    if (test === true) {
      const KgTotal: any = document.getElementById("kgDeFruta");
      text = document.createElement("span");
      text.innerText = `Kg total de fruta: ${Number(KgTotal.value)}`;
      calcularConfirm.firstChild.nextElementSibling.appendChild(text)
    }
    
    

},[test])
  
  
  return (
    <div className="App">
      <header className="App-header">
      
        <nav className="navBar">
          <span style={{width: '3vh', height: '3vh'}}></span>
          <h2>Palma de aceite</h2>
         {/*  <Button onClick={abrirModalLog}>Registro de corte</Button> */}
          <span style={{width: '3vh', height: '3vh'}}></span>
        </nav>
        <section className="menu__container">
          <button id="menu-button">
            <IconLista/>
            {/* <img src={IconLista} className="Config-logo" alt="config"></img> */}
          </button>
          <article id="menu__container--show">
            <ul>

              <li>
                <button onClick={abrirModalCfg}>
                  <IconConf/> <span> Configuracion</span>
                </button>
              </li>

              <li>
                <button onClick={abrirModalLog}>
                  <IconLog/><span> Registro de corte</span>
                </button>
              </li>

            </ul>
          </article>
        </section>

      </header> 
      <div className="menu__shadow"></div>
      <main>
        <section style={{overflow: 'hidden'}}>

          <button id="cortadores__button--left" onClick={() => {
            
            const slider:any = document.querySelector(".cortadores");
            
            const translate = (slider.clientWidth);
            
            
            if(currentSlid < 0){
              currentSlid = currentSlid + translate;
              
              slider.style.transform = `translate(${currentSlid}px,0px)`
            }
            
            
          }}><IconArrow/> </button>
          <button id="cortadores__button--right"onClick={() => {
            
            
            
            const slider:any = document.querySelector(".cortadores");
            const sliderElements = slider.childElementCount;
            const translate = ( 0 - slider.clientWidth);
            const translateLimit = (translate * (sliderElements - 1));
            
            if(currentSlid > translateLimit){
              currentSlid = currentSlid + translate;
              slider.style.transform = `translate(${currentSlid}px,0px)`
              
            }
          }}><IconArrow/> </button>

          <div className="cortadores">

            {cortadores.map((Cortador) => {
              
              
              if(Cortador.tipo === 2) 
              return (
              <article className="cortador__container"> 

                <div className="sacador"style={{color: 'white'}}>

                  <div className="cortador_div">
                    <span>{Cortador.nombre}</span>
                    <span>Sacador</span>
                    <button className="butonDel" onClick={() => {abrirModalEdit(); currentId = Cortador._id}}><IconEdit/></button>
                  </div>

                  <article className="cortador__data" >
                    <span>Kilos: <span className="cortador__values">{Cortador.kilos} Kg</span></span>
                    
                    <span>Racimos: <span className="cortador__values">{Cortador.racimos} R</span></span>
                    
                    <span>Dinero Semanal: <span className="cortador__values">{Cortador.dineroSm} $</span></span>
                    
                    <span>Dinero Mensual: <span className="cortador__values">{Cortador.dineroMs} $</span></span> 
                  </article>

                </div>

              </article>)
              return (
              <article className="cortador__container"> 

                <div className="cortador"style={{color: 'white'}}>

                  <div className="cortador_div">
                    <span>{Cortador.nombre}</span>
                    <span>Cortador</span>
                    <button className="butonDel" onClick={() => {abrirModalEdit(); currentId = Cortador._id}}><IconEdit/></button>
                  </div>

                  <article className="cortador__data" >
                    <span>Kilos: <span className="cortador__values">{Cortador.kilos} Kg</span></span>
                    
                    <span>Racimos: <span className="cortador__values">{Cortador.racimos} R</span></span>
                    
                    <span>Dinero Semanal: <span className="cortador__values">{Cortador.dineroSm} $</span></span>
                    
                    <span>Dinero Mensual: <span className="cortador__values">{Cortador.dineroMs} $</span></span> 
                    
                  </article>

                </div>

              </article>)
              }
            )}
            <article className="cortador__container">
              <button className="agregar" onClick={abrirModalAdd}><img src={logoAdd} className="logo-Add" alt="add"></img></button>
            </article>
            
          </div>

        </section>
        
        <section className="calculo__container">
          
          
          <p>Vamos a calcular el pago de los cortadores</p>
          <article >
              <span>estos son los precios:</span>
              <div className="calculo__container--precios">
                  <span>Cortador: {configurations.precioCortador}$</span>
                  <span>Sacador: {configurations.precioSacador}$</span>
                  <span>Viaje: {configurations.precioViaje}$</span>
              </div>

          </article>
          <span style={{margin: '15px 0px'}} >Ingrese la cantidad de racimos que cortó cada cortador y la cantidad Total del Kg de fruta</span>
          <article className="calculo__container--trabajadores" >
            
              <div>
                <span>Cortadores:</span>
                {cortadores.map((Cortador) => {
                  
                  if(Cortador.tipo === 1){
                    cortadorCount++;
                    bufferCortador = cortadorCount;
                    return(
                      <>
                        <label htmlFor={`cortador${cortadorCount}`}>
                          <span>{Cortador.nombre}: </span>
                          <input type="number"  id={`cortador${cortadorCount}`} />
                        </label>
                        
                      </>
                    )
                  }
                })}
              </div>
              <div style={{border: '1.5px solid var(--child-color)'}} >
                <span>Sacadores:</span>
                {cortadores.map((Cortador) => {
                  if(Cortador.tipo === 2){
                    sacadorCount++;
                    bufferSacador = sacadorCount;
                    return(
                      <>
                        {Cortador.nombre}
                        
                      </>
                    )
                  }
                })}
              </div>
            
            <div>
              <span>Kg de Fruta: </span><input type="number" name="" id="kgDeFruta" />

            </div>
            <div style={{border: 'none'}}>
              <button id="button-calcular-start" onClick={() => {
                /* ButtonCalcularStart(); */
                let menu: any = document.querySelector(".menu__shadow");
                
                menu.style.zIndex =  '3';
                menu.style.height = '100vh';
                
                
                setTest(!test)
                
              } }>Calcular</button>
            </div>
            
          </article>
          
          
          <div id="calcular-confirm">
            <span>Estos son los datos:</span>
            <div id="calcular__confirm--datos"></div>

            
            

            <div> 
              <button id="calcular__confirm--button-no" onClick={() =>{
                const menu:any = document.querySelector(".menu__shadow")
                const calcularConfirm:any = document.getElementById("calcular-confirm")
                menu.style.zIndex =  '-1';
                menu.style.height = '0';
                

                setTest(!test);
                calcularConfirm.firstChild.nextElementSibling.innerHTML = ""
                
              }} >NO</button>
              <button id="calcular__confirm--button-si" onClick={async() => {
                const menu:any = document.querySelector(".menu__shadow")
                const calcularConfirm:any = document.getElementById("calcular-confirm")
                
                menu.style.zIndex =  '-1';
                menu.style.height = '0';
                

                setTest(!test);
                calcularConfirm.firstChild.nextElementSibling.innerHTML = "";
                //inicilizacion de variables------------
                const kgTotalContainer:any = document.getElementById("kgDeFruta");
                let kgTotal:number = Number(kgTotalContainer.value);
                let racimosTotal:number = 0;
                
                cortadorCount = 0;
                let promedioRacimo: number = 0;
                
                currentCortadores = []
                //ciclo para filtrar los trabajadores por cortadores----------
                for (let i = 0; i < cortadores.length; i++) {
                    if (cortadores[i].tipo === 1) {
                        cortadorCount++;
                        let bufferElement: any = document.getElementById(`cortador${cortadorCount}`)
                        let inputValue = Number(bufferElement.value);
                        
                        
                        currentCortadores.push({
                            cortador: cortadores[i].nombre, 
                            racimos: inputValue,
                            kilos: 0,
                            dinero: 0,
                            id: cortadores[i]._id,
                            dineroMsBefore: cortadores[i].dineroMs,
                            dineroSmBefore: cortadores[i].dineroSm,
                            kilosBefore: cortadores[i].kilos,
                            racimosBefore: cortadores[i].racimos
                        })
                        
                    }

                    if (cortadores[i].tipo === 2){
                        currentSacadores.push({
                            
                            cortador: cortadores[i].nombre, 
                            racimos: 0,
                            kilos: 0,
                            dinero: 0,
                            id: cortadores[i]._id,
                            dineroMsBefore: cortadores[i].dineroMs,
                            dineroSmBefore: cortadores[i].dineroSm,
                            kilosBefore: cortadores[i].kilos,
                            racimosBefore: cortadores[i].racimos
                        }
                        )
                    }
                    
                }

                
                //ciclo para sumar los racimos de todos los cortadores del array racimos
                for (let i = 0; i < currentCortadores.length; i++) {
                    racimosTotal += currentCortadores[i].racimos;
                    
                    
                }
                //asignacion a la variable promedioRacimo del resultado de la divicion de kgTotal y racimosTotal
                promedioRacimo  = kgTotal / racimosTotal;
                if (isNaN(promedioRacimo)) {
                  promedioRacimo = 0;
                }

                
                for (let i = 0; i < currentCortadores.length; i++) {
                    currentCortadores[i].kilos = currentCortadores[i].racimos * promedioRacimo;
                    
                    currentCortadores[i].dinero = currentCortadores[i].kilos * (configurations.precioCortador / 1000);
                    axios.put(`http://10.5.50.7:4000/cortadores/${currentCortadores[i].id}`, { 
                        dineroMs: (currentCortadores[i].dineroMsBefore + Math.floor(currentCortadores[i].dinero)),
                        dineroSm: (currentCortadores[i].dineroSmBefore + Math.floor(currentCortadores[i].dinero)),
                        kilos: (currentCortadores[i].kilosBefore + Math.floor(currentCortadores[i].kilos)),
                        racimos: (currentCortadores[i].racimosBefore + Math.floor(currentCortadores[i].racimos))
                    })
                }
                
                currentSacadores[0].racimos = racimosTotal;
                currentSacadores[0].kilos = kgTotal;
                currentSacadores[0].dinero = kgTotal * (configurations.precioSacador / 1000);
                axios.put(`http://10.5.50.7:4000/cortadores/${currentSacadores[0].id}`, {
                    dineroMs: currentSacadores[0].dineroMsBefore + Math.floor(currentSacadores[0].dinero),
                    dineroSm: currentSacadores[0].dineroSmBefore + Math.floor(currentSacadores[0].dinero),
                    kilos: currentSacadores[0].kilosBefore + Math.floor(currentSacadores[0].kilos),
                    racimos: currentSacadores[0].racimosBefore + Math.floor(currentSacadores[0].racimos)
                })
                
                datosExtras.dineroViaje = kgTotal * (configurations.precioViaje / 1000);
                datosExtras.dineroTotal = kgTotal * (configurations.precioFruta / 1000);
                
                const results:any = document.getElementById("results");

                const results__cortadores = document.createElement("div");
                results__cortadores.id = "results__cortadores";

                const results__sacadores = document.createElement("div");
                results__sacadores.id = "results__sacadores";

                const results__data = document.createElement("div");
                results__data.id = "results__data"
                results.innerHTML = "";
                
                
                
                

                {
                  const span = document.createElement("span");
                  span.innerText = "estos son los resultados:";
                  results.appendChild(span);
                }
                console.log(datosExtras);
                
                {
                  const span = document.createElement("span");
                  span.innerText = "Cortadores";
                  results.appendChild(span);
                }
                results.appendChild(results__cortadores);

                {
                  const span = document.createElement("span");
                  span.innerText = "Sacadores:";
                  results.appendChild(span);
                }
                results.appendChild(results__sacadores);

                {
                  const span = document.createElement("span");
                  span.innerText = "Otros Datos:";
                  results.appendChild(span);
                }
                results.appendChild(results__data);


                results__cortadores.innerHTML = "";
                
                results__sacadores.innerHTML = "";
                
                results__data.innerHTML = "";
                

                
                
                for (let i = 0; i < currentCortadores.length; i++) {
                  const divResults = document.createElement("div");
                  divResults.className = "results__cortadores--item"
                  divResults.innerHTML = `${currentCortadores[i].cortador} <br/>
                  dinero: ${Math.floor(currentCortadores[i].dinero)} $<br/>
                  Kilos: ${Math.floor(currentCortadores[i].kilos)} Kg<br/>
                  racimos: ${currentCortadores[i].racimos}
                  
                  `
                  results__cortadores.appendChild(divResults);
                  
                }

                
                {
                  const divResults = document.createElement("div");
                  divResults.className = "results__sacadores--item";
                  divResults.innerHTML = `${currentSacadores[0].cortador} <br/>
                  dinero: ${Math.floor(currentSacadores[0].dinero)} $<br/>
                  Kilos: ${Math.floor(currentSacadores[0].kilos)} Kg<br/>
                  racimos: ${currentSacadores[0].racimos}
                  
                  `
                  results__sacadores.appendChild(divResults);
                }
                
                {
                  const divResults = document.createElement("div");
                  divResults.className = "results__data--item";
                  divResults.innerHTML = `Dinero de viaje: ${datosExtras.dineroViaje}<br/>
                  Dinero Total: ${datosExtras.dineroTotal}
                  
                  `
                  results__data.appendChild(divResults);
                }

                loadCortadores();

                  
              }}>SI</button>

            </div>
          </div>
          
          {/* {(() => {
            if(test){
              
              return(
                <>
                  <CalcularConfirm/>
                </>
              )
            }
            
            
          })()} */}
          <div id="results">
            

          </div>

        </section>
      </main>

      <div id="modalCfg">
        <Modal isOpen={modalCfg} className="modalCfg" centered> 
      
          <ModalBody className="bodyCfg">
            <article className="header__cfg">
              <button className="Boton-config" id="Boton-config2" onClick={abrirModalCfg}>
                <IconConf/>
              </button>
              <ButtonSave/>
            </article>

            <article className="form__cfg">
              <span>Configuraciones </span>
              <span>Precios por Tonelada </span>
              <form>

                <label htmlFor="PrecioCortador">
                  <span>Precio Cortador: </span><input type="text" id="PrecioCortador" name="PrecioCortador" placeholder={configurations.precioCortador}/><span style={{color: 'green'}}>$</span>
                </label>
                

                <label htmlFor="PrecioSacador">
                  <span>Precio Sacador: </span><input type="text" id="PrecioSacador" name="PrecioSacador" placeholder={configurations.precioSacador} /><span style={{color: 'green'}}>$</span>
                </label>
                

                <label htmlFor="PrecioFruta">
                  <span>Precio Por Tonelada de Fruta: </span><input type="text" id="PrecioFruta" name="PrecioFruta" placeholder={configurations.precioFruta} /><span style={{color: 'green'}}>$</span>
                </label>
                

                <label htmlFor="PrecioViaje">
                  <span>Precio por Viaje: </span><input type="text" id="PrecioViaje" name="PrecioViaje" placeholder={configurations.precioViaje} /><span style={{color: 'green'}}>$</span>
                </label>
                
                <p id="msj_save"></p>
              </form>
              
            </article>
            
          
          </ModalBody>
        </Modal>
      </div>
      <div id="modalAdd">
       <Modal isOpen={modalAdd}>
         <ModalBody>
           <p>esta es la ventena para agregar</p>
           <Button onClick={abrirModalAdd}>x</Button>
         </ModalBody>

       </Modal>
     </div>
      <div id="modalLog">
     <Modal isOpen={modalLog} centered={true} contentClassName="styleModalLog_Content" returnFocusAfterClose={false}>
         <ModalBody>
           <div className="RegistroDeCorte">
             {registroCorte.map((Registro) => {
               return <div className="registros"> 
                <p>{Registro.description}</p>
               </div>
             })}
            </div>
            <p>hola</p>
           <Button onClick={abrirModalLog}>x</Button>
         </ModalBody>

       </Modal>
     </div>
      <div id="modalDel">
        <Modal isOpen={modalEdit}>
          <ModalBody>
            
            {cortadores.map((Cortador) => {

              if(Cortador._id === currentId){
                return(<>
                <article className="modalEdit__button--close">{Cortador.nombre}<button onClick={abrirModalEdit}><IconEdit2/></button></article>

                <article className="modalEdit__cortador">
                  <form action="">
                    <label htmlFor="name-update">
                      <span>Cambiar Nombre: </span><input type="text" id="name-update" placeholder={Cortador.nombre}/>
                    </label>
                  </form>

                  <article className="modalEdit__cortador--tipe">
                    <span>Tipo:</span>
                    <article>
                      <ButtonCortadorTipe/>
                    </article>
                  </article>

                  <article className="modalEdit__cortador--finish" >
                    <button id="button__cortador--del" onClick={() => {
                      ButtonConfirmDel()

                    }}>Eliminar cortador</button>
                    <button id="button__cortador--update" onClick={() => {
                      ButtonConfirmUpdate()
                    }} >Actualizar cortador</button>
                  </article>
                  
                  <article className="modalEdit-msj">
                    <div className="modalEdit-msj-update">
                      <span>Confirmar que desea Actualizar al Cortador: </span>
                      <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '10px 0px'}}>
                        <ButtonsConfirmUpdate/>
                      </div>
                    </div>

                    <div className="modalEdit-msj-del">
                      <span>Confirmar que desea Eliminar al Cortador: </span>
                      <div style={{display: 'flex', justifyContent: 'space-evenly', margin: '10px 0px'}}>
                        <ButtonsConfirmDel/>
                      </div>
                      
                    </div>
                  </article>
                  
                  <div id="msj-of-confirmation">

                  </div>
                </article>
                </>
                )
              }
            })}
          </ModalBody>
          {/* <ModalFooter>
            <Button className="btn btn-primary" >Cerrar</Button>
          </ModalFooter> */}
        </Modal>
      </div>
    <Fix/>
    </div>
  );
}


export default App;
