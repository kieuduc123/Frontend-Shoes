const SortSelect = ({ sort, setSort }) => {
    const handleSort = (event) => {
      const selectedValue = event.target.value;
      setSort(selectedValue); // Cập nhật giá trị sort khi có sự thay đổi
      console.log("check value sort--->", selectedValue);
    };
    return (
      <select
        id="sort"
        value={sort}
        onChange={handleSort}
        className="form-select form-select-sm border-0 bg-light p-3 pe-5 lh-1 fs-7 bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto ">
        <option selected>Sort By</option>
        <option value="NAME_DESC">Tên Z-A</option>
        <option value="PRICE_DESC">High to low</option>
        <option value="PRICE_ASC">Low to high</option>
      </select>
    );
  };
  
  export default SortSelect;