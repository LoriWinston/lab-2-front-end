import React, { Component } from 'react';
import { findCharacters } from '../services/avatarApi';
import CharacterList from  '../components/characters/CharacterList';
import './Character.css';

export default class AvatarContainer extends Component {
    state = {
        loading: true,
        characters: []
    }

    async componentDidMount() {
        const theAvatars = await findCharacters();

        this.setState({loading:true})
        this.setState({
            characters: theAvatars,
            loading: false
        });
    }
    render() {
        return (
            <div>
                <AvatarList
                characters={this.state.characters}
                loading={this.state.loading} />
            </div>
        )
    }
}

