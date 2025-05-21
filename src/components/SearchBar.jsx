import { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const SearchBar = ({ onSearch }) => {
  const { store, dispatch } = useGlobalReducer();
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);


  const debouncedSearch = useCallback(
    debounce((value) => {
      setQuery(value);
      const allPeople = Object.values(store.people || {});
      const filtered = allPeople.filter((person) =>
        person.properties.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredResults(filtered);
    }, 500),
    [store.people]
  );

  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="position-relative">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
        <button className="btn btn-outline-light" type="submit">
          Search
        </button>
      </form>

      {filteredResults.length > 0 && (
        <ul className="list-group position-absolute mt-2 w-100">
          {filteredResults.map((result, i) => (
            <li key={i} className="list-group-item">
              <Link to={`/${result.endpoint}/${result.uid}`} className="text-decoration-none">
                {result.properties.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
