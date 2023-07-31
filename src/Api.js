export default {

getAlbum: async (Albuns) => {
  const url = 'https://tiao.supliu.com.br/api/album';
  const headers = {
    'Authorization': 'matheusmonteiro.developer@gmail.com'
  };

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    });

    if (!response.ok) {
      throw new Error('Erro na requisição. Status: ' + response.status);
    }

    const data = await response.json();
    const Albuns = data.data;
    return Albuns
  } catch (error) {
    console.error('Erro na requisição:', error.message);
  }
},
postAlbum: async() => {
	
}

}
