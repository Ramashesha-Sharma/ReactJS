import { Button, Container, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";
import './Footer.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email'
export default function Footer() {

  return(
    <Box bgcolor="lightblue" color="grey" className="footerBox">
      <Container maxWidth="1g">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} >
            <Box borderBottom={1}>Contact Us</Box>
            <br/>
            <Box>
            
              <Typography>
              <Button startIcon={<EmailIcon />} color="primary" variant="contained">
                abc@gmail.com</Button>
              </Typography>
            </Box>
            <br/>
            <Box>
               <Typography>
               <Button startIcon={<PhoneIcon />} color="primary" variant="contained">
                9876543210</Button>
              </Typography>
            </Box>

          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>About US</Box>
            <Box>
                <p>This project is to store the student details and perform update and delete operations on it.</p>
            </Box>

          </Grid>


          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>Links</Box>
            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

            <Box>
              <Link href="/students/add" color="inherit">
                AddStudent
              </Link>
            </Box>

            </Grid>

        </Grid>

        <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}} >
          Student CRUDapp@2022
        </Box>
      </Container>
    </Box>
  );
  
}