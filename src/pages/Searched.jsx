import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function Searched() {
    const apiKey = '79d59cafab924a14a5495a6db8de6b77';
    const params = useParams();
    const [serachResults, setserachResults] = useState([]);

    const getSearch = async (name) => {
      const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${name}`);
      const recipes = await api.json();
      setserachResults(recipes.results);
    };

    useEffect(() =>{
        getSearch(params.search);
        console.log(params.search)
      }, [params.search]);

  return (
    <Grid>
      {serachResults.map((result)=>{
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

const Grid = styled.div`
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

export default Searched