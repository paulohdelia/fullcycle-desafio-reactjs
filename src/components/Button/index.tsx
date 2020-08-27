import React from 'react';

import { Link } from 'react-router-dom';

interface ButtonProps {
    fontSize: string;
    linkTo: string;
    title: string;
    marginBottom?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    const { fontSize, linkTo, title, marginBottom = 0 } = props;
    return (
        <Link to={linkTo} type="button" style={{
            padding: '.5em 1em',
            backgroundColor: 'var(--color-red)',
            color: 'var(--color-white)',
            fontSize,
            borderRadius: '16px',
            textDecoration: 'none',
            marginBottom,
        }}>
            {title}
        </Link>
    )
}

export default Button;