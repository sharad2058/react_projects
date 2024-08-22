import PropTypes from 'prop-types';

function ProductRow({ name, price, stocked }) {
    return (
        <tr className={stocked ? "text-black" : "text-red-500"}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

ProductRow.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool
}

export default ProductRow;