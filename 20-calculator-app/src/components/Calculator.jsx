import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            if (input !== '') {
                const evalResult = eval(input);
                setResult(evalResult);
                setInput(evalResult.toString()); // Update input with the current result
            } else {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
            setInput('');
        } else {
            setInput(input + value);
        }
    };

    return (
        <>
            <h1>Calculator</h1>
            <div className='calcDiv'>
                <input type="text" value={input} className='display' readOnly />
                <br />

                <Button onClick={handleClick} value="7" />
                <Button onClick={handleClick} value="8" />
                <Button onClick={handleClick} value="9" />
                <Button onClick={handleClick} value="+" />

                <Button onClick={handleClick} value="4" />
                <Button onClick={handleClick} value="5" />
                <Button onClick={handleClick} value="6" />
                <Button onClick={handleClick} value="-" />

                <Button onClick={handleClick} value="1" />
                <Button onClick={handleClick} value="2" />
                <Button onClick={handleClick} value="3" />
                <Button onClick={handleClick} value="*" />

                <Button onClick={handleClick} value="0" />
                <Button onClick={handleClick} value="." />
                <Button onClick={handleClick} value="=" />
                <Button onClick={handleClick} value="/" />

                <Button onClick={handleClick} value="C" /> {/* Added onClick handler */}
            </div>
        </>
    );
};

export default Calculator;
