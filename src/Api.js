import {useEffect} from 'react';

const album = "https://tiao.supliu.com.br/api/album";

export default {
	getAlbum: async() => {
		try {
			const response await axios.get(album);
			console.log(response)
		} catch (error) {
			console.log(error)
		}
	}
}