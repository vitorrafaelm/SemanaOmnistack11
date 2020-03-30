import React, { useEffect, useState } from 'react'; 
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api';

import './style.css';
import logoImg from '../../assets/logo.svg'

export default function Profile(){
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    const OngName = localStorage.getItem('ongName'); 
    const ongId = localStorage.getItem('ongId'); 

    //O use effect recebe dois parametros, uma função para ser 
    //executada quando o valor mudar e o valor que será mudado
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId, 
            }        
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId])
    //S e o array ficar vazio será executado uma única vez no fluxo da aplicação

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incident/${id}`, {
                headers: {
                    Authorization: ongId
,                }
            }); 

            setIncidents(incidents.filter(incident => incident.id !== id));

        }catch(err){
            alert('Erro ao deletar caso, tente novamente.')
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {OngName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                    <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))}
            </ul>

        </div>
    );
}