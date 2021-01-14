import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import './modal.css';

Modal.setAppElement("#app");

const Movies = () => {
  const [movies, setMovies] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const [messageUrl,setMessageUrl] = useState("");
  const [messageNaslov,setMessageNaslov] = useState("");
  const [messagePodnaslov,setMessagePodnaslov] =  useState("");
  const [messageOpis,setMessageOpis] =useState("");
 
 
  //za formu
  const [urlSlike,setUrlSlike] = useState();
  const [naslov, setNaslov] = useState();
  const [podnaslov,setPodnaslov] = useState();
  const [opis,setOpis] = useState();



  function deleteElement (id) {
   
    if(id>500) {
      const newList = movies.filter((item) => item.id !== id);
      setMovies(newList);
    }
    }
  
  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

   function toggleModal() {
    setIsOpen(!isOpen);
  }

  function handleChangeUrl(event) {
    setUrlSlike(event.target.value);
    if(urlSlike==null){
      setMessageUrl("Polje ne smije biti prazno.");
    }
    else {
      setMessageUrl("");
    }
  }

  function handleChangeNaslov(event) {
    setNaslov(event.target.value);
    if(naslov==null) {
      setMessageNaslov("Polje ne smije biti prazno.");
    }
    else {
      setMessageNaslov("");
    }
  }
  function handleChangePodnaslov(event) {
    setPodnaslov(event.target.value);
    if(podnaslov==null) {
      setMessagePodnaslov("Polje ne smije biti prazno.");
    }
    else {
      setMessagePodnaslov("");
    }
  }

  function handleChangeOpis(event) {
    setOpis(event.target.value);
    if (opis==null) {
      setMessageOpis("Polje ne smije biti prazno.");
    }
    else {
      setMessageOpis("");
    }
  }

  function sacuvajFilm() {
    
    if(urlSlike!= null && naslov!=null && podnaslov!=null && opis!=null){
    var id_new = movies[movies.length-1].id + 100;
    movies.push({id:id_new,title: naslov, subtitle: podnaslov,description: opis,imageUrl: urlSlike});
   
    setIsOpen(!isOpen);
  
    setOpis(''); setPodnaslov(''); setNaslov(''); setUrlSlike('');
    } 
  }

  
  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <button className="button" onClick={toggleModal}>Dodaj Film</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Kreiraj film"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
        >
          
        <div>
       
            <table>
              <tbody>
              <tr><td><input type="text" value={urlSlike} onChange={handleChangeUrl} className="form-control" placeholder="Url slike"></input></td></tr>
              <tr><td><div id="urlSlike">{messageUrl}</div></td></tr>
              <tr><td><input type="text"  value={naslov}  onChange={handleChangeNaslov} className="form-control"  placeholder="Naslov"></input></td></tr>
              <tr><td><div id="naslov">{messageNaslov}</div></td></tr>
              <tr><td> <input type="text" value={podnaslov} onChange={handleChangePodnaslov} className="form-control"  placeholder="Podnaslov"></input></td></tr>
              <tr><td><div id="podnaslov">{messagePodnaslov}</div></td></tr>
              <tr><td> <textarea value={opis} onChange={handleChangeOpis} placeholder="Opis"></textarea></td></tr>
              <tr><td><div id="opis">{messageOpis}</div></td></tr>
              </tbody>
            </table>
            <button  onClick={sacuvajFilm}>Sacuvaj</button>
       
        </div>
       
      </Modal>

      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} handleDelete= {deleteElement} />
        </div>
      </div>
    </div>
  );
}

export default Movies;


