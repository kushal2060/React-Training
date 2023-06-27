import { useState } from "react";
import { Link } from "react-router-dom";
function ContactList(props){
   const [state,setState] = useState({ query: ''})
   const {contacts,onDeleteContact}=props;
   const {query} = state;

   
 
   const updateQuery= (query)=>{
    setState(()=>({
      query: query.trim()
    }

    )

    )
   } 

   let showingContacts = query ===''
   ? contacts :contacts.filter((c)=>(
    c.name.toLowerCase().includes(query.toLowerCase())//includes looks in all name
   ))
  
   const clearQuery=()=>{
    updateQuery('');
   }
  return(
       <div className="list-contacts">

        <div className="list-contacts-top">
          <input className="search-contacts"
          type="text"
          placeholder="Search contacts"
          value={query}
          onChange={(event)=> updateQuery(event.target.value)}></input>
          <Link to='/create' className='add-contact'>Add contact</Link>
        </div>
        {
          showingContacts.length !== contacts.length && (
            <div className="showing-contacts">
              <span>Now showing {showingContacts.length} of {contacts.length}</span>
              <button onClick={clearQuery}> Show all</button> 

            </div>
          )
        }

        <ol className="contact-list">
      {showingContacts.map((contact)=>(
        <li className="contact-list-item"
        key={contact.id}
        >
         <div
          className="contact-avatar"
          style={{
            background: `url(${contact.avatarURL})`
          }}
         ></div>
         <div className="contact-details">
          <p className="">{contact.name}</p>
          <p className="">{contact.handle}</p>

         </div>
         <button 
         onClick={()=>{onDeleteContact(contact)}}
         className="contact-remove">Remove</button>
        </li>
      ))
      }
      
    </ol>
    
       </div>
    
    
    )}
  


export default ContactList;
