import React, { useState } from "react";
import '../App.css';

function RecipeGenerator(){
    const [answer,setAnswer]=useState('Lets cook a recipe!!!')

    const [ingredients,setIngredient]=useState('')

    const [cuisine,setCuisine]=useState('')
    const [dietRestrictions,setDietRestrictions]=useState('')


    const generateRecipe=async()=>{
        try{

            const response=await fetch(`http://localhost:8080/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietRestrictions}`)
            const ans=await response.text()
            setAnswer(ans)

        }catch(error){
            console.log('Error generating the recipe: ',error)
        }
    };

    return (
        <div className="tab-content"> 
            <h2>Recipe Generator </h2>
            <label htmlFor="">Ingredients</label> 
            <input 
                type="text"
                value={ingredients}
                onChange={(e)=>setIngredient(e.target.value)}
                placeholder="Enter Ingredients"
            />
            <label htmlFor="">Cuisine</label> 
            <input 
                type="text"
                value={cuisine}
                onChange={(e)=>setCuisine(e.target.value)}
                placeholder="Enter Cuisine"
            />
            <label htmlFor="">Dietary Restrictions</label> 
            <input 
                type="text"
                value={dietRestrictions}
                onChange={(e)=>setDietRestrictions(e.target.value)}
                placeholder="Enter Dietary Restrictions"
            />
            <button onClick={generateRecipe}>Generate Recipe</button>
            <div className="recipe-text">{answer}</div>
            
        </div>


    )
}

export default RecipeGenerator;