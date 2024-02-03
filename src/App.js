import { useState } from "react";

// Bu fonksiyonun görevi ise tanımladığımız listeden rasgele hayvan seçer.
function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', ' gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

// Bu fonksiyonun görevi tıklandığında rasgele seçilen hayvan listesine yenisini ekler ve son gündel durumu verir bize 
function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    // handleClick'e her tıklandığında animals döndürür
    return <div>
        <button onClick={handleClick}>Add Animal! </button>
        <div>{animals}</div>
    </div>

}

export default App;