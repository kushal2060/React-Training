import serialize from "form-serialize";
import { Link } from "react-router-dom";

function CreateContact(props){

  const handleSubmit=(event)=>{
    event.preventDefault();
    let obj = serialize(event.target,{hash: true});
    
    console.log(obj);
    props.onAddContact(obj);
    
  }

  return(
    <div>
      <Link className="close-create-contact" to='/'>Close</Link>
       <form onSubmit={handleSubmit} className="create-contact-form">
         <div className="create-contact-details">
         <input type="text" name="name" placeholder="Name" /> 
         <input type="text" name="handle" placeholder="Handel" />  
         <button>Add contact</button>
         </div>
         </form>
    </div>
  )
}
export default CreateContact;