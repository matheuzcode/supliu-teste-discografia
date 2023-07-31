import './Albuns.css'
import { TbPlaylistAdd } from 'react-icons/tb';
import { MdDelete } from 'react-icons/md';
import {useState} from 'react';

const Albuns = ({data}) => {
	

	return (
	
		<div className="album">
			<div className="albumTitle">
			{data.name}
			<TbPlaylistAdd className="addTrackIcon"/>
			<MdDelete className="deleteTrackIcon"/>
			</div>
			
			<div className="col-1">
				<div>Nº</div>
				<div>Faixa</div>
				<div>Duração</div>
			</div>
			
			{data.tracks.map(data => (
				<div className="col-2">
					<div className="trackNumber">{data.number}</div>
					<div className="trackName">{data.title}</div>
					<div className="trackDelete" onClick={() => window.confirm("Você realmente deseja apagar essa música?")}><MdDelete/></div>
					<div className="trackDuration">{data.duration}</div>
				</div>	
			))}
				
		</div>	
	)
}

export default Albuns;