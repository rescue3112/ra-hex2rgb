import { useState } from "react"
import React from 'react'

const Converter = () => {
    const [form, setForm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleConvert = ({ target }) => {
        if (target.value.length < 7) {
            return
        }
        
        const color = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(target.value);
        if(!color) {
            return setForm('Error!');
        }

        const rgb = `${parseInt(color[1], 16)}, ${parseInt(color[2], 16)}, ${parseInt(color[3], 16)}`;
        setForm(`rgb(${rgb})`);
    }
    
    return (
    <div className="converter" style={{background: form}}>
        <form onSubmit={handleSubmit}>
            <input 
            className="hex" 
            name="HEX color" 
            onChange={handleConvert} />
            <div className="rgb">{form}</div>
        </form>
    </div>
  )
}

export default Converter;
