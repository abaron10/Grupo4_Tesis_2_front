import { useState } from 'react';
import axios from "axios";
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login(props) {

    const navigate = useNavigate();

    const [loginForm, setloginForm] = useState({
        email: "",
        password: ""
    })

    function logMeIn(event) {
        //axios({
        //    method: "POST",
        //    url: "/specialist/login",
        //    data: {
        //        email: loginForm.email,
        //        password: loginForm.password
        //    }
        //})
        //    .then((response) => {
        //        props.setToken(response.data.access_token)
        //    }).catch((error) => {
        //        if (error.response) {
        //            console.log(error.response)
        //            console.log(error.response.status)
        //            console.log(error.response.headers)
        //        }
        //    })
//
        //setloginForm(({
        //    email: "",
        //    password: ""
        //}))
        props.setToken("asfasf")
        navigate("/");

        event.preventDefault()
    }

    function handleChange(event) {
        const { value, name } = event.target
        setloginForm(prevNote => ({
            ...prevNote, [name]: value
        })
        )
    }

    return (
        <div>
            <form className="login" style={{ width: "100%", margin: "0 auto" }}>
            <h1>DermoApp</h1>
                <input onChange={handleChange}
                    type="email"
                    text={loginForm.email}
                    name="email"
                    placeholder="Email"
                    value={loginForm.email} />
                <input onChange={handleChange}
                    type="password"
                    text={loginForm.password}
                    name="password"
                    placeholder="Password"
                    value={loginForm.password} />

                <button onClick={logMeIn}>Submit</button>
            </form>
        </div>
    );
}

export default Login;