import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`}>
      <Box
        component="img"
        alt="Adflix Logo"
        src="https://adflixroc.com/wp-content/uploads/AdFlix_4c_w-2048x596.png"
        width={147}
        height={65}
        sx={{
          ...sx,
        }}
      />
    </RouterLink>
  );
}
