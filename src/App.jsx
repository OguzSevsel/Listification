import { React, useState } from "react";
import MovieListGridView from "./components/MoviesList/MovieListGridView";
import Dropdown from "./components/Buttons/CreateListButton/Dropdown";

function App() {

  const [showList, setList] = useState(false);

  const addMovieList = () => {
    if (!showList) {
      setList(true);
    }
  }

  return (
    <div className="backGround backGroundStyle">

      <Dropdown onClick={addMovieList} buttonText={"Create Movie List"}/>

      {showList && <MovieListGridView/>}

    </div>
  )
}

export default App
