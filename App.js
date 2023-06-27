import ContactList from './ContactList'; 
//import './App.css';
import { useState } from 'react';
import CreateContact from './CreateContact';
import { Route, Routes } from 'react-router-dom';

    const profiles = [ { id: 1, userID: "1", favoriteMovieID: "1" },
    { id: 2, userID: "2", favoriteMovieID: "1" },
      { id: 3, userID: "4", favoriteMovieID: "5" },
      { id: 4, userID: "5", favoriteMovieID: "2" }, 
      { id: 5, userID: "3", favoriteMovieID: "5" },
        { id: 6, userID: "6", favoriteMovieID: "4" } ];

    const users = { 1: { id: 1, name: "Jane Cruz", userName: "coder" },
    2: { id: 2, name: "Matthew Johnson", userName: "mpage" },
      3: { id: 3, name: "Autumn Green", userName: "user123" },
      4: { id: 3, name: "John Doe", userName: "user123" },
        5: { id: 5, name: "Lauren Carlson", userName: "user123" },
        6: { id: 6, name: "Nicholas Lain", userName: "user123" } };

    const movies = { 1: { id: 1, name: "Planet Earth" },
    2: { id: 2, name: "Selma" },
      3: { id: 3, name: "Million Dollar Baby" }, 
      4: { id: 4, name: "Forrest Gump" }, 
      5: { id: 5, name: "Get Out" } };
      const contacts = [ { "id": "karen",
       "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
         "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}, 
         { "id": "richard",
          "name": "Richard Kalehoff",
           "handle": "richardkalehoff", 
           "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" }, 
           { "id": "tyler",
            "name": "Tyler McGinnis", 
            "handle": "tylermcginnis", 
            "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" } ];

//  function fun(){
//           for(let i=0;i<6;i++)
//           {
//             for (const key in users){
//               return (`Name is: ${users[key].name} Username is: ${users[key].userName}`);
//               }
//           }
           
        
//  }


const App=()=>{
   const dataObj = {
    contacts:[
          { "id": "karen",
            "name": "Karen Isgrigg",
            "handle": "karen_isgrigg",
            "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"}, 
            { "id": "richard",
              "name": "Richard Kalehoff",
              "handle": "richardkalehoff", 
              "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" }, 
              { "id": "tyler",
            "name": "Tyler McGinnis", 
            "handle": "tylermcginnis", 
            "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" }
    ]
   } 
   const [state,setState] = useState(dataObj);
   const removeContact = (contact)=>{
     setState((prevState)=>({
      contacts:  prevState.contacts.filter((c)=>{
        return c.id !== contact.id
      })
     }))
   }

   const addContact=(contact)=>{
    setState((prevState)=>(
      {
        contacts: prevState.contacts.concat(contact)
      }
    ))
   }
   return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={state.contacts}
              onDeleteContact={removeContact}
            />
          }
        />
        <Route path="/create" element={<CreateContact  onAddContact={addContact}/>} />
      </Routes>
     
    </div>
         );   
  }
 

  export default App;
  
  
 
 
   
  
  


// function App() {
//     function handleClick(){
//       let randomNum=Math.floor(Math.random()*3)+1;
//       console.log(randomNum);
//       let userInput=prompt('type a number');
//       alert(`Computer number: ${randomNum},Your guess: ${userInput}`);
//     }
//     return (
//       <div>
//         <h1>Task: Add a button and handle a click event</h1>
//         <button onClick={handleClick}>Guess the number between 1 and 3</button>
//       </div>
//     );
// }

// export default App;
// export default function App(){

//   const [greeting,setGreeting]=useState(
//     {
//       greet: "hello",
//       place: "world"
//     }
//   );
//   console.log(greeting,setGreeting);

//   function updateGreeting(){
//     setGreeting(prevstate =>{
//       return {...prevstate,greet: "World-Wide-Web"}
//     });
//   }
//   return(
//     <div>
//       <h1>{greeting.greet},{greeting.place}</h1>
//       <button onClick={updateGreeting}>Update greeting</button>
//     </div>
//   );
//   }
// const name='nothing';
// export default function InputComponent() {
//   const [inputText,setText]=useState('hello');

//   function handleChange(e){
//     setText(e.target.value);
//   }
//   return(
//     <>

//     <input value={inputText} onChange={handleChange} />
//     <p>You typed: {inputText}</p>
//     <button onClick={()=>setText(name)}> Reset </button>
//     </>
//   );
// }


// export default function RegisterForm() {
//   const [form,setForm] = useState({
//     firstnmae: 'luke',
//     ladtname: 'Jones',
//     email: 'lukejones@gmail.com', 
//   });

//   return(
//     <>
//     <label>
//       first name:
//       <input value={form.firstnmae}
//       onChange={e=>{
//         setForm({
//           ...form,firstnmae: e.target.value
//         });
//       }}/>
//       </label>
//       <label>
//        last name:
//       <input value={form.ladtname}
//       onChange={e=>{
//         setForm({
//           ...form,ladtname: e.target.value
//         });
//       }}/>
//       </label>
//       <label>
//       email:
//       <input value={form.email}
//       onChange={e=>{
//         setForm({
//           ...form,email: e.target.value
//         });
//       }}/>
//       </label>
//       <p>
//         {form.firstnmae}{' '}
//         {form.ladtname}{' '}
//         ({form.email})

//       </p>
//       </>
//   )
// }

// function App(){
//    return(
//     <div>
//       < RegisterForm />
//     </div>
//    )

// }

    
  