
import { useAuth } from "../hooks/useAuth";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  CircularProgress, // Компонент для анимации загрузки
} from "@mui/material";

const AuthModal = ({ defaultView = "login" }) => {
  const { isOpen, handleOpen, handleClose, view, setView, handleFormSubmit, isLoading } = useAuth();
 

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{
          color: "white",
          border: "1px solid white",
          width: "180px",
          transition: "opacity 0.2s ease-in-out",
          "&:hover": {
            opacity: 0.8,
            backgroundColor: "transparent",
          },
          "@media (min-width: 1024px)": {
            color: "inherit",
            width: "auto",
            "&:hover": {
              opacity: 0.8,
              backgroundColor: "transparent",
            },
          },
        }}
      >
        {defaultView === "login" ? "Login" : "Sign Up"}
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "black",
            opacity: 0.9,
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2, color: "white" }}>
            {view === "login" ? "Login" : "Sign Up"}
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.7)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "orange",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "rgba(255, 255, 255, 0.7)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.7)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "orange",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                }}
              />
              {view === "signup" && (
                <TextField
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "rgba(255, 255, 255, 0.7)",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.7)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "orange",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },
                  }}
                />
              )}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading} // Блокируем кнопку во время загрузки
                sx={{
                  bgcolor: "orange",
                  color: "black",
                  "&:hover": {
                    bgcolor: "darkorange",
                  },
                  "&.Mui-disabled": {
                    bgcolor: "rgba(255, 165, 0, 0.5)", // Полупрозрачный оранжевый для disabled
                  },
                }}
              >
                {isLoading ? ( // Если загрузка, показываем индикатор
                  <CircularProgress size={24} sx={{ color: "black" }} />
                ) : (
                  view === "login" ? "Login" : "Sign Up"
                )}
              </Button>
            </Stack>
          </form>
          <Typography sx={{ mt: 2, textAlign: "center", color: "white" }}>
            {view === "login" ? "Don't have an account? " : "Already have an account? "}
            <Link
              component="button"
              onClick={() => setView(view === "login" ? "signup" : "login")}
              sx={{ 
                cursor: "pointer",
                color: "orange",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              {view === "login" ? "Sign Up" : "Login"}
            </Link>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AuthModal;