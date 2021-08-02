// import React from "react";
// import "./search.css";
// import SearchIcon from "@material-ui/icons/Search";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setSearchQuery,
//   setDisplayProducts,
// } from "../../Redux/Products/ProductsAction";
// import Button from "./Button";

// const Search = ({ setProducts, searchResults }) => {
//   const dispatch = useDispatch();
//   const searchQuery = useSelector((state) => state.product.searchQuery);
//   const originalProducts = useSelector(
//     (state) => state.product.originalProducts
//   );
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//   };
//   const finalChange = () => {
//     dispatch(setSearchQuery(searchTerm));
//   };

//   useEffect(() => {
//     let searchProducts = [...originalProducts];

//     const results = searchProducts.filter((e) => {
//       return e.title.toLowerCase().includes(searchTerm.toLowerCase());
//     });
//     dispatch(setDisplayProducts(results));
//   }, [searchQuery, originalProducts]);

//   return (
//     <div>
//       <div className={"searchBar__elements"}>
//         <div className={"search__wrapper"}>
//           <input
//             type="text"
//             id="searchBar"
//             placeholder="search..."
//             value={searchTerm}
//             onChange={handleChange}
//           />
//           <SearchIcon id="search__icon" onClick={finalChange} />
//         </div>
//         <Button type={"add to inventory"} className={"add-button"} />
//       </div>
//     </div>
//   );
// };

// export default Search;
