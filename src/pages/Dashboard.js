// import React, { useState } from "react"
// import { useAppState } from "../AppState"
// import { Route, Link } from "react-router-dom"
// import Form from "../components/Form"


// const Dashboard = (props) => {

//     const {state, dispatch} = useAppState()
//     const { url, critics} = state

//     const getCritics = async() => {
//         const response = await fetch(url + "/critics/", {
//             method: "get",
//             headers: {
//                 
//             }
//         })
//         const fetchedCritics = await (await response).json()
//         dispatch({type: "getCritics", payload: fetchedCritics})
//     }

//     React.useEffect(() => {getCritics()}, [])

   

// const loaded = () => {

   
    
//     console.log(state)

//     return(
//     <div className = ">
       
//     <h2>
//         critics
//     </h2>
//     <Link to="/new">
//         <button>
//             New Critic
//         </button>
//     </Link>
//     <Route path="/:action" render={(rp)=> <Form {...rp} getCritics={getCritics}/>}/>
//     <ul>
//     {state.critics.map(critic => (
//         <div className = "critic" key={critic.id}>
//             <h2>
//                 {critic.title}
//             </h2>
//             <h4>
//                 {critic.description}
//             </h4>
//             <h4>
//                 {critic.food}
//             </h4>
         
//         <button onClick={()=>{
//         dispatch({type: "select", payload: critic})
//         props.history.push("/edit")
//         }}>
//             Edit Critic
//         </button>

//         <button onClick={()=>{
//             fetch(url + "/critics/" + critic.id, {
//                 method: "delete",
//                 headers: {
//                     
//                 }
//             })
//             .then(() => getCritics())
//         }}>
//             Delete
//         </button>

//         </div>
//     ))}
//     </ul>
    
//     </div>
// )}

//     return critics ? loaded() : <h1>LOADING...</h1>
// }

// export default Dashboard 