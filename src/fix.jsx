import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import {currentId, bufferCortador, bufferSacador} from './App'
import {Cortador} from './cortador'
import * as CortadorService from './cortadorService'

if(!JSON.parse(localStorage.getItem("configurations"))){
    let configurations = {
        precioCortador: 0,
        precioSacador: 0,
        precioFruta: 0,
        precioViaje: 0,
    }
    
    localStorage.setItem("configurations", JSON.stringify(configurations));
}


export let cortadorTipe = 0;

export let configurations = JSON.parse(localStorage.getItem("configurations"));
export class ButtonSave extends Component{
    render(){
        return(
            <>
                <button className="btn-save-cfg" onClick={() => {
                    const msjSave = document.getElementById("msj_save");
                    let value1 = Number(document.getElementById("PrecioCortador").value);
                    let value2 = Number(document.getElementById("PrecioSacador").value);
                    let value3 = Number(document.getElementById("PrecioFruta").value);
                    let value4 = Number(document.getElementById("PrecioViaje").value);
                    if(value1 >= 0 || value2 >= 0 || value3 >= 0 || value4 >= 0){
                        configurations.precioCortador = value1;
                        configurations.precioSacador = value2;
                        configurations.precioFruta = value3;
                        configurations.precioViaje = value4;
                        msjSave.innerText = `Se guardaron los datos`;
                    } else{
                        
                        msjSave.innerText = "Por favor llena los datos solicitados";
                    }
                    
                    
                    localStorage.setItem("configurations", JSON.stringify(configurations));
                }}>Guardar</button>
            </>
        )
    }
}

// Buttons
export const ButtonConfirmDel = () => {
    if (document.querySelector(".modalEdit-msj-update").clientHeight === 0) {
        document.querySelector(".modalEdit-msj-del").style.height = '100px'
    }
    
}

export const ButtonConfirmUpdate = () => {
    
    if (document.querySelector(".modalEdit-msj-del").clientHeight === 0) {
        document.querySelector(".modalEdit-msj-update").style.height = '100px'
    }
    
}

export const ButtonsConfirmDel = () => {
    return(
        <>
            <button onClick={() => {
                document.querySelector(".modalEdit-msj-del").style.height = '0px'
            }}>No</button>
            <button>Si</button>
        </>
    )
}

export const ButtonsConfirmUpdate = () => {
    const [cortadores, setCortadores] = useState([])
    const loadCortadores = async () => {
        const res  = await CortadorService.getCortadores();
        setCortadores(res.data)
    }
    useEffect(() => {
        loadCortadores()
    })
    
    return(
    <>
        <button onClick={() => {
            document.querySelector(".modalEdit-msj-update").style.height = '0px';
            
        }}>No</button>
        <button onClick={async() => {
            /* 
            console.log(cortadorTipe); */
            const msjDeConfimacion = document.getElementById("msj-of-confirmation")
            let currentCortador;
            cortadores.forEach(Cortador => {
                if (Cortador._id === currentId) {
                    currentCortador = Cortador
                }
            });

            if(document.getElementById("name-update").value === ""){  
                if (cortadorTipe !== 0) {
                    await axios.put(`http://10.5.50.7:4000/cortadores/${currentId}`, {tipo: cortadorTipe })
                    msjDeConfimacion.innerHTML = `
                        <p> Se cambió: El tipo de trabajador</p>
                    `
                }

            } else if (cortadorTipe === 0) {
                if (document.getElementById("name-update").value !== "") {
                    await axios.put(`http://10.5.50.7:4000/cortadores/${currentId}`, {nombre: document.getElementById("name-update").value })
                    msjDeConfimacion.innerHTML = `
                        <p> Se cambió: El Nombre</p>
                    `
                }
            } else{
                
                await axios.put(`http://10.5.50.7:4000/cortadores/${currentId}`, { nombre: document.getElementById("name-update").value, tipo: cortadorTipe })
                msjDeConfimacion.innerHTML = `
                    <p> Se cambió: El Nombre y el tipo de trabajador</p>
                `;
                
            }
            
        }} >Si</button>
    </>)
}

//---Tipo de cortador 1= "cortador", 2= "sacador"
/* export const CalcularPago = () => {

    const [cortadores, setCortadores] = useState([])
    const loadCortadores = async () => {
        const res  = await CortadorService.getCortadores();
        setCortadores(res.data)
    }
    useEffect(() => {
        loadCortadores()
    }, [])
    
    let i = 0;
    debugger
    console.log(cortadores);
    return (
        <>
        
        
        {cortadores.map((Cortador) => {
            
            return(
                <>
                {Cortador.nombre}
                </>
            )
        })}

        </>
    )
} */


export class ButtonCortadorTipe extends Component{
    
    render() {
        
        return(
            <>  
                <article>
                    <button id="button__cortador--tipe" onClick={() => {
                        const buttonCortadorTipe = document.getElementById("button__cortador--tipe");
                        if (cortadorTipe === 0 || cortadorTipe === 2) {
                            buttonCortadorTipe.parentElement.nextElementSibling.firstChild.style.backgroundColor = "var(--child-color"
                            buttonCortadorTipe.style.backgroundColor = "var(--main-color)";
                            cortadorTipe = 1;
                            
                        } else {
                            buttonCortadorTipe.style.backgroundColor = "var(--child-color)";
                            cortadorTipe = 0;
                            
                        }
                        
                        
                    }} >Cortador</button>
                </article>
                
                <article style={{justifyContent: 'flex-end'}}>
                    <button id="button__cortador--tipe2" onClick={() =>{
                        const buttonCortadorTipe = document.getElementById("button__cortador--tipe2");
                        if (cortadorTipe === 0 || cortadorTipe === 1) {
                            buttonCortadorTipe.parentElement.previousElementSibling.firstChild.style.backgroundColor = 'var(--child-color)'
                            buttonCortadorTipe.style.backgroundColor = "var(--main-color)";
                            cortadorTipe = 2;
                            
                        } else {
                            buttonCortadorTipe.style.backgroundColor = "var(--child-color)";
                            cortadorTipe = 0;
                            
                        }
                    }} >Sacador</button>
                </article>
                
            </>
        )
    }
}
export const Fix = () =>{
    useEffect(() => {
        const menuShow = document.getElementById('menu__container--show')
        const menuButton = document.querySelector("#menu-button")
        const menuContainer = document.querySelector('.menu__container')

        /* buttonSave.addEventListener("click", () => {
            configurations.precioCortador = document.getElementById("Preciocortador").value
            console.log(configurations);
        }) */

        let buffer = true;
        menuButton.addEventListener('click', () => {
            if(buffer){
                menuShow.style.height = '100%';
                menuShow.style.width = '100%';
                menuShow.style.padding = '20px';
                
                menuContainer.style.zIndex = '3'
                document.querySelector(".menu__shadow").style.height = '100vh';
                document.querySelector(".menu__shadow").style.zIndex = '2'
                menuContainer.style.boxShadow = '0 0 5px var(--main-color), 0 0 10px var(--main-color), 0 0 15px var(--main-color)';
                menuContainer.style.marginTop = '0.5rem'
                buffer = false;
            } else {
                menuShow.style.height = '0px';
                menuShow.style.width = '0px';
                menuShow.style.padding = '0px';
                document.querySelector(".menu__shadow").style.height = '0px';
                menuContainer.style.boxShadow = '0 0 0'
                menuContainer.style.marginTop = '0'
                buffer = true;
            }
        })
    })
    return(
        <div>

        </div>
    )
}

let cortadorCount = 0;

export const fixCalcularConfirm = () => {
    document.getElementById("calcular-confirm").style.width = '93%';
    document.getElementById("calcular-confirm").style.padding = '10px'
}



