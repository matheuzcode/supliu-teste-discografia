import logo from '../../assets/logo.png';
import {useState, useEffect} from 'react';
import Albuns from '../../components/Albuns/Albuns.jsx'
import { IoMdAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';
import Api from '../../Api.js'
import './Home.css';

const Home = () => {
	
	const [albumHover, setAlbumHover] = useState(false);
	const [addAlbumModal, setAddAlbumModal] = useState(false);
	const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        const albumData = await Api.getAlbum();
        setAlbumData(albumData);
        console.log(albumData)
      } catch (error) {
        // Tratar erro, se necessário
        console.error(error.message);
      }
    }

    fetchAlbumData();
  }, []);

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
				{albumData.map((item, index) => (
					<Albuns album={item} key={index}/>
				))}
				
			</div>
		</div>	
		</div>	
	</>	
	)
}

export default Home;