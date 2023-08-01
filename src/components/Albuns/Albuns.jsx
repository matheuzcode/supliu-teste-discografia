import './Albuns.css'
import { TbPlaylistAdd } from 'react-icons/tb';
import { MdDelete } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import Faixas from '../../components/Faixas/Faixas.jsx'
import Api from '../../Api.js'
import {useState} from 'react';

const Albuns = ({album, index, albumData, setAlbumData}) => {
	const [addTrackModal, setAddTrackModal] = useState(false);
	const [newTrackName, setNewTrackName] = useState('');
	const [newTrackDuration, setNewTrackDuration] = useState('');
	const [nextTrackNumber, setNextTrackNumber] = useState(1);

	const findNextTrackNumber = (tracks) => {
	  if (tracks.length > 0) {
	    const maxTrackNumber = Math.max(...tracks.map((track) => track.number));
	    return maxTrackNumber + 1;
	  } else {
	    return 1;
	  }
	};

	const addNewTrack = async () => {
	    try {
	      const newTrackData = {
	        number: findNextTrackNumber(album.tracks), 
	        title: newTrackName, 
	        duration: newTrackDuration,
	      };
	      
	    const response = await Api.newTrack(
	    	album.id, 
	    	newTrackData.number, 
	    	newTrackData.title, 
	    	newTrackData.duration
	    );
	      
	    setAlbumData((prevAlbumData) =>
	    prevAlbumData.map((prevAlbum) =>
	        prevAlbum.id === album.id
	          ? { ...prevAlbum, tracks: [...prevAlbum.tracks, response] }
	          : prevAlbum
	      )
	    );

	    setNextTrackNumber((prevNumber) => prevNumber + 1);

	    setNewTrackName('');
	    setNewTrackDuration('');
		setAddTrackModal(false);

	    } catch (error) {
	      console.error(error.message);
	    }
  	};

	const deleteAlbumId = () => {
		let confirmation = window.confirm("Você tem certeza que deseja excluir esse album ?")
		if(confirmation){
			Api.deleteAlbum(album.id, setAlbumData);
		}
	}

	return (
	
		<div className="album">
			<div className="albumTitle">
			{album.name}, {album.year}
			<TbPlaylistAdd className="addTrackIcon" onClick={() => setAddTrackModal(true)}/>
			<MdDelete className="deleteAlbumIcon" onClick={() => deleteAlbumId()}/>
			</div>
			<div className="addTrackModal" style={addTrackModal ? {display: "flex"} : {display: "none"}}>
				<div className="closeButton" onClick={() => setAddTrackModal(false)}><TiDelete/></div>
				<input type="text" placeholder="Nome da faixa" value={newTrackName} onChange={(e) => setNewTrackName(e.target.value)}/>
				<input type="number" placeholder="Duração/Segundos" value={newTrackDuration} onChange={(e) => setNewTrackDuration(e.target.value)}/>
				<button onClick={addNewTrack}>Adicionar</button>
			</div>
			<div className="col-1">
				<div>Nº</div>
				<div>Faixa</div>
				<div>Duração</div>
			</div>
			
			{album?.tracks?.map((faixa, index) => (
				<Faixas faixa={faixa} key={index} setAlbumData={setAlbumData}/>	
			))}
				
		</div>	
	)
}

export default Albuns;