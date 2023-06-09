import { getData } from "../hooks/useApi";



export const filterByPriority = async (priority)=>{

    const data = await getData()

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

    const data = await getData()

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



export const searchTodo = async (input)=>{

    const data = await getData()

    const serchedData = data.filter(todo => todo.nombre.toLowerCase().includes(input.toLowerCase()))
    
    return serchedData
}