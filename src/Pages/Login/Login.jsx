import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const location =useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        signIn(email,password)
        .then(result => {
            const loggedInUser = result.user
            console.log(loggedInUser);
            
            const user = {email}

            axios.post("http://localhost:5000/jwt",user,{
                withCredentials:true
            })
            .then(res=>{
                console.log(res.data)
                if(res.data.success){
                    navigate(location?.state ? location.state : "/") 
                }
            })
        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
            <div className="hero-content flex-col lg:flex-row w-full">

                <div className="mr-10 w-1/2">
                    <img src={loginImg} alt="" />
                </div>

                <div className="card flex-shrink-0 max-w-md shadow-2xl bg-base-100 w-1/2">

                    <form onSubmit={handleLogin} className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Login" />
                        </div>
                    <p className="text-center py-3">Have an account? <Link className="text-orange-500 font-bold" to={"/signUp"}>Sign Up</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;