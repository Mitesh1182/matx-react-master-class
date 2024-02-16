import { Box, Button, Card, Container, Grid, Icon } from '@mui/material'
import { Breadcrumb } from 'app/components'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobrequest } from 'slice/recruiter/createjobslice'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { putjobrequest, updatejobrequest } from 'slice/recruiter/updatejob'
import { toast } from 'react-toastify'
 function ListJobs(){
  const {data, isloading, error ,listData} = useSelector((y)=>y.jobs);
  console.log(listData);
     const dis = useDispatch()

    useEffect(()=>{
      dis(getJobrequest(1))
    },[])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [opendelete, setOpenDelete] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleClickOpenDelete = () => {
      setOpenDelete(true);
    };
// update jobs start ==----------------------->
const updateData = useSelector((y)=>y.update.data);
const navigate = useNavigate()


console.log(updateData);
const[update, setUpdate]=useState({
  dateOfPosting:"",
  maxApplicants:"",
  maxPositions: ""
});
useEffect(()=> {

  dis(updatejobrequest())
},[])

useEffect(()=> {

  setUpdate(updateData)
},[updateData])
const handleInput = (key, value) => {
  setUpdate({
    ...update,
    [key]: value,
  });
  
};
const handleSubmit =(e)=>{
  e.preventDefault()
  dis (putjobrequest(update))
  // navigate("/Recruiter/Profile")
  // toast.success("User information updated successfully")

}
// update jobs end ==----------------------->
    const handleCloseDelete= () => {
      setOpenDelete(false);
    };
  
  return (
    
    <Container style={{marginBottom:'30px'}} >
      <Box style={{marginTop:"15px"}} className="breadcrumb" >
        <Breadcrumb  routeSegments={[{ name: 'ListJobs', path: '/Recruiter' }, { name: 'ListJobs' }]}  />
      </Box>
      <Grid item style={{marginTop: "20px", marginBottom: "20px"}}>
        <Typography variant="h3" style={{display:'flex', justifyContent:'center', fontFamily:"serif"}}>My Job</Typography><hr style={{width:"10%", borderColor:"rgb(25 118 210)"}}/>
      </Grid>
      { 
        <div style={{gap:"15px"}}>
          {
            listData?.map((v) => {
              return (
                <Card sx={{ minWidth: 275 }} style={{marginTop:"20px", alignItems:"center"}} >
       <div style={{display:"flex", justifyContent:"space-between"}}>
      <CardContent >
        <Typography variant="h5" style={{color:"#222944",alignItems:"center"}} component="div" >
        <Icon fontSize="large" style={{color:"rgb(25 118 210)"}}>{"business_center"}</Icon> {v.title}
        </Typography><br/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <b>Date :</b> {v.dateOfPosting}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <b> User ID </b>: {v.userId}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <b>Jobtype</b> : {v.jobType}
        </Typography>
        <Typography variant="body2">
        Salary : {v.salary}
        </Typography>
      
      </CardContent>
      
      <CardActions style={{display:"grid"}} >
         <Link to="/Recruiter/ViewApplicaton"><Button style={{backgroundColor:"#222944", color:"white", padding:"44px 39px"}} size="small">View Application</Button></Link>
        <Button onClick={handleClickOpen} style={{backgroundColor:"rgb(25 118 210)", color:"white", margin:"0px 0px"}} size="small">Update</Button>
          <Button onClick={handleClickOpenDelete} style={{backgroundColor:"#4791db",  color:"white", margin:"0px 0px"}} size="small">Delete</Button>
      </CardActions>
      </div>
               </Card>
                
              )

            })
          }
        </div>
      }
      {/* update modal start  */}

       <React.Fragment >
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
        
      >
        <DialogTitle style={{textAlign:"center"}} >Update Details</DialogTitle>
        <DialogContent  >
        <TextField

                    type="datetime-local"           
                    variant="outlined"
                    value={update?.dateOfPosting}
                    onChange={(event) =>
                      handleInput("dateOfPosting", event.target.value)
                    }
                    fullWidth
                    style={{marginTop:"10px"}}
                  />
                   <TextField
                    label="Maximum Number Of Applicants"
                    type="number"
                    variant="outlined"
                    value={update?. maxApplicants}
                    onChange={(event) => {
                      handleInput("maxApplicants", event.target.value);
                    }}
                    style={{marginTop:"10px"}}
                    fullWidth
                  />
                   <TextField
                    label="Positions Available"
                    type="number"
                    variant="outlined"
                    value={update?.maxPositions}
                    onChange={(event) => {
                      handleInput("maxPositions", event.target.value);
                    }}
                    style={{marginTop:"10px"}}
                    fullWidth
                  />
        </DialogContent>
        <DialogActions style={{display:"flex", justifyContent:"space-around", marginBottom:"14px",    padding: "16px 37px"}}>
          <Button onClick={handleClose} style={{backgroundColor:"red", color:"white", padding:"7px 27px"}}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit} style={{backgroundColor:"#222944", color:"white", padding:"7px 27px"}}>Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
   {/* update modal end  */}
    {/* delete modal start  */}
    <React.Fragment style={{width:"344px", height:"auto"}} >
    {/* style={{padding:"50px 50px"}} */}
      <Dialog
        fullScreen={fullScreen}
        open={opendelete}
        onClose={handleCloseDelete}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" style={{textAlign:"center",padding:"20px 80px"}}>
        Are you Sure?
        </DialogTitle>
       
        <DialogActions style={{display:"flex", justifyContent:"space-around"}}>
          <Button onClick={handleCloseDelete} style={{backgroundColor:"red", color:"white", padding:"6px 18px"}} autoFocus>
            DELETE
          </Button>
          <Button autoFocus onClick={handleCloseDelete} style={{backgroundColor:"#222944", color:"white", padding:"6px 18px"}}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    {/* delete modal end  */}
</Container>

  )
}
export default ListJobs;


