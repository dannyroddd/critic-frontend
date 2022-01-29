// import React from "react"

// import { useAppState } from "../AppState"

// const Form = (props) => {
   
    
//     const action = props.match.params.action
//     const [formData, setFormData] = React.useState(state[action])

//     const actions = {
//         new: ()=>{
//             return fetch(state.url + "/critics",{
//                 method: "post",
//                 headers: {
//                     "Content-Type": "application/json",
                    
//                 },
//                 body: JSON.stringify(formData),
//             }).then((response)=>response.json())
//         },
//         edit: ()=>{
//             return fetch(state.url + "/critics/" + state.edit.id, {
//                 method: "put",
//                 headers: {
//                     "Content-Type": "application/json",
                    
//                 },
//                 body: JSON.stringify(formData),
//             }).then((response)=>response.json())
//         }
//        }

//     const handleChange = (event) => {
//         setFormData({...formData, [event.target.name]: event.target.value})
//     }
    
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         actions[action]().then((data)=>{
//             props.getCritics()
//             props.history.push("/")
//         })
//     } 
    
//     return (
//      <div className = "form">
//          <form onSubmit={handleSubmit}>
//         <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title"/>
//         <textarea type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description"/>
//         <input type="text" name="food" value={formData.food} onChange={handleChange} placeholder="Food"/>
//         <input type="text" name="overall" value={formData.overall} onChange={handleChange} placeholder="Food"/>
//        <button> <input type="submit" value={action}/> </button>
//          </form>
//      </div>

//     );
//   };
  
//   export default Form;