import NavBar from "./NavBar";
import { Container, Paper, Box, Typography, Avatar } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import styles from "./NavBar.module.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <>
      <NavBar regisTitle={"Register"} />
      <Container maxWidth="sm" component={Paper} sx={{mt:1}}>
        <Box
          sx={{
            textAlign: "center",
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ marginY: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" sx={{ marginY: 1 }}>
            Login
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} className={styles.myForm}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required.",
                maxLength: 20,
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email is incorrect",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters.",
                },
              })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
            <br />
            
              <button type="submit">Register</button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
