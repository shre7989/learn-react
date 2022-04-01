function SearchBar(props) {
  const list = props.data;
  const dynamicSearch = function (event) {
    let searchText = event.target.value;

    props.changeList(
      list.filter((el) =>
        searchText.toLowerCase().includes(el.Category.toLowerCase())
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
          dynamicSearch(event);
        }}
      ></input>
    </div>
  );
}

export default SearchBar;
