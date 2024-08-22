function ProductRow({ name, price, stocked }) {
    return (
        <tr className={stocked ? "text-black" : "text-red-500"}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}
export default ProductRow;