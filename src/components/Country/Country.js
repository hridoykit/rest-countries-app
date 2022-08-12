import React from 'react';

const Country = (props) => {
    const { name, capital, languages } = props.country;
    return (
        <div key={props.country.ccn3}>
            <h2>{name.common}</h2>
            <h3>{capital}</h3>
            <p>{languages}</p>
        </div>
    );
};

export default Country;