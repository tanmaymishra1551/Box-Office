import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { apiGet } from '../components/misc/config';

const Show = () => {
    const { id } = useParams();

    const [show, setShow] = useState(null);

    useEffect(() => {
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
            setShow(results)
        })

    }, [id])
    console.log('show', show);
    return (
        <div>This is Show Page</div>
    )
}

export default Show