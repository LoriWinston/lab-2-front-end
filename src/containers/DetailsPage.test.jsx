import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailsPage from './DetailsPage';
import { MemoryRouter } from 'react-router'

describe('DetailsPage', () => { 
    it('renders a character to the page', async () => { 
        render(<MemoryRouter> <DetailsPage /> </MemoryRouter>);
        
    const ul = await screen.findByRole( );
    expect(ul).not.toBeEmptyDOMElement();
    });
});