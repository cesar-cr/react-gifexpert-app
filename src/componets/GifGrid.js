// import React, { useState, useEffect } from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrillItem } from './GifGridItem';

export const GifGrill = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className=" animate__animated animate__fadeIn">{category}</h3>

            <div className=" animate__animated animate__flash">{loading && <p>Loading...</p>}</div>

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGrillItem
                            key={ img.id }
                            { ...img} />
                    ))
                }
            </div>
        </>
    )
}
