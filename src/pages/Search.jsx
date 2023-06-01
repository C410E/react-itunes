import React, { Component } from "react";
import AlbumCard from "../components/AlbumCard";
import searchAlbumAPI from "../services/SearchAlbumAPI";
import "../styles/Search.css"


class Search extends Component {
  constructor() {
    super();

    this.state = {
      artist: '',
      isLoading: false,
      request: {},
      requestDone: false,
      artistSearched: '',
    };
  }

  onArtistInputChange = (event) => {
    this.setState({ artist: event.target.value });
  };

  onSearchButtonClick = async () => {
    const { artist } = this.state;
    this.setState({ isLoading: true, artistSearched: artist, artist: '' });
    
    const request = await searchAlbumAPI(artist);

    this.setState({
      isLoading: false,
      request,
      requestDone: true,
    });
  };
  
  render() {
    const { isLoading, request, requestDone, artist, artistSearched } = this.state;
    //const isLoginButtonDisabled = artist.length < 2;
    
    if (isLoading) {
      return (
        <div className="page-search">
          
          <div className="page-search-loading">
            <h1 className="search-section-name">Search</h1>
          
          </div>
        </div>
      );
    } if (requestDone) {
      return (
        <div className="page-search">
         
          <div className="main-content-search">
            <h1 className="search-section-name">Pesquise seus artistas favoritos</h1>

            <div className="form-div">
              <form className="form-search">
                <input
                  className="input-artist-after"
                  placeholder="insert artist/band"
                  type="text"
                  value={ artist }
                  onChange={ this.onArtistInputChange }
                />
                <button
                  className="button-search"
                  type="submit"
                 
                  onClick={ this.onSearchButtonClick }
                >
                  Search
                </button>
              </form>
            </div>

            <div className="results-text-div">
              <h3 className="results-text">
                {artistSearched}
                {' '}
                album results
              </h3>
            </div>

            <div className="albums">
              {request.length === 0 ? <h1 className="no-album">no album was found</h1>
                : request.map((album, index) => (
                  <AlbumCard
                    
                    imgUrl={ album.artworkUrl100 }
                    artistName={ album.artistName }
                    collectionName={ album.collectionName }
                    collectionId={ album.collectionId }
                    key={ index }
                  />
                ))}
            </div>

          </div>
        </div>
      );
    } return (
      <div className="page-search">
      
        <div className="main-content-search">
          <h1 className="search-section-name">Pesquise seus artistas favoritos</h1>
          <div>
            <form className="form-search">
              <input
                className="input-artist"
                placeholder="insert artist/band"
                type="text"
                id="artist"
                name="artist"
                value={ artist }
                onChange={ this.onArtistInputChange }
              />
              <button
                type="submit"
                className="button-search"
                
                onClick={ this.onSearchButtonClick }
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;