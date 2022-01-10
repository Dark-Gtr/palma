import axios from 'axios'

export const getCortadores = async() => {
    return await axios.get('http://10.5.50.7:4000/cortadores')
    
}

export const getRegistro = async() => {
    return await axios.get('registros')
}

