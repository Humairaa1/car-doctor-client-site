import PropTypes from 'prop-types';


const BookingsRow = ({ booking, handleDelete, handleStatus }) => {

    const { _id, img, customerName, date, email, status } = booking;


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                img && <img src={img} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}

            </td>
            <td>{date}</td>
            <th>
                {
                    status==="confirm"?  <span className='font-bold text-blue-600'>Confirmed</span>
                    :
                    <button onClick={() => handleStatus(_id)} className="btn btn-ghost">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

BookingsRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleStatus:PropTypes.func
}

export default BookingsRow;