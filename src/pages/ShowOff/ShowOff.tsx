import React, { useEffect, useState } from 'react';
import styles from './ShowOff.module.css';
import { useInterval } from './useInterval';
import { useInputValidation } from './useInputValidation';

const ShowOff = () => {
    const [valueFirstName, handleChangeFirstName, isValidFirstName] =
        useInputValidation();
    const [valueLastName, handleChangeLastName, isValidLastName] =
        useInputValidation();

    const [text, setText] = useState('');
    const [seconds, setSeconds] = useState(0);
    const [red, setRed] = useState<boolean>(false);
    const [textVisible, setTextVisible] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setText('I AM ASYNC');
        }, 5000);
        return () => clearTimeout(timer);
    }, [text]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setRed((red) => !red);
    //         // setSeconds((seconds) => seconds + 1);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTextVisible(true);
        }, 60000);
        return () => clearTimeout(timer);
    }, []);

    useInterval(() => {
        if (red) {
            setRed(false);
        } else {
            setRed(true);
        }
        setSeconds((seconds) => seconds + 1);
    }, 1000);

    return (
        <section className={styles.container}>
            <div className={red ? `${styles.red}` : `${styles.yellow}`}>
                {text}
            </div>
            <div className={styles.colorClass}>{seconds}</div>
            <input
                className={styles.input}
                onChange={handleChangeFirstName}
                placeholder="Enter first name..."
            />
            <input
                className={styles.input}
                onChange={handleChangeLastName}
                placeholder="Enter last name..."
            />
            {(!isValidFirstName || !isValidLastName) && (
                <div className={styles.msg}>
                    {' '}
                    Input cannot have #, %, $, and cannot be empty
                </div>
            )}
            {textVisible && (
                <div className={styles.container}>
                    <div> ARE YOU ASLEEP?</div>
                    <button
                        className={styles.btn}
                        onClick={() => setTextVisible(false)}
                    >
                        NO
                    </button>
                </div>
            )}
        </section>
    );
};

export default ShowOff;
