import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

function Recipe() {
    const apiKey = '79d59cafab924a14a5495a6db8de6b77';
    const [recipeDetails, setRecipeDetails] = useState({});
    const [active, setActive] = useState("instructions");
    const params = useParams();

    const getRecipesDetails = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/${name}/information?apiKey=${apiKey}`);
        const recipeData = await api.json();
        setRecipeDetails(recipeData);
    }

    useEffect(()=>{
      getRecipesDetails(params.name);
    },[params.name]);


  return (
    <DetailWrapper>
      <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} />
      </div>
      <Info>
        <Button onClick={() => setActive("instructions")} className={active==="instructions" && "active"} >Instructions</Button>
        <Button onClick={() => setActive("ingredients")} className={active==="ingredients" && "active"}>Ingredients</Button>
        {active==="instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{__html: recipeDetails.summary}}></p>
            <p dangerouslySetInnerHTML={{__html: recipeDetails.instructions}}></p>
          </div>
        )};
         {active==="ingredients" && (
          <ul>
            {recipeDetails.extendedIngredients.map((ingredient)=>(
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
         )};        
      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
  p{
    letter-spacing: 1.5px;
  }
`;

const Button = styled.button`
  color: #313131;
  padding: 1rem 2rem;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe