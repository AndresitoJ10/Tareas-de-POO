import React, { useState, useEffect } from 'react';

const styles = {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    padding: '10px',
    
    };

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
    }, []);

    return (
    <div style={styles}>
        <h2>Hora Actual: {time.toLocaleTimeString()}</h2>
    </div>
    );
};

export default Clock;
