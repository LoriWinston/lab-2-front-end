import React, { component } from 'react';
import './Containers.css';

export default class DetailsPage extends Component {
    state = {
        characters: {},
        loading: true
    }

    async componentDidMount() {
        this.setState({ loading: true})
        const res = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${this.props.match.params.id}`);
        const detailAvatars = await res.json()
        
        this.setState({ 
            characters: detailAvatars,
            loading: false
        })
    }
    render() {
        const loading = this.state.loading
        return(
            <div> {
                loading ?
                <h1>Loading...</h1>
                :
                <div> 
                    <img src={this.state.characters.photoUrl}/>
                    <h2>{this.state.characters.name}</h2>
                    <p>Affiliation: {this.state.characters.affiliation}</p>
                </div>
                }
            </div>
        )
    }
}