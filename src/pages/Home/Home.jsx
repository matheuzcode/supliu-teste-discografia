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
	const [newAlbumName, setNewAlbumName] = useState('');
  	const [newAlbumYear, setNewAlbumYear] = useState('');
  	const [searchTermTemp, setSearchTermTemp] = useState('');
  	const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        const albumData = await Api.getAlbum();
        setAlbumData(albumData);
      } catch (error) {
        // Tratar erro, se necessário
        console.error(error.message);
      }
    }
	
	fetchAlbumData();
  }, []);

  async function postAlbumData() {
    try {
      const newAlbum = await Api.postAlbum({ name: newAlbumName, year: newAlbumYear });
      setAlbumData([...albumData, newAlbum]);
      setNewAlbumName(''); // Limpa o campo do nome do álbum após adicionar
      setNewAlbumYear(''); // Limpa o campo do ano do álbum após adicionar
      setAddAlbumModal(false); // Fecha o modal de adição de álbum após adicionar
    } catch (error) {
      console.error(error.message);
    }
  }

	const filterAlbumsAndTracks = (albums, searchTerm) => {
	    return albums.filter((album) => {
	      // Filtra os álbuns
	      const albumMatches = album.name.toLowerCase().includes(searchTerm.toLowerCase());

	      // Filtra as faixas
	      const tracksMatches = album.tracks && album.tracks.some((track) =>
	        track.title.toLowerCase().includes(searchTerm.toLowerCase())
	      );

	      return albumMatches || tracksMatches;
	    });
	};

	const handleSearchClick = () => {
    	setSearchTerm(searchTermTemp); 
  	};

	const filteredAlbumData = filterAlbumsAndTracks(albumData, searchTerm);

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
						<input type="text" value={searchTermTemp} onChange={(e) => setSearchTermTemp(e.target.value)}
                  			placeholder="Pesquisar álbuns e faixas..." />
						<button onClick={handleSearchClick}>Procurar</button>
					</div>
				</div>
				<div className="addAlbumModal" style={addAlbumModal ? {display: "flex"} : {display: "none"}}>
					<div className="closeButton" onClick={() => setAddAlbumModal(false)}><TiDelete/></div>
					<input type="text" placeholder="Nome do album" value={newAlbumName} onChange={(e) => setNewAlbumName(e.target.value)}/>
					<input type="number" placeholder="Ano do album" value={newAlbumYear} onChange={(e) => setNewAlbumYear(e.target.value)}/>
					<button onClick={postAlbumData}>Adicionar</button>
				</div>
				<div className="addPlaylistButton" onClick={() => setAddAlbumModal(true)}>
					<IoMdAddCircle />
				</div>
				{filteredAlbumData  ? (
			      filteredAlbumData.map((item, index) => (
			        <Albuns album={item} key={index} albumData={albumData} setAlbumData={setAlbumData}/>
			      ))
			    ) : (
			      <div>Carregando...</div>
			    )}				
			</div>
		</div>	
		</div>	
	</>	
	)
}

export default Home;