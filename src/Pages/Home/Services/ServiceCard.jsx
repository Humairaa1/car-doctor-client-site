import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const {_id, img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>

            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="font-semibold text-orange-500">Price : ${price}</p>
                <div className="card-actions flex justify-end">
                    <Link to={`/checkOut/${_id}`}>
                        <button className="btn btn-circle btn-outline btn-warning">
                            <AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;