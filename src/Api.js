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
postAlbum: async(newAlbumData) => {
const url = 'https://tiao.supliu.com.br/api/album';
  const headers = {
    'Authorization': 'matheusmonteiro.developer@gmail.com',
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify(newAlbumData); // Usar os dados do novo álbum recebidos como parâmetro

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    });

    if (!response.ok) {
      throw new Error('Erro na requisição. Status: ' + response.status);
    }

    const data = await response.json();
    console.log('Resposta da API:', data);
    return data; // Retornar a resposta da API, se necessário
  } catch (error) {
    console.error('Erro na requisição:', error.message);
    throw error; // Lançar o erro novamente, para que a chamada do componente possa tratá-lo, se necessário
  }

}
}

