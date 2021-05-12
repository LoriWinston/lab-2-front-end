import React from 'react';
import AvatarContainer, { render, screen } from './AvatarContainer';

describe('AvatarContainer', () => {
    it('renders the characters to the page', async () => {
        render(<AvatarContainer />);

        screen.getByText('Loading');

        const ul = await screen.findByRole('list', { name: 'avatars'})
        expect(ul).toMatchInlineSnapshot();
    });
});