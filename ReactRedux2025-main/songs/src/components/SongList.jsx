import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList(){
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        //this.props === { songs: state.songs }
        return <div className="ui divded list">{this.renderList()}</div>
    }
}

//By convention, hedder denne funktion altid mapStateToProps.
//Det er denne funktion der mapper state fra redux store til de props
//komponenten skal bruge, her blot songs.
//Bemærk songs kommer fra vores combineReducers, hvor songs har værdien af songReducer
//der er den funktion der returnere vores array af sange

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

//Dette er standard metoden til at hente data fra vores redux store til komponenten

export default connect(mapStateToProps, {selectSong})(SongList);