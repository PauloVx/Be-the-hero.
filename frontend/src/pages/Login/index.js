import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';

/*Styles*/
import './styles.css'

//Importing the file to connect with the backend.
import api from '../../services/api'

/*Assets*/
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

/*Login icon from feather icons.*/
import { FiLogIn } from 'react-icons/fi'

function Login()
{
	const [id, setId] = useState('');
	const history = useHistory();

	async function handleLogin(e)
	{
		e.preventDefault();

		try
		{
			const response = await api.post('sessions', { id });

			//Storing the ong id and name inside local storage.
			localStorage.setItem('ongId', id);
			localStorage.setItem('ongName', response.data.name);

			//Redirecting to profile page.
			history.push('/profile');
		}
		catch(error)
		{
			alert('Id inválido, tente novamente.');
		}
	}

	return (
		<div className="login-container">
			<section className="form">
				<img src={logoImg} alt="Be The Hero"/>

				<form onSubmit={ handleLogin }>
					<h1>Faça seu login</h1>
					<input
						placeholder="Sua ID"
						value={id}
						onChange={e => setId(e.target.value)}
					/>
					<button type="submit" className="button">Entrar</button>

					<Link to="/register" className="back-link">
						<FiLogIn size={16} color="#E02041" />
						Não tenho cadastro
					</Link>
				</form>
			</section>

			<img src={heroesImg} alt="Heroes"/>
		</div>
	);
}

export default Login;
