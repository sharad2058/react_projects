import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable() {
    const products = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
        { category: "Electronics", price: "$2000", stocked: true, name: "iPhone" },
        { category: "Electronics", price: "$1600", stocked: false, name: "iMac" }
      ];
    return (
        <div className="w-96 border">
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )
}

export default FilterableProductTable;