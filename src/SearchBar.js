function SearchBar(props) {
  let list = props.data;

  const dynamicSearch = function (searchText) {
    props.changeList(
      list.filter((el) =>
        el.Category.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="search"
        name="search"
        onChange={(event) => {
          dynamicSearch(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default SearchBar;
