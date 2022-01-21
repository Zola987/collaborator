import React from 'react';
import styles from './Form.module.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    userName: yup.string().required('username is required'),
    email: yup.string().email().required(),
    age: yup
        .number()
        .min(13, '+13')
        .positive('age must be a positive number')
        .integer()
        .required('age is required'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            'Must Contain at least 8 Characters, One Uppercase, and one Number'
        )
        .min(8)
        .required(),
});

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const submitForm = (data: any) => {
        console.log(data);
    };
    return (
        <div className={styles.App}>
            <div className={styles.Form}>
                <div className={styles.title}>Sign Up</div>
                <div className={styles.inputs}>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <input
                            type="text"
                            className={styles.inputs}
                            {...register('userName')}
                            placeholder="Username..."
                        />
                        <p> {errors.userName?.message} </p>
                        <input
                            type="text"
                            className={styles.inputs}
                            placeholder="Email..."
                            {...register('email')}
                        />
                        <p> {errors.email?.message} </p>
                        <input
                            type="text"
                            className={styles.inputs}
                            placeholder="Age..."
                            {...register('age')}
                        />
                        <p> {errors.age?.message} </p>
                        <input
                            type="password"
                            className={styles.inputs}
                            placeholder="Password..."
                            {...register('password')}
                        />
                        <p> {errors.password?.message} </p>
                        <button type="submit" className={styles.submit}>
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
