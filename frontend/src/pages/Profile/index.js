import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

/*Assets*/
import './styles.css'
import logoImg from '../../assets/logo.svg';

//Importing the file to connect with the backend.
import api from '../../services/api'

/*Power icon from feather icons.*/
import { FiPower, FiTrash2 } from 'react-icons/fi'

function Profile()
{
	const [incidents, setIncidents] = useState([]);

	const history = useHistory();

	//Getting the ong name and id from the local storage.
	const ongName = localStorage.getItem('ongName');
	const ongId = localStorage.getItem('ongId');

	useEffect(() => {
		api.get('profile', {
			headers: {
				Authorization: ongId,
			}
		}).then(response =>{
			setIncidents(response.data);
		})
	}, [ongId]);

	//Called when the user clicks the trash can button.
	async function handleDeleteIncident(id)
	{
		try
		{
			await api.delete(`incidents/${id}`, {
				headers: {
					Authorization: ongId,
				}
			});

			setIncidents(incidents.filter(incident => incident.id !== id));
		}
		catch(error)
		{
			alert('Erro ao deletar, tente novamente.');
		}
	}

	//Called when the user clicks the logout button.
	function handleLogout()
	{
		//Cleaning local storage.
		localStorage.clear();

		//Redirecting the user to homepage.
		history.push('/')
	}

	return (
		<div className="profile-container">
			<header>
				<img src={logoImg} alt="Be The Hero"></img>
				<span>Bem vinda, { ongName }</span>

				<Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
				<button type="button" onClick={ handleLogout }>
					<FiPower size={18} color="#E02041" />
				</button>
			</header>
			<h1>Casos cadastrados</h1>
			<ul>
				{incidents.map(incident => (
					<li key={ incident.id }>
						<strong>CASO:</strong>
						<p>{ incident.title }</p>

						<strong>DESCRIÇÃO:</strong>
						<p>{ incident.description }</p>

						<strong>VALOR:</strong>
						<p>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value) }</p>

						<button type="button" onClick={() => handleDeleteIncident(incident.id) }>
							<FiTrash2 size={20} color="#A8A8B3"/>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Profile;