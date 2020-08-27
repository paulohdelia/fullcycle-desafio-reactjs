import React from 'react';

import Button from '../../components/Button';

const Home = () => {
    return (
        <main style={{
            display: 'flex',
            height: '100vh',
            width: '100vw',
            margin: 0,
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#111111',
        }}>
            <Button linkTo="/users" fontSize="52px" title="List users" />
        </main>
    )
}

export default Home;