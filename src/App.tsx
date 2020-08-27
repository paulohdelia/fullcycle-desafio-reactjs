import React, { useState, useEffect } from 'react';

import api from 'axios';
import DisplayUser, { User } from './components/DisplayUser'

const App: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        api.get('https://reqres.in/api/users')
            .then(response => setUsers(response.data.data))
            .catch(err => console.error(err))
    }, []);

    return (
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {users.length === 0
                ? (<p>Loading...</p>)
                :
                (users.map((user: User) =>
                    <DisplayUser
                        key={user.id}
                        first_name={user.first_name}
                        last_name={user.last_name}
                        email={user.email}
                        avatar={user.avatar}
                    />
                ))
            }
        </ul>
    );
}

export default App;