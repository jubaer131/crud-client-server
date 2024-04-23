import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users2 = () => {
    const loadedusers = useLoaderData()
    const [users, setusers] = useState(loadedusers)

    console.log(loadedusers)
    const handledelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('detele successfully')
                    const remaining = users.filter(user => user._id !== _id);
                    setusers(remaining)
                }
            })


    }



    return (
        <div>
            <h1>{loadedusers.length}</h1>
            <div>
                {
                    loadedusers.map(user => <p key={user._id}>{user._id} : {user.name} : {user.email} <button
                        onClick={() => handledelete(user._id)}
                    >X</button>  <Link to={`/update/${user._id}`}><button>update</button></Link></p>)
                }
            </div>
        </div>
    );
};

export default Users2;