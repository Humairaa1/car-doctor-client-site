import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {

    const services = useLoaderData();

    const {_id, title, price ,img} = services;

    const {user} = useContext(AuthContext);

    const handleCheckOut = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;

        const order = {
            customerName: name,
            date,
            email,
            img,
            price: price,
            service: _id
        }

        // console.log(order)

        fetch("http://localhost:5000/checkOut",{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            form.reset();
        })
    }

    return (
        <div className="bg-slate-200 w-full h-screen flex justify-center items-center">
            <div className="card w-full p-20">
                <h2 className="text-3xl font-extrabold text-center">Service name : {title}</h2>
                <form onSubmit={handleCheckOut} className="card-body">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        
                        <input className="btn btn-warning btn-block" type="submit" value="Order Confirm" />
                        
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CheckOut;