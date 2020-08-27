import React from 'react';

export interface User {
    id?: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}

const DisplayUser: React.FC<User> = (props) => {
    const { avatar, email, first_name, last_name } = props;
    return (
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', }}>
            <img src={avatar} alt={first_name} style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                marginRight: '16px',
            }} />
            <section className="info" style={{
                width: '200px',
            }}>
                <strong>{`${first_name} ${last_name}`}</strong>
                <p>{email}</p>
            </section>
        </li>
    )
}

export default DisplayUser;