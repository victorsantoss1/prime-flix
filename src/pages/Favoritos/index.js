import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./favoritos.css"
import { toast } from "react-toastify"


function Favoritos(){
    const [filmes, setFilme]= useState([])
    useEffect( ()=>{
        const minhaLista= localStorage.getItem("@primeflix")
        setFilme(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item)=>{
            return(item.id !== id)
        })

        setFilme(filtroFilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido")

    }


    return(
        <div className="meus-filmes">
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <span> Não possui nenhum filme salvo</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`} >Ver detalhes</Link>
                                <button onClick={ ()=>excluirFilme(item.id)}>Excluir</button>

                            </div>

                        </li>
                    )
                })}
            </ul>

        </div>
    )
}

export default Favoritos