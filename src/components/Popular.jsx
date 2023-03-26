import { useEffect, useState } from "react";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Wrapper, Card, Gradeint } from "./module.style";

function Popular() {
    const apiKey = 'f5996b7b95484fb2b7ad953183720673';

    const [popular, setPopular] = useState([])
    // this efeect means that we call the function getpopular only one time when the component get mounted
    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async ()=>{
        // checking if the local stoarge already has data so to get it and not to fetch them with every refresh 
        const check = localStorage.getItem('popular');
        if(check && check !== undefined){
            setPopular(JSON.parse(check));
        }
        // else in case there is no data in local storage so go and fetch the data from the api
        else{
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`
            );
            const data = await api.json();
            // here we set the data fetched from the api to the local storage
            localStorage.setItem('popular', JSON.stringify(data.recipes));
            console.log(data);
            setPopular(data.recipes);
        }
    };

  return (
        <Wrapper>
            <h3>Trending Picks</h3>
            <Splide options={{
                perPage: 4,
                gap: '2rem',
                pagination: false,
                drag: 'free'

            }}>
                {popular.map((recipe) =>{
                    return(
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <p>
                                    {recipe.title}
                                </p>
                                <img src={recipe.image} alt={recipe.title}/>
                                <Gradeint />
                            </Card>
                        </SplideSlide>
                    );
                } 
                )}
            </Splide>
    </Wrapper>
  )
}
export default Popular