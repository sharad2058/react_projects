function SearchBar() {
    return (
        <form className="p-4">
            <div><input type="search" className="border text-2xl" placeholder="Search..." /></div>
            <label htmlFor="inStock">
                <input type="checkbox" name="inStock" id="inStock" />
                Only search products in stock
            </label>
        </form>
    );
}
export default SearchBar;