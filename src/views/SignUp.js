import axios from 'axios';
import { useState } from 'react';
import './SignUp.css';
import { Navigate } from "react-router-dom";

const SignUp = (props) => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState ({
        username: '',
        password: '',
        email: '',
        confirmPassword: ''
    });

    const validate = () => {
        let validationErrors = {
            username: false,
            password: false,
            email: false,
            confirmPassword: false
        };

        /* Username */
        if (formData.username.trim().length < 4) {
            validationErrors.username = true;
            setErrors(prevErrors => {
                return {
                    ...prevErrors, username: "Username should have at least 4 characters",
                }
            })
        } else if (!/^[^\s]*$/.test(formData.username.trim())) {
            validationErrors.username = true;
            setErrors(prevErrors => {
                return {
                    ...prevErrors, username: "Username should'n have empty characters",
                }
            })
        } else {
            validationErrors.username = false;
            setErrors(prevErrors => {
                return {
                    ...prevErrors, username: "",
                }
            })
        }

        /* Email */

        if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
            validationErrors.email = true;
            setErrors(prevErrors => {
                return {
                    ...prevErrors, email: "There is no valid email",
                }
            })
        } else {
            validationErrors.email = false;
            setErrors(prevErrors => {
                return {
                    ...prevErrors, email: "",
                }
            })
        }

        return (!validationErrors.username &&
            !validationErrors.email &&
            !validationErrors.password &&
            !validationErrors.confirmPassword
            );
    };

    const handleInputChange = (event) => {                
        const target = event.target;
        const name = target.name;
              
        setFormData({
            ...formData,
            [name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return
        }

        console.log("wysyłam");

        // axios.post("https://akademia108.pl/api/social-app/user/signup", {
        //     username: formData.username,
        //     password: formData.password,
        //     email: formData.email,
        //     confirmPassword: formData.confirmPassword
        // })
        // .then((res)=>{
        //          console.log(res.data);   
        // })
    }

    // console.log(formData);

    return (
        <div className="signUp">
            {props.user && <Navigate to="/" />}
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="User name" onChange={handleInputChange} />
                {errors.username && <p>{errors.username}</p>}
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                {errors.email && <p>{errors.email}</p>}
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                <input type="password" name="confirmPassword" placeholder="Confirm password" onChange={handleInputChange} />
                <button className='btn'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;