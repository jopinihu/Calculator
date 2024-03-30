import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const Calculator = styled(Grid)(() => ({
  width: 350,
  margin: "auto",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "28px",
  fontWeight: "bold",
  color: "#b39c4d",
  border: "solid 6px #faedcd",
  borderRadius: "15px",
  fontFamily: "Bradley Hand, cursive",
  backgroundColor: "#b39c4d",
  boxShadow: "2px 2px 15px #b39c4d",
}));
export const Info = styled(Grid)(() => ({
  height: "9vh",
  marginBottom: 2,
  display: "flex",
  fontSize: "40px",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  backgroundColor: "#ebebd3",
  padding: "5px",
}));
export const ButtonTable = styled(Grid)(() => ({
  height: "100%",
  display: "grid",
  backgroundColor: "#ebebd3",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "4px",
  justifyContent: "center",
}));

export const ButtonCalc = styled(Button)(() => ({
  fontSize: "28px",
  backgroundColor: "#d6d5c9",
  borderRadius: "50px",
  fontFamily: "Bradley Hand, cursive",
  color: "#7f4f24",
  margin: "5px",
  "&:hover": {
    backgroundColor: "#b9baa3",
    fontWeight: "bold",
  },
}));
