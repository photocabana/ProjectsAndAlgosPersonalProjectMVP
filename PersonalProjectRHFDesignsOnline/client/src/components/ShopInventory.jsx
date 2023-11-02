import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "../App.css"


const ShopInventory = () => {
    const [allJewelry, setAllJewelry] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jewelry`)
            .then(response => {
                console.log(response)
                setAllJewelry(response.data.allJewelry)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [])

    const handleDeleteJewelry = (idFromBelow) => {
    axios.delete(`http://localhost:8000/api/delete/${idFromBelow}`)
        .then((response) => {
        console.log("Your Jewelry piece deletion has been removed")
        console.log(response)
        const filteredJewelry = allJewelry.filter((jewelry) => {
            return jewelry._id !== idFromBelow})
        setAllJewelry(filteredJewelry)})
        .catch((err) => {
        console.log("error deleting jewelry", err.response)
        })
    }


    return (
        <div className="container">
            <div className="jewelryName">
                <div className="card-deck">
                    <div className="card">
                        {allJewelry.map((jewelry) => (
                            <div className="col-sm" key={jewelry._id}>
                            <img className="card-img-top" src="..." alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{jewelry.itemNumber}</h5>
                                <p className="card-text"><b>{jewelry.itemDescription}</b></p>
                                <p className="card-text"><b>Cost:  ${jewelry.cost}</b></p>
                                <p className="card-text"><b>Qty:  {jewelry.quantity}</b></p>
                            </div>
                            <Link to={`/edit/${jewelry._id}`}>
                                <button className="btn btn-secondary btn-sm">Edit</button>
                            </Link>
                            <Link to={`/view/${jewelry._id}`}>
                                <button className="btn btn-secondary btn-sm">View</button>
                            </Link>
                            <button onClick={() => handleDeleteJewelry(jewelry._id)} className="btn btn-secondary btn-sm">Delete</button>
                            <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopInventory