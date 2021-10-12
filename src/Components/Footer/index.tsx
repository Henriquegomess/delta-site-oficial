import {
  createStyles,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const Footer: React.FC = (props) => {
  return (
    <footer>
      <Grid container style={{ position: "fixed", backgroundColor: "#051340" }}>
        <Grid
          item
          sm={12}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item sm={6} md={6} lg={4} container alignItems="center">
            <img
              //   width={120 * 0.6}
              //   height={100 * 0.6}
              src="/logo.png"
              alt="logo delta"
              style={{ paddingLeft: "8rem" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
