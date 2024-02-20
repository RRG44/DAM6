import React, {useState} from 'react';
import {SafeAreaView, Text, Image, FlatList, StyleSheet, View, Button} from 'react-native';

const App = () => {
  let logo = 'https://pbs.twimg.com/profile_images/1593485576585744384/WdOWaK0M_200x200.png';
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
      director: 'Brian Fee y John Lasseter',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Joss Whedon',
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
          style={styles.logo}
          source={{uri: logo,}} 
        />
        <Text style={styles.title}>cuevana</Text>
      </View>
      <FlatList
        horizontal={true}
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.image}
              source={{
                uri: item.url,
              }}
            />
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textDirector}>por {item.director}</Text>
            <Button title='Watch now ▶️'/> 
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    marginTop: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
  image: {
    width: 310,
    height: 460,
    alignSelf: 'center', 
    marginBottom: 15,
  },
  textDirector:{
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    color: '#fff',
    margin: 10,
    marginBottom: 20,
  },
  textName:{
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: '#fff',
  },
  flatListContainer:{
    flex: 1,
    backgroundColor : '#3F5573',
    padding: 20,
    margin:0,
    paddingLeft: 10,
  },
  titleBar : {
    backgroundColor : '#222F40',
    width : '100%',
    padding : '5%',
    textAlign : 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  logo : 
  {
    width: 30,
    height : 30,
    margin: 10,
  },
  movieContainer : 
  {
    flex : 1,
    backgroundColor: '#00000035',
    width: 335,
    alignItems: 'center',
    margin: 10,
    padding: 20,
    borderRadius:10,
    marginHorizontal: 20,
    marginLeft: 0,
  },
});

export default App;