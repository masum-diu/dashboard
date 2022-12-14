import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import FusePageSimple from "@fuse/core/FusePageSimple";
import DemoContent from "@fuse/core/DemoContent";
import Button from "@mui/material/Button";
import {
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { borderRadius } from "@mui/system";

const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  "& .FusePageSimple-toolbar": {},
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
}));

function ExamplePage(props) {
  const { t } = useTranslation("examplePage");
  const [age, setAge] = useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Root
      header={<div className="p-24">{/* <h4>{t("TITLE")}</h4> */}</div>}
      content={
        <div className="p-24" style={{ width: "100%" }}>
          {/* <Button variant="contained" color="primary">
            local
          </Button> */}
          {/* <button style={{ backgroundColor: "red" }}>top</button>
          <br />
          <DemoContent /> */}
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              color="initial"
            >
              Deals
            </Typography>
            <Stack direction={"row"} spacing={1} alignItems="center">
              <Button
                variant="contained"
                sx={{ borderRadius: "0" }}
                size="small"
              >
                Export
              </Button>
              <Button
                variant="contained"
                color="info"
                sx={{ borderRadius: "0" }}
                size="small"
              >
                Add deal
              </Button>
            </Stack>
          </Stack>
          <Stack direction={"row"} mt={2} spacing={1}>
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              variant="filled"
              size="small"
              placeholder="Search..."
              startIcon={<BiSearch />}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              size="small"
              onChange={handleChange}
              sx={{ width: "20rem" }}
            >
              <MenuItem value={10}>All deals</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              size="small"
              onChange={handleChange}
              sx={{ width: "12rem" }}
            >
              <MenuItem value={10}>Filters</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontWeight: "bold",
                padding: ".8rem",
                borderRadius: "50%",
                backgroundColor: "#FF6600",
                display: "flex",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <i>JK</i>
            </Typography>
            <Stack
              direction={"row"}
              justifyContent="flex-end"
              alignItems={"flex-end"}
              width="100%"
            >
              <Typography variant="body1" color="initial">
                3 deals (??? 26000,00)
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} mt={2} spacing={1}>
            <Paper
              sx={{ width: "20rem", borderRadius: "5px", height: "70px" }}
              elevation={2}
            >
              <ListItemText
                sx={{
                  ml: 1,
                  mt: 1,
                }}
                primary={<>0</>}
                secondary={<>WITHOUT ACTIVITY</>}
              />
            </Paper>
            <Paper
              sx={{ width: "20rem", borderRadius: "5px", height: "70px" }}
              elevation={2}
            >
              <ListItemText
                sx={{
                  ml: 1,
                  mt: 1,
                }}
                primary={<>0</>}
                secondary={<>OLDER THAN 3 MONTHS</>}
              />
            </Paper>
            <Paper
              sx={{ width: "20rem", borderRadius: "5px", height: "70px" }}
              elevation={2}
            >
              <ListItemText
                sx={{
                  ml: 1,
                  mt: 1,
                }}
                primary={<>0</>}
                secondary={<>WITHOUT CLOSING DATE</>}
              />
            </Paper>
          </Stack>
          <Stack direction={"row"} mt={2} spacing={1}>
            <Paper
              sx={{
                width: "20rem",
                borderRadius: "5px",
                height: "100vh",
                backgroundColor: "#EFEEF2",
              }}
              elevation={2}
            >
              <Stack direction={"row"} justifyContent="space-between" p={1}>
                <Typography variant="body1" color="initial">
                  Num(0)
                </Typography>
                <Typography variant="body1" color="initial">
                  ??? 0,00
                </Typography>
              </Stack>
            </Paper>
            <Paper
              sx={{
                width: "20rem",
                borderRadius: "5px",
                height: "100vh",
                backgroundColor: "#EFEEF2",
              }}
              elevation={2}
            >
              <Stack direction={"row"} justifyContent="space-between" p={1}>
                <Typography variant="body1" color="initial">
                  Num(0)
                </Typography>
                <Typography variant="body1" color="initial">
                  ??? 0,00
                </Typography>
              </Stack>
              <Paper
                sx={{ width: "19rem", margin: "0 auto", borderRadius: "5px" }}
                elevation={2}
                p={1}
              >
                <Stack
                  p={1}
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <Stack>
                    <Typography
                      variant="body1"
                      color="initial"
                      fontWeight={"bold"}
                    >
                      Bedrijf(test data)
                    </Typography>

                    <Typography variant="body1" color="initial">
                      Open deal(test data)
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      fontWeight: "bold",
                      padding: ".5rem",
                      borderRadius: "50%",
                      backgroundColor: "#FF6600",
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    <i>JK</i>
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="flex-end"
                  alignItems={"flex-end"}
                  width="100%"
                  p={1}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    fontWeight={"bold"}
                  >
                    ??? 100000,00
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  p={1}
                >
                  <Button variant="outlined" color="primary" size="small">
                    12/08/2022
                  </Button>
                  <Button variant="outlined" color="primary" size="small">
                    30%
                  </Button>
                </Stack>
              </Paper>
            </Paper>
            <Paper
              sx={{
                width: "20rem",
                borderRadius: "5px",
                height: "100vh",
                backgroundColor: "#EFEEF2",
              }}
              elevation={2}
            >
              <Stack direction={"row"} justifyContent="space-between" p={1}>
                <Typography variant="body1" color="initial">
                  Num(0)
                </Typography>
                <Typography variant="body1" color="initial">
                  ??? 0,00
                </Typography>
              </Stack>
              <Paper
                sx={{ width: "19rem", margin: "0 auto", borderRadius: "5px" }}
                elevation={2}
                p={1}
              >
                <Stack
                  p={1}
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <Stack>
                    <Typography
                      variant="body1"
                      color="initial"
                      fontWeight={"bold"}
                    >
                      Bedrijf(test data)
                    </Typography>

                    <Typography variant="body1" color="initial">
                      Open deal(test data)
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      fontWeight: "bold",
                      padding: ".5rem",
                      borderRadius: "50%",
                      backgroundColor: "#FF6600",
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    <i>JK</i>
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="flex-end"
                  alignItems={"flex-end"}
                  width="100%"
                  p={1}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    fontWeight={"bold"}
                  >
                    ??? 100000,00
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  p={1}
                >
                  <Button variant="outlined" color="primary" size="small">
                    12/08/2022
                  </Button>
                  <Button variant="outlined" color="primary" size="small">
                    10%
                  </Button>
                </Stack>
              </Paper>
            </Paper>
            <Paper
              sx={{
                width: "20rem",
                borderRadius: "5px",
                height: "100vh",
                backgroundColor: "#EFEEF2",
              }}
              elevation={2}
            >
              <Stack direction={"row"} justifyContent="space-between" p={1}>
                <Typography variant="body1" color="initial">
                  Num(0)
                </Typography>
                <Typography variant="body1" color="initial">
                  ??? 0,00
                </Typography>
              </Stack>
            </Paper>
            <Paper
              sx={{
                width: "20rem",
                borderRadius: "5px",
                height: "100vh",
                backgroundColor: "#EFEEF2",
              }}
              elevation={2}
            >
              <Stack direction={"row"} justifyContent="space-between" p={1}>
                <Typography variant="body1" color="initial">
                  Num(0)
                </Typography>
                <Typography variant="body1" color="initial">
                  ??? 0,00
                </Typography>
              </Stack>
              <Paper
                sx={{ width: "19rem", margin: "0 auto", borderRadius: "5px" }}
                elevation={2}
                p={1}
              >
                <Stack
                  p={1}
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                >
                  <Stack>
                    <Typography
                      variant="body1"
                      color="initial"
                      fontWeight={"bold"}
                    >
                      Bedrijf(test data)
                    </Typography>

                    <Typography variant="body1" color="initial">
                      Open deal(test data)
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      fontWeight: "bold",
                      padding: ".5rem",
                      borderRadius: "50%",
                      backgroundColor: "#FF6600",
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                    }}
                  >
                    <i>JK</i>
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="flex-end"
                  alignItems={"flex-end"}
                  width="100%"
                  p={1}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    fontWeight={"bold"}
                  >
                    ??? 100000,00
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent="space-between"
                  alignItems={"center"}
                  p={1}
                >
                  <Button variant="outlined" color="primary" size="small">
                    Won
                  </Button>
                  <Button variant="outlined" color="primary" size="small">
                    100%
                  </Button>
                </Stack>
              </Paper>
            </Paper>
          </Stack>
        </div>
      }
      scroll="content"
    />
  );
}

export default ExamplePage;
