import PropTypes from 'prop-types';
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ service }) => {

    const { img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>

            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p className="font-semibold text-orange-500">Price : ${price}</p>
                <div className="card-actions flex justify-end">
                    <button className="btn btn-circle btn-outline btn-warning">
                        <AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight>
                    </button>
                </div>
            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;