import React, {useState} from 'react';
import {SafeAreaView, Text, Image, FlatList, StyleSheet, View} from 'react-native';

const App = () => {
  const logo = 'https://uptime.com/media/website_profiles/cuevana3.co.png';
  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg',
    },
    {
      id: 2,
      name: 'Cars',
      director: 'Disney',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Marvel',
      url: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 4,
      name: 'El Laberinto del Fauno',
      director: 'Guillermo del Toro',
      url: 'https://pics.filmaffinity.com/El_laberinto_del_fauno-222302534-large.jpg',
    },
    {
      id: 5,
      name: 'Interstellar',
      director: 'Christopher Nolan',
      url: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 6,
      name: 'El Señor de los Anillos: la Comunidad del Anillo',
      director: 'Guillermo del Toro',
      url: 'https://m.media-amazon.com/images/M/MV5BMmM2M2MwOTYtNzVhMi00MWU0LThmZjEtNGZiNTc0YjY3ODQ0XkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg',
    },
    {
      id: 7,
      name: 'Godzilla Minus One',
      director: 'Takashi Yamazaki',
      url: 'https://m.media-amazon.com/images/M/MV5BOTI5MjNjMTMtN2NiNC00YjBlLTgzMWQtMGRhZDZkYmY1NGU2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
    },
    {
      id: 8,
      name: 'Cinema Paradiso',
      director: 'Giuseppe Tornatore',
      url: 'https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 9,
      name: 'Shrek 2',
      director: 'Andrew Adamson, Kelly Asbury y Conrad Vernon',
      url: 'https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 10,
      name: 'Pollitos en Fuga',
      director: 'Peter Lord y Nick Park',
      url: 'https://m.media-amazon.com/images/M/MV5BNDgxNjZlZDYtZGJmZC00Mjg0LWEwYzctYWQ0MWFjNTM3ZmM4XkEyXkFqcGdeQXVyNTM5NzI0NDY@._V1_FMjpg_UX1000_.jpg',
    },
  ];

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.titleBar}>
        <Image 
          source={{uri: logo,}} 
        />
        <Text style={styles.title}>Cuevana</Text>
      </View>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
         <>
          <Image
            style={styles.image}
            source={{
              uri: item.url,
            }}
          />
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textDirector}>{item.director}</Text></>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 300,
    alignSelf: 'center', 
    marginTop: 15, 
    marginBottom: 15,
  },
  textDirector:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textName:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatListContainer:{
    flex: 1,
    marginTop: 15,
    marginBottom: 15, 
  },
  titleBar : {
    backgroundColor : '#6C92E6',
    width : '100%',
    padding : '8%',
    textAlign : 'center',
  }
});

export default App;