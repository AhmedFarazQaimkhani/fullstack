import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const theme = createTheme();

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          "Welcome to the application."
        </Typography>
      </Container>
    </ThemeProvider>
  );
};
export default Dashboard;
