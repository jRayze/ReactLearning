import React, { useState } from 'react';

const Countries = () => {
    const [data, setData] = useState([])

    return (
        <div>
            {data}
       
        </div>
    );
};

export default Countries;