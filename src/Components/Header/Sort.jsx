// import './sort.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { setSortType,setDisplayProducts } from '../../Redux/Products/ProductsAction';
// import { useEffect } from 'react';
// const Sort = ({products,setProducts}) => {
//   const dispatch=useDispatch();
//   const sortType = useSelector(state=>state.product.sortType);
//   const displayProducts = useSelector(state=>state.product.displayProducts);
//   const searchQuery = useSelector(state=>state.product.searchQuery);
// const sorting=(sortType,products)=>{
//   let array = [...products]
//     if(sortType==="asc"){
//      array.sort((a,b)=>a.price-b.price);
//     dispatch(setDisplayProducts(array));
//     }
//   if(sortType==="desc"){
//     array.sort((a,b)=>b.price-a.price);
//   dispatch(setDisplayProducts(array));
//   }
//   if(sortType==="sortA_Z"){
//      array.sort( (a, b) => a.title.localeCompare(b.title));
//     dispatch(setDisplayProducts(array));
//   }
//   if(sortType==="sortZ_A"){
//    array.sort( (a, b) => b.title.localeCompare(a.title));
//   dispatch(setDisplayProducts(array));
// }
// if(sortType==="default"){
//   array.sort((a,b)=>b.id-a.id);
//  dispatch(setDisplayProducts(array));
// }
// }
// const sortTypeChanged=(event)=>{
//   dispatch(setSortType(event.target.value));
// }

// useEffect(() => {
//  sorting(sortType,displayProducts);
// }, [sortType,searchQuery])



    
//     return(
// <div className={"Sort__wrapper"}>
//              <div className="sort">
//             <div className={"sort-elements"}>
//             <div className={"sort-icon"} id="icon">
//                 <a href="https://icons8.com/icon/FfTWsXw7mVqG/align-left"></a>
//                 <img src="https://img.icons8.com/fluent/48/000000/align-left.png"/>
//             </div>
//             <div className={"sort-title"}>
//                 Sort By:
//             </div>
//             <div className={"sort-select"}>
//                <select id="sort" onChange={sortTypeChanged}>
//                    <option  value="default">New Arrivals</option>
//                    <option value={"desc"}>Price: High To Law</option>
//                    <option value={"asc"}>Price:Law To High</option>
//                    <option value={"sortA_Z"}>Ascending</option>
//                    <option value={"sortZ_A"}>Descending</option>
//                </select>
//                </div>
//             </div>
//         </div>
//       </div>

//     );
// };

// export default Sort;

