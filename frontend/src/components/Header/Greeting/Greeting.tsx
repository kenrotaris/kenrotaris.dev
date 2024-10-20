import React, { useState, useEffect } from 'react';
import './Greeting.scss';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 3) {
      setGreeting('Still up? 🦉');
    } else if (currentHour < 12) {
      setGreeting('Good morning! 🐔');
    } else if (currentHour < 17) {
      setGreeting('Good afternoon! 🌞');
    } else if (currentHour < 22) {
      setGreeting('Good evening!');
    } else {
      setGreeting('Good night! 🌛');
    }
  }, []);

  return (
    <div className='greeting'>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
