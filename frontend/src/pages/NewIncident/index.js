import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

//Importing the file to connect with the backend.
import api from '../../services/api'

/*Assets*/
import './styles.css';
import logoImg from '../../assets/logo.svg';

function NewIncident()
{
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');

	const history = useHistory();

	//Getting the ong id from the local storage.
	const ongId = localStorage.getItem('ongId');

	/**Called when the user submits a new incident form.*/
	async function handleNewIncident(e)
	{
		e.preventDefault();

		const data =
		{
			title,
			description,
			value,
		};

		try
		{
			await api.post('incidents', data, {
				headers: {
					Authorization: ongId,
				}
			});

			history.push('/profile');
		}
		catch (error)
		{
			alert('Erro ao tentar cadastrar o caso, tente novamente.');
		}
	}

	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero"/>
					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva o caso detalhadamente para
						encontrar um herói para te ajudar.
					</p>

					<Link to="/profile" className="back-link">
						<FiArrowLeft size={16} color="#E02041" />
						Voltar para home
					</Link>
				</section>
				<form onSubmit={handleNewIncident}>
					<input
						placeholder="Título do caso"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>

					<textarea
						placeholder="Descrição"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>

					<input
						placeholder="Valor em reais"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}

export default NewIncident;