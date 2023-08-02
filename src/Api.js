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
  const body = JSON.stringify(newAlbumData);

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
   
    return data; 
  } catch (error) {
    console.error('Erro na requisição:', error.message);
    throw error; 
  }

},

deleteAlbum: async(albumId, setAlbumData) => {
  const url = `https://tiao.supliu.com.br/api/album/${albumId}`;
  const headers = {
    'Authorization': 'matheusmonteiro.developer@gmail.com',
    'Content-Type': 'application/json'
  };

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers
    });

    if (!response.ok) {
      throw new Error('Erro na requisição. Status: ' + response.status);
    }

    setAlbumData(prevAlbumData => prevAlbumData.filter(album => album.id !== albumId));

  } catch (error) {
    console.error('Erro na requisição:', error.message);
  }
},

newTrack: async(album_id, number, title, duration) => {
  const url = 'https://tiao.supliu.com.br/api/track';
  const headers = {
    'Authorization': 'matheusmonteiro.developer@gmail.com',
    'Content-Type': 'application/json'
  };
  const body = JSON.stringify({
    album_id: album_id,
    number: number,
    title: title,
    duration: duration
  });

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
    console.log('Nova faixa de música adicionada:', data);
    return data; 
  } catch (error) {
    console.error('Erro na requisição:', error.message);
    throw error; 
  }
},

deleteTrack: async(trackId, setAlbumData) => {
  const url = `https://tiao.supliu.com.br/api/track/${trackId}`;
  const headers = {
    'Authorization': 'matheusmonteiro.developer@gmail.com',
    'Content-Type': 'application/json'
  };

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers
    });

    if (!response.ok) {
      throw new Error('Erro na requisição. Status: ' + response.status);
    }

    setAlbumData(prevAlbumData =>
      prevAlbumData.map(album => ({
        ...album,
        tracks: album.tracks.filter(track => track.id !== trackId)
      }))
    );

  } catch (error) {
    console.error('Erro na requisição:', error.message);
  }
},

}

