import axios from 'axios'

const url = 'http://localhost:3001'



export async function getData (){

    const response = await axios.get(url)
    return response.data.todos

}


export async function refresh (){
    const data = await getData()
    return data
}


export async function update(object){
    return await axios.put(url, object)
}

export async function deleteTodo (id, all=false){
    return await axios.delete(`${url}/?id=${id}&all=${all}` )
}

export async function deleteTodoCard (id){
    return await axios.delete(`${url}/?id=${id}` )
}

export async function createTodo (todo){
    const response = await axios.post(url, todo)
    console.log(response)
    return response
}
 