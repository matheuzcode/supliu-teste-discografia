import logo from '../../assets/logo.png';
import {useState} from 'react';
import Albuns from '../../components/Albuns/Albuns.jsx'
import { IoMdAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';
import './Home.css';

const Home = () => {
	const [albumHover, setAlbumHover] = useState(false);
	const [addAlbumModal, setAddAlbumModal] = useState(false);

	const data = [
		{
			"name": "Rei do Gado",
			"year": "1991",
			"tracks": [
				{
				"number": "1",
				"title": "Borboleta",
				"duration": "120"
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
				<div className="addAlbumModal" style={addAlbumModal ? {display: "flex"} : {display: "none"}}>
					<div className="closeButton" onClick={() => setAddAlbumModal(false)}><TiDelete/></div>
					<input type="text" placeholder="Nome do album"/>
					<input type="number" placeholder="Ano do album"/>
					<button>Adicionar</button>
				</div>
				<div className="addPlaylistButton" onClick={() => setAddAlbumModal(true)}>
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