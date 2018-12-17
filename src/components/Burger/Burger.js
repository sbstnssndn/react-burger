import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // obtener un array de las keys de un objeto (ingredients), e.g. ['meat', 'cheese', 'salad', 'bacon']
    const transformedIngredients =
        Object.keys(props.ingredients)
        .map( (ingredientKey) => {
            return (
                // transformar cada key del array en otro array con tantos elementos como valor tenga dicha key en el objeto
                // por ejemplo, si cheese: 2, crear ['a',a']. No importa el valor, sólo el largo.
                // Array(4) = [Array(1), Array(1), Array(2), Array(2)]
                // Array(1) = [undefined]
                // Array(1) = [undefined]
                // Array(2) = [undefined, undefined]
                // Array(2) = [undefined, undefined]

                // El método map recibe funcion(currentValue [_], index [i], arr [opcional, no está])
                // retorno un BurgerIngredient por cada cantidad de ingredientes en el array
                // dándole una key única a cada uno, concatenando ingredientKey (e.g. 'bacon') con 
                // el index de dicho elemento en el array
                [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                    return (
                        <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
                    );
                })
            );
        });    

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
             {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;