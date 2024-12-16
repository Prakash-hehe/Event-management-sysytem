import { fontFamily } from '@mui/system'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

function Mailing({user}) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'mailingName',
          headerName: 'Name',
          width: 150,
          editable: false,
        },
        {
          field: 'mailingEmail',
          headerName: 'Email',
          width: 250,
          editable: false,
        },
      
      ];

      const [rows,setRows]=useState();
      const [name,setName]=useState();
      const [email,setEmail]=useState();
      const [rowId,setId]=useState(1);

      useEffect(() => {

        axios.get('http://localhost:3001/mailing').then(response=>{
          console.log(response.data)
          var maillist = response.data.filter(item => item.username === user.username)
          setRows(maillist)
          console.log(rows.length)
      })
      }, [])

      const handleAdd = ()=>{
        const item = {id : rows.length+1 , username : user.username, mailingName: name , mailingEmail : email}
        setId(rows.length+1)
         axios.post('http://localhost:3001/mailing',item).then(response=>{
          console.log(response.data, " added successfully")
          setRows(rows.concat(item))
         })
      }

      if(!rows)
      return(
        <div>Loading...</div>
      )
      

  return (
    <div style={{marginTop:30, fontFamily: "Helvetica"}}>
        <h2 style={{color:'GrayText'}}>MAILING LIST</h2>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }, marginTop:4
      }}
      noValidate
      autoComplete="off"
    >
        <TextField onChange={e => setName(e.target.value)} size="small" id="outlined-basic" label="Name" variant="outlined" />
        <TextField onChange={e => setEmail(e.target.value)} size="small" id="outlined-basic" label="Email" variant="outlined" />
        <Button onClick={handleAdd} variant="contained">add</Button>
        </Box>

         
        <Box sx={{ height: 400, width: '80%',margin:"auto" ,marginTop:5}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>

    </div>
  )
}

export default Mailing