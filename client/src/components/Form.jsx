/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import '../style/auth/register.css'
import axios from 'axios';
import { toast } from 'react-toastify';

function Form({ type }) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const nevigate = useNavigate();

    const submit = async (data) => {

        if (type == "login") {
            let res = await axios.post('/login', data)
            if (res?.data?.status === 200) {
                toast.success(res?.data?.message)
                nevigate('/home')                
            } else {
                toast.error(res?.data?.message)
            }
        }

        if (type === "register") {
            try {
                let res = await axios.post('/register', data)
                console.log(res);
                if (res?.data?.status === 200) {
                    toast.success(res?.data?.message)
                    nevigate('/auth/login')

                } else {
                    toast.error(res?.data?.message)
                }

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            {
                type === "login" ? <>
                    <section className='formCantainer' >
                        <div className='form' >
                            <h4>Log In</h4>
                            <form>
                                <div className='inputFieldName'>

                                    <input type="text" name="username" id="username" placeholder='Enter your name'
                                        {...register("username", {
                                            required: "Username is required",
                                            validate: (value) => {
                                                if (value.length < 3) {
                                                    return "Username must be at least 3 characters";
                                                }
                                            },
                                        })} />

                                    {errors.username && (
                                        <p className="" style={{ color: "red" }} >{errors.username.message}</p>
                                    )}

                                    <input type="password" name="password" id="password" placeholder='Password'
                                        defaultValue=""
                                        {...register("password", {
                                            required: "Password is required",
                                        })}

                                    />

                                    {errors.password && (
                                        <p className="" style={{ color: "red" }} >{errors.password.message}</p>
                                    )}

                                    <button onClick={handleSubmit(submit)} >
                                        Login
                                    </button>

                                    <p style={{ marginTop: "1.5rem", textAlign: "center" }} > Account not created ? <Link to={"/auth/register"} style={{ color: "red", cursor: "pointer" }} >Register</Link> </p>
                                </div>
                            </form>
                        </div>
                        <div className='registerImg' >
                            <img src="/register.webp" alt="" />
                        </div>
                    </section>
                </> : <>
                    <section className='formCantainer' >
                        <div className='form' >
                            <h4>Create an account</h4>
                            <form>
                                <div className='inputFieldName'>
                                    <input type="text" name="username" id="username" placeholder='Enter your name'
                                        {...register("username", {
                                            required: "Username is required",
                                            validate: (value) => {
                                                if (value.length < 3) {
                                                    return "Username must be at least 3 characters";
                                                }
                                            },
                                        })}
                                    />

                                    {errors.username && (
                                        <p className="" style={{ color: "red" }} >{errors.username.message}</p>
                                    )}

                                    <input type="email" name="email" id="email" placeholder='Email address'
                                        {...register("email", {
                                            required: "email is required",
                                        })}
                                    />

                                    {errors.email && (
                                        <p className="" style={{ color: "red" }} >{errors.email.message}</p>
                                    )}


                                    <input type="password" name="password" id="password" placeholder='Password'
                                        {
                                        ...register("password", {
                                            required: "password is required"
                                        })}
                                    />
                                    {errors.password && (
                                        <p className="" style={{ color: "red" }} >{errors.password.message}</p>
                                    )}

                                    <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password'
                                        {...register('confirmPassword', {
                                            required: 'Confirm Password is required',
                                        })}
                                    />

                                    {errors.confirmPassword && <p style={{ color: "red" }} >{errors.confirmPassword.message}</p>}

                                    <button onClick={handleSubmit(submit)} >
                                        Create Account
                                    </button>

                                    <p style={{ marginTop: "1.5rem", textAlign: "center" }} >Already account created ? <Link to={"/auth/login"} style={{ color: "red", cursor: "pointer" }} >Login</Link> </p>
                                </div>
                            </form>
                        </div>
                        <div className='registerImg' >
                            <img src="/register.webp" alt="" />
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default Form