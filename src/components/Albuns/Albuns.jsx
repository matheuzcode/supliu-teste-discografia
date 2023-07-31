import './Albuns.css'
import { TbPlaylistAdd } from 'react-icons/tb';
import { MdDelete } from 'react-icons/md';
import { TiDelete } from 'react-icons/ti';
import {useState} from 'react';

const Albuns = ({album, index}) => {
	const [addTrackModal, setAddTrackModal] = useState(false);

	const formatMinutes = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const minutesLeft = seconds % 60;

		if(minutesLeft < 10) {
			return minutes + " : " + 0 + minutesLeft;
		} else {
			return minutes + " : " + minutesLeft;
		}
		
	}
	return (
	
		<div className="album">
			<div className="albumTitle">
			{album.name}, {album.year}
			<TbPlaylistAdd className="addTrackIcon" onClick={() => setAddTrackModal(true)}/>
			<MdDelete className="deleteTrackIcon" onClick={() => window.confirm("Você realmente deseja apagar esse album?")}/>
			</div>
			<div className="addAlbumModal" style={addTrackModal ? {display: "flex"} : {display: "none"}}>
				<div className="closeButton" onClick={() => setAddTrackModal(false)}><TiDelete/></div>
				<input type="text" placeholder="Nome da faixa"/>
				<input type="number" placeholder="Duração"/>
				<button>Adicionar</button>
			</div>
			<div className="col-1">
				<div>Nº</div>
				<div>Faixa</div>
				<div>Duração</div>
			</div>
			
			{album.tracks.map(album => (
				<div className="col-2">
					<div className="trackNumber">{album.number}</div>
					<div className="trackName">{album.title}</div>
					<div className="trackDelete" onClick={() => window.confirm("Você realmente deseja apagar essa música?")}><MdDelete/></div>
					<div className="trackDuration">{formatMinutes(album.duration)}</div>
				</div>	
			))}
				
		</div>	
	)
}

export default Albuns;