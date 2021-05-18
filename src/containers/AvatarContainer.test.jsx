import React, { useLayoutEffect } from 'react';
import AvatarContainer from './AvatarContainer';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('AvatarContainer', () => {
    it('renders the characters to the page', async () => {
        render(<MemoryRouter>
            <AvatarContainer/>
            </MemoryRouter>);

        screen.getByText('Loading');

        const ul = await screen.findByRole('list', { name: 'characters'})
        expect(ul).not.toBeEmptyDOMElement()

       
        
    });
});