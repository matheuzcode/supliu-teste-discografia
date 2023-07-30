import logo from '../../assets/logo.png';
import Albuns from '../../components/Albuns/Albuns.jsx'
import './Home.css';

const Home = () => {
	return (
	<>
		<div className="container">
		<div className="box">
			<div className="navBar">
				<img src={logo} alt="" />
				<div className="title">Discografia</div>
			</div>
			<div className="albumsSection">
				<div className="AlbumSearch">
					<div className="searchText">Digite uma palavra chave</div>
					<div className="inputArea">
						<input type="text"/>
						<button>Procurar</button>
					</div>
				</div>
				<div className="Albums">
					<Albuns/>
				</div>	
			</div>
		</div>	
		</div>	
	</>	
	)
}

export default Home;