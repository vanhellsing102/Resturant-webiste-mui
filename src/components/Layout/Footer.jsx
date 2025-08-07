import { Box, Container, Typography, Link, Grid, IconButton, Stack } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <Box sx={{ backgroundColor: "#0d47a1", color: "#fff", py: 4, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 2, md: 0 } }}>
            <Typography variant="h6" gutterBottom>
              MyRestaurant
            </Typography>
            <Typography variant="body2">
              Quality food, delivered with care. Visit us or order online!
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" }, mb: { xs: 2, md: 0 } }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" underline="hover" color="inherit" display="block">
              Home
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Menu
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              Contact
            </Link>
            <Link href="#" underline="hover" color="inherit" display="block">
              About
            </Link>
          </Grid>

          <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1} justifyContent={{ xs: "center", md: "flex-start" }}>
              <IconButton color="inherit" href="#">
                <FaFacebookF />
              </IconButton>
              <IconButton color="inherit" href="#">
                <FaTwitter />
              </IconButton>
              <IconButton color="inherit" href="#">
                <FaInstagram />
              </IconButton>
              <IconButton color="inherit" href="#">
                <FaLinkedinIn />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} MyRestaurant. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
    </div>   
  );
};

export default Footer;
