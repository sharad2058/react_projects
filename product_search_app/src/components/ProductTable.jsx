import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable() {
    return (
        <table className="w-full">
            <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Price</th>
            </tr>
            <ProductCategoryRow category="Fruits" />
            <ProductRow name="Apple" price="$1" stocked={true} />
            <ProductRow name="Apple" price="$1" stocked={false} />
            <ProductRow name="Apple" price="$1" stocked={false} />
            <ProductCategoryRow category="Vegetables" />
            <ProductRow name="Apple" price="$1" stocked={false} />
            <ProductRow name="Apple" price="$1" stocked={false} />
            <ProductRow name="Apple" price="$1" stocked={false} />
        </table>
    )
}
export default ProductTable;