import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsPage from './DetailsPage';


describe('DetailsPage', () => { 
    it('renders a character to the page', async () => { 
        render( <DetailsPage match={{ params: { id: '5cf5679a915ecad153ab68c8' } }} /> );
        
    const name = await screen.findByText( '46th Earth King' );
    expect(name).not.toBeEmptyDOMElement();
    });
});

