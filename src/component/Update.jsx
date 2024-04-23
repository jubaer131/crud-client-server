import { useLoaderData } from "react-router-dom";


const Update = () => {

    const update = useLoaderData()
    console.log(update._id)

    const handleupdate = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const updateduser131 = { name, email }
        console.log(updateduser131)
        fetch(`http://localhost:5000/users/${update._id}`, {
            method: "PUT", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateduser131),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert('data added successfully')

                }
            })
    }


    return (
        <div>
            <h1>updated user of {update.name}</h1>
            <form onSubmit={handleupdate}>
                <input type="text" name='name' defaultValue={update?.name} /><br />
                <input type="email" name='email' defaultValue={update?.email} /><br />
                <input type="submit" value="add user" /><br />
            </form>
        </div>
    );
};

export default Update