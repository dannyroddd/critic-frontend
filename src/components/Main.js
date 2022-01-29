
   
// import React from "react"

// const Main = (props) => {

//     const [critics, setCritics] = React.useState(null)

//     const getCritic = async () => {
//         const response = await fetch(props.url + 'critic/', {
//             method: "get",
//             headers: {
                
//             }
//         })
//         const data = await response.json()
//         console.log(data)
//         setCritics(data)
//     }

//     React.useEffect(() => getCritic(), [])

//     const newCritic = React.useRef(null)

//     const handleNew = async(event) => {
//         const response = await fetch(props.URL + 'critics/', {
//             method: "post",
//             headers: {
                
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({item: newCritic.current.value})
//         })
// //instead of newcritic use formData
//         getCritic()
//         newCritic.current.value = ""
//     }

// return <>
// <h1>critics</h1>
// <input type="text" name="newCritic" ref={newCritic}/>
// <button onClick={handleNew}>New Critic</button>
// <ul>
//     {critics && critics.length > 0 ? critics.map((critic => <h1>{critic.item}</h1>)) : null}
// </ul>
// </>
// }

// export default Main