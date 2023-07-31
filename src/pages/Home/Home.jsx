import logo from '../../assets/logo.png';
import {useState} from 'react';
import Albuns from '../../components/Albuns/Albuns.jsx'
import { IoMdAddCircle } from 'react-icons/io';
import './Home.css';

const Home = () => {
	const [albumHover, setAlbumHover] = useState(false);

	const data = [
		{
			"name": "Rei do Gado",
			"year": "1991",
			"tracks": [
				{
				"number": "1",
				"title": "Borboleta",
				"duration": "36"
				},
				{
				"number": "2",
				"title": "Abelha",
				"duration": "42"
				},
				{
				"number": "3",
				"title": "Aranha",
				"duration": "23"
				},

			]
		},
		{
			"name": "Rei do Gado",
			"year": "1991",
			"tracks": [
				{
				"number": "1",
				"title": "Borboleta",
				"duration": "36"
				},
				{
				"number": "2",
				"title": "Abelha",
				"duration": "42"
				},
				{
				"number": "3",
				"title": "Aranha",
				"duration": "23"
				},

			]
		},
		

	]

	return (
	<>
		<div className="container">
		<div className="box">
			<div className="header">
				<img src={logo} alt="" />
				<div className="title">Discografia</div>
			</div>
			<div className="albumsSection">
				<div className="albumSearch">
					<div className="searchText">Digite uma palavra chave</div>
					<div className="inputArea">
						<input type="text"/>
						<button>Procurar</button>
					</div>
				</div>
				<div className="addPlaylistButton">
					<IoMdAddCircle />
				</div>
				{data.map(data => (
					<Albuns data={data}/>
				))}
				
			</div>
		</div>	
		</div>	
	</>	
	)
}

export default Home;