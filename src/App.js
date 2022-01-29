import React, {useEffect, useState} from "react"
import './App.css';


import { Grid, TextField, Button, Typography, Divider} from '@mui/material';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
function App(props) {
  const initialState = {
    title: "",
        description: "",
        food: "",
        overall: ""

  }
  const [formData, setFormData] = useState(initialState)
  // let reviewData = []
  const [reviewDataArray, setReviewDataArray] = useState([])
const [editMode, setEditMode] = useState(false)
const [editData, setEditData] = useState({})

  const URL = "https://criticbackend.herokuapp.com/apis/v1/"
const [makeFetch, setMakeFetch] = useState(true)
  useEffect(() => {
    if(makeFetch){
         fetch(URL,{
      method: "get",
      headers: {
        "Content-Type": "application/json",
    }
  }).then((response)=>{
    return response.json();
  }).then((data) =>{
    setReviewDataArray(data)
  })
  setMakeFetch(false)
    }
  
   
   
  },[makeFetch])
  

const handleEdit = (index, id) => {
setEditData(reviewDataArray[index])
setEditMode(true)
}
  function handleFieldChange(e){
    const key = e.target.id
      // //formData || editData
   
      if(editMode){
        setEditData({...editData, [key]: e.target.value})
      }else{
        setFormData({...formData, [key]: e.target.value})
      }
    
      
  }
const handleDelete = (id) => {
  fetch( URL + `${id}/`,{
    method: "delete",
    headers: {
      "Content-Type": "application/json",
  },
}).catch(error => {
  console.log(error);
})
setMakeFetch(true)
}
  const handleSubmit = () => {
    console.log("submit")
    console.log(URL + `${editData.id}/`)
  if(editMode){
fetch(URL + `${editData.id}/`,{
      method: "put",
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify(editData),
  }).catch(error => {
    console.log(error);
})
  }else{
    fetch(URL,{
      method: "post",
      headers: {
        "Content-Type": "application/json",
    },
      body: JSON.stringify(formData),
  }).catch(error => {
    console.log(error);
})
  }
    
    
  setMakeFetch(true)
} 
  return (
    <div className="App">
  <h2>Welcome to Restaurant Critics! Open for all to post their Restaurant Reviews!</h2>
<form style = {{width: "50%",
margin: "0 auto", padding: "5px"}}>
<Grid  container  >
    <Grid  item xs = {12}>
      
      <TextField
     placeholder="Restaurant name"
      fullWidth
      id = "title"
      variant = "outlined"
      onChange = {(e)=> {
        handleFieldChange(e)
      }}
      value = {editMode ? editData.title : formData.title}
      />
    </Grid>
    <Grid item xs = {6}>
      <TextField
      placeholder = "What kind of food was served at this place?"
      multiline
      rows = {2}
      maxRows = {10}
      fullWidth
      id = "description"
      variant = "outlined"
      onChange = {(e)=> {
        handleFieldChange(e)
      }}
      value = {editMode ? editData.description : formData.description}
      />
    </Grid>
    <Grid item xs = {6}>
      <TextField
    
        placeholder = "What meal was ordered?"
        fullWidth
        multiline
        rows = {2}
        maxRows = {10}
        
        id = "food"
        variant = "outlined"
        onChange = {(e)=> {
          handleFieldChange(e)
        }}
        value = {editMode ? editData.food : formData.food}
      />
    </Grid>
    <Grid item xs = {12}>
      <TextField
      fullWidth
       placeholder = "Tell us what you think...."
       multiline
       rows = {4}
       maxRows = {10}
       
       id = "overall"
       variant = "outlined"
       onChange = {(e)=> {
         handleFieldChange(e)
       }}
       value = {editMode ? editData.overall : formData.overall}
      />
    </Grid>
    <Button
    onClick = {() => {
      console.log(URL + `${editData.id}/`)
      handleSubmit()
    }}
    > {editMode ? "Edit" : "Submit"}</Button>
  {editMode ? <Button style = {{color : "red"}}onClick = {()=> {
    setEditMode(false)
  }}>Cancel</Button> : null}
</Grid>

</form>
<Grid container>
  < Grid container>
    <Grid item xs= {2}>
      Restaurant Name
      </Grid>
      <Grid item xs= {2}>
      Food Style
      </Grid>
      <Grid item xs= {2}>
     Meal Ordered
      </Grid>
      <Grid item xs= {5}>
      Review
      </Grid>
       <Divider/>
  </Grid>
 
{reviewDataArray.map((review, index) =>{
  return(
    <Grid item xs = {12}>
      <Grid container>
        <Grid item xs = {2}
         style = {{borderStyle: "solid",
        borderWidth: "1px"
     }}>
          <Typography> {review.title}</Typography>
        </Grid>
        <Grid item xs = {2} style = {{borderStyle: "solid",
        borderWidth: "1px"
     }}>
          <Typography>{review.description}</Typography>
        </Grid>
        <Grid item xs = {2} style = {{borderStyle: "solid",
        borderWidth: "1px"
     }}>
         <Typography>{review.food}</Typography>
        </Grid>
        <Grid item xs = {5} style = {{borderStyle: "solid",
        borderWidth: "1px"
     }}>
          <Typography>{review.overall}</Typography>
        </Grid>
        <Grid item xs = {1} style = {{borderStyle: "solid",
        borderWidth: "1px"
     }}>
       <EditIcon onClick = {()=> {
            handleEdit(index, review.id)
          }}/>
          <DeleteForeverIcon onClick = {(e)=> {
            handleDelete(review.id)
          }} style = {{color: "red"}}/>
          
        </Grid>
      </Grid>
      
      
    </Grid>
     

  )
})}

</Grid>

</div>
  )
}
export default App;