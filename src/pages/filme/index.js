import {useEffect, useState} from 'react';
import { useParams,useNavigate, json } from 'react-router-dom';
import api from '../../services/api';
import './filme-info.css'
import { toast} from 'react-toastify';
function Filme(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading]= useState(true)
    useEffect(()=>{
        async function loadFilmes() {
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "4145ed5bdeb2152e38485981921c61aa",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);

            })
            .catch(()=>{
                navigate("/",{replace: true})
                return

            })
        }

        loadFilmes()

        return()=>{

        }

    },[navigate,id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix")
        
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some( (filmesSalvos)=>filmesSalvos.id === filme.id)

        if(hasFilme){
            toast.warn(" Esse filme ja está salvo")
            
            return;
        }
        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix",JSON.stringify(filmesSalvos))
        toast.success("O filme foi salvo")
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1> Carregando detalhes...
                </h1>
            </div>
        )
    }



    return(
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}></img>

            

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

           <strong>Avaliacão:</strong>
           <span>{filme.vote_average}/10</span>

           <div className='area-buttons'>
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
            </button>
           </div>
        </div>
    )
}

export default Filme