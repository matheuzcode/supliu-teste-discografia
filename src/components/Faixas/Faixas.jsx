import { MdDelete } from 'react-icons/md';
import Api from '../../Api.js'
import './Faixas.css';

const Faixas = ({faixa, index, setAlbumData}) => {

	const formatMinutes = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const minutesLeft = seconds % 60;

		if(minutesLeft < 10) {
			return minutes + " : " + 0 + minutesLeft;
		} else {
			return minutes + " : " + minutesLeft;
		}
		
	}

	const deleteTrackId = () => {
		let confirmation = window.confirm("Você tem certeza que deseja excluir essa faixa?")
		if(confirmation){
			Api.deleteTrack(faixa.id, setAlbumData);
		}
	}
	
	return (
		<div className="col-2">
			<div className="trackNumber">{faixa.number}</div>
			<div className="trackName">{faixa.title}</div>
			<div className="trackDelete" onClick={deleteTrackId}><MdDelete/></div>
			<div className="trackDuration">{formatMinutes(faixa.duration)}</div>
		</div>	
	)

}

export default Faixas;