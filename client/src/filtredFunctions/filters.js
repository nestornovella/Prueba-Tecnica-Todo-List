import { getData } from "../hooks/useApi";

const url = 'http://localhost:3001'

export const filterByPriority = async (priority)=>{

    const data = await getData(url)

    switch (priority) {
        case 'alta':
            return data.filter(e => e.prioridad == 'alta')
            
        case 'media':
            return data.filter(e => e.prioridad == 'media')

        
        case 'baja' :
            return data.filter(e => e.prioridad == 'baja')

    
        default:
            return data
    }

}



export const filterByState = async (priority)=>{

    const data = await getData(url)

    switch (priority) {
        case 'nueva':
            return data.filter(e => e.estado == 'nueva')
            
        case 'en proceso':
            return data.filter(e => e.estado == 'en proceso')

        
        case 'finalizada' :
            return data.filter(e => e.estado == 'finalizada')

    
        default:
            return data
    }

}