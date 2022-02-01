import React, {useState} from "react";
import Movies from "./data";
import { useGlobalContext } from "./context";

function Header() {
  const { genres, genreFilter, setCurrentPage } = useGlobalContext();
  const [selectedOption, setSelectedOption] = useState(genres[0].value);

  // console.log(selectedOption);

  return (
    <section className="section header ">
      <div className="title">
        <h1>Move-List</h1>
        <div className="underline"></div>
      </div>

      <div className="filter-options">
        <h4>Filter Options: </h4>

        <select name="genres" className="btn" value={selectedOption} onChange={e => {
            setSelectedOption(e.target.value) 
            genreFilter(e.target.value)
            setCurrentPage(1)
            }}>
            {
                genres.map((genre, index)=>{
                    return <option key={index} value={genre}>{genre}</option>
                })
            }
        </select>
      </div>
    </section>
  );
}

export default Header;
