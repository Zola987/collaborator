import React from 'react';
import { useState } from 'react';

export function useInputValidation(): any {
    const [isValid, setIsValid] = useState(false);
    const [value, setValue] = useState('');

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        checkValidation(event.target.value);
        setValue(event.target.value);
    }

    function checkValidation(input: string) {
        if (
            input === '' ||
            input.includes('#') ||
            input.includes('$') ||
            input.includes('%')
        ) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }

    return [value, handleOnChange, isValid];
}
