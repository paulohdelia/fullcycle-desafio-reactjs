import React, { useState, useEffect } from 'react';
import api from 'axios';

import DisplayUser, { User } from '../../components/DisplayUser'
import Button from '../../components/Button';

import Lottie from 'react-lottie';
import animationData from '../../lotties/loading_animation.json';

const UserList: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // I just want to show the cool animation
        setTimeout(() => {
            api.get('https://reqres.in/api/users')
                .then(response => setUsers(response.data.data))
                .catch(err => console.error(err))
        }, 2000)
    }, []);

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ul>
                {users.length === 0
                    ?
                    (<div>
                        <Lottie
                            options={lottieOptions}
                            height={50}
                            width={50}
                        />
                    </div>)
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
            {users.length !== 0 && (
                <Button linkTo="/" fontSize="32px" title="Home" marginBottom="16px" />
            )}

        </main>
    );
}

export default UserList;