import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { loginHandler } from './LoginHandler';

const LoginInput = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const { user, setUser } = useContext(UserContext);

    function onSubmit(data) {
        loginHandler.checkUser(data.username).then(res => setUser(res));
    };

    return (
        <>
        {user.username && <Navigate to="/translation" />}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 border w-44">
            <input {...register("username", {required: true, minLength: 4, maxLength: 12})}/>
            {errors.username?.type === "required" && <span>ERROR: Username is required.</span>}
            {errors.username?.type === "minLength" && <span>ERROR: Username must be longer than 3 characters.</span>}
            {errors.username?.type === "maxLength" && <span>ERROR: Username must be shorter than 12 characters.</span>}
            <input type="submit" />
        </form>
        </>
    )
}

export default LoginInput