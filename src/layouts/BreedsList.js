import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
function BreedsList() {
  const [breed, setBreed] = useState("");
  const [breedsList, setBreedsList] = useState([]);
  const [dogImage, setDogImage] = useState([""]);
  const [statusAPI, setStatusAPI] = useState(false);
  useEffect(() => {
    axios.get(`https://dog.ceo/api/breeds/list/all`).then((res) => {
      const breedsArr = Object.getOwnPropertyNames(res.data.message);
      setBreedsList(breedsArr);
    });
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      setDogImage(res.data.message);
      setStatusAPI(true);
    });
  }, []);
  function handleChangeBreed(event) {
    setBreed(event.target.value);
  }
  function handleSubmit(event) {
    setStatusAPI(false);
    event.preventDefault();
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => {
        setDogImage(res.data.message);
        setStatusAPI(true);
      });
  }
  return (
    <section className="breeds-list__box">
      <h2 className="breeds-list__header">Breeds List</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="breeds-list__form">
            <div className="breeds-list__input">
              <label>
                https://dog.ceo/api/breed/
                <select value={breed} onChange={handleChangeBreed}>
                  {breedsList.map((breed) => {
                    return (
                      <option key={breed} value={breed}>
                        {breed}
                      </option>
                    );
                  })}
                </select>
                /images/random
              </label>
            </div>
            <input className="breeds-list__button" type="submit" value="Find" />
          </div>
        </form>
      </div>
      <div className="dog-image__box">
        {statusAPI ? (
          <div>
            <img src={dogImage} alt={`breed: ${breed}`} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}
export default BreedsList;
