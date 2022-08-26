import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import { SearchBar } from ".";

const Navbar = () => {
  return (
    <Stack
      alignItems="center"
      p={2}
      direction="row"
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img src={logo} alt="Logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
