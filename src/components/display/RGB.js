import React from 'react';
import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { red, green, blue } = useParams();
  return (
    <div className="background" style={{ background: `rgb(${red} ${green} ${blue})` }}>
      RGB({red},{green},{blue})
    </div>
  );
}
