// import logo from './logo.svg';
 import './App.css';
import {Row} from './Components/Row/Row';
import requests from './requests';
import {Nav} from './Components/Nav/Nav'
import Banner from './Components/Banner/Banner';
function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner/>
     <Row title="NETFLIX ORIGINALS" 
     fetchUrl={requests.fetchComedyMovies}
     isLargeRow={true}
     />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     

    </div>
  );
}

export default App;
