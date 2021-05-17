import React, { Component } from 'react';
import { findCharacters } from '../services/avatarApi';
import CharacterList from  '../components/characters/CharacterList';
import './Container.css';

export default class AvatarContainer extends Component {
    state = {
        loading: true,
        characters: []
    }

    async componentDidMount() {
        const theAvatars = await findCharacters();

        this.setState({
            characters: theAvatars,
            loading: false
        });
    }
    render() {
        const { loading } = this.state;
        if (loading) return <h1>Loading</h1> 
        return (
            <div>
                <CharacterList
                characters={this.state.characters}
                loading={this.state.loading} />
            </div>
        )
    }
}

