import { Link } from "react-router-dom";
import signUpImg from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(err => {
            console.error(err)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 mb-12">
            <div className="hero-content flex-col lg:flex-row w-full">

                <div className="mr-10 w-1/2">
                    <img src={signUpImg} alt="" />
                </div>

                <div className="card flex-shrink-0 max-w-md shadow-2xl bg-base-100 w-1/2">

                    <form onSubmit={handleSignUp} className="card-body">
                        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            <input className="btn btn-warning" type="submit" value="Sign Up" />
                        </div>
                        <p className="text-center py-3">Already have an account? <Link className="text-orange-500 font-bold" to={"/login"}>Log in</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;