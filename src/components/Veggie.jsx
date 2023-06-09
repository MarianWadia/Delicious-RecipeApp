import { Wrapper, Card, Gradeint } from "./module.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Veggie() {
  const apiKey = '79d59cafab924a14a5495a6db8de6b77';
  const [veggie, setVeggie] = useState([])
  // this efeect means that we call the function getpopular only one time when the component get mounted
  useEffect(()=>{
    getVeggie();
  },[]);

  const getVeggie = async ()=>{
    // checking if the local stoarge already has data so to get it and not to fetch them with every refresh 
    const check = localStorage.getItem('veggie');
    if(check && check !== undefined){
      setVeggie(JSON.parse(check));
    }
    // else in case there is no data in local storage so go and fetch the data from the api
    else{
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10&tags=vegetarian`
        );
        const data = await api.json();
        // here we set the data fetched from the api to the local storage
        localStorage.setItem('veggie', JSON.stringify(data.recipes));
        console.log(data);
        setVeggie(data.recipes);
    }
};

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide options={{
          perPage: 3,
          gap: '2rem',
          pagination: false,
          drag: 'free'

      }}>
        {veggie.map((recipe) =>{
            return(
              <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={`/recipe/${recipe.id}`}>
                      <p>
                          {recipe.title}
                      </p>
                      <img src={recipe.image} alt={recipe.title}/>
                      <Gradeint />
                    </Link>
                  </Card>
              </SplideSlide>
          );
        } 
        )}
    </Splide>
  </Wrapper>
  )
}

export default Veggie