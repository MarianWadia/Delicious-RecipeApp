import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
  const apiKey = '79d59cafab924a14a5495a6db8de6b77';
  const params = useParams();
  const [cuisine, setCuisine] = useState([]);

  const getCuisine = async (name) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=${name}`);
    const recipes = await api.json();
    setCuisine(recipes.results);
  };

  useEffect(() =>{
    getCuisine(params.type);
    console.log(params.type)
  }, [params.type]);

  return (
    <Grid
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      exitVariant="out"
    >
      {cuisine.map((result)=>{
        return(
          <Card key={result.id}>
              <Link to={`/recipe/${result.id}`}>
                <img src={result.image} alt={result.title}/>
                <h4>{result.title}</h4>
            </Link>
          </Card> 
        );
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
  display: grid;    
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`
export default Cuisine