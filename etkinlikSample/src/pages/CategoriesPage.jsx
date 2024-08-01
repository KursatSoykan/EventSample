import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CategoryPage() {

    const [categories, setcategories] = useState([])

    const { categoryId } = useParams()



    useEffect(() => {

        fetch("https://localhost:44378/api/Categories")
            .then(res => res.json())
            .then(data => {
                let filteredData = data.filter(Categories => categories.id == categoryId)
                setcategories(filteredData)
            })
    }, [categoryId])

    return <>
        <h1 style={{ textAlign: 'center' }}>Categories</h1>
        <hr />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                categories.map(categories => <Link to={`/category/${categoryId}`}>
                    <div key={category.id} style={{ border: "1px solid", margin: 10, padding: 10, width: 100, height: 100 }}>
                        <h3>{categories.name}</h3>
                        <p>{categories.id}</p>
                    </div>
                </Link>)
            }
        </div >
    </>
}

export default CategoryPage