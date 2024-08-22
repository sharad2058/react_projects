import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable() {
    return (
        <div className="w-96 border">
            <SearchBar />
            <ProductTable />
        </div>
    )
}

export default FilterableProductTable;