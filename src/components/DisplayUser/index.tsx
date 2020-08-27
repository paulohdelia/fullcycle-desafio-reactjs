import React from 'react';

export interface User {
    id?: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}

const DisplayUser = ({ first_name, last_name, email, avatar }: User) => {
    return (
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', }}>
            <img src={avatar} alt={first_name} style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                marginRight: '16px',
            }} />
            <section className="info" style={{
            }}>
                <strong>{`${first_name} ${last_name}`}</strong>
                <p>{email}</p>
            </section>
        </li>
    )
}

export default DisplayUser;