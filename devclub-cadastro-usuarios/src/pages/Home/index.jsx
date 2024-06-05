import './style.css'

import Trash from  '../../assets/react.svg'

function Home() {

  const users =[{
  id:'94790802918077',
  name:'Misaias',
  age:35,
  email:'midxjikshc@hgfhkdj'}];



  return (
    
      <div className= 'container'>
        <form>
          <h1>Olá react</h1>
          <input   placeholder='Nome' name = 'nome' type = ' text'/>
          <input placeholder='Idade' name = 'idade' type = 'number'/>
          <input   placeholder='Email'  name ='email' type = 'email'/>
          <button  type='button'>Cadastrar</button>
        </form>
       <div>
       {users.map(user) =>
(  <div key =- { user.id}>
  <div>
   <p>Nome: <span>{user.name}</span></p>
   <p>Idade:<span>{user.age}</span></p>
   <p>Email:<span>{user.email}</span></p>
</div>
<button>
  <img src ={Trash}/>

</button>
</div>

)        
       )}
      
      </div>
     
    
  )
}

export default Home
