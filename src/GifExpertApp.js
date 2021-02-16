import React, { useState } from 'react';
import { AddCategory } from './componets/AddCategory';
import {GifGrill} from './componets/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {categories.map(category =>
                    <GifGrill
                        key={category}
                        category={category} />
                )}
            </ol>
        </>
    )
}