
import './App.css'

function App() {

  const handleuser = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const user2 = { name, email }
    console.log(user2)
    fetch('http://localhost:5000/users', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user2),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('user2 added successfully')
          form.reset()
        }
      })
  }



  return (
    <>

      <h1>simple crud</h1>
      <form onSubmit={handleuser}>
        <input type="text" name='name' /><br />
        <input type="email" name='email' /><br />
        <input type="submit" value="add user" /><br />
      </form>

    </>
  )
}

export default App
