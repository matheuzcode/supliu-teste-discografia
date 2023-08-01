import { MdDelete } from 'react-icons/md';
import './Faixas.css';

const Faixas = ({faixa, index}) => {

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
		<div className="col-2">
			<div className="trackNumber">{faixa.number}</div>
			<div className="trackName">{faixa.title}</div>
			<div className="trackDelete" onClick={() => window.confirm("Você realmente deseja apagar essa música?")}><MdDelete/></div>
			<div className="trackDuration">{formatMinutes(faixa.duration)}</div>
		</div>	
	)

}

export default Faixas;