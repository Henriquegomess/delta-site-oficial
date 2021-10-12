import { Grid, Typography } from "@mui/material";
import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import DonwloadIcon from "@mui/icons-material/Download";
import Footer from "./Components/Footer";

const App: React.FC = (props) => {
  return (
    <>
      <Footer></Footer>
      <Grid
        container
        style={{
          backgroundImage:
            "linear-gradient(to right, #051340, #10338C, #1C53C0)",
          height: "100vh",
          display: "flex",
        }}
      >
        <Grid
          item
          xs
          container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "8rem",
            paddingRight: "8rem",
          }}
        >
          <Typography
            style={{
              fontSize: "5.6rem",
              fontWeight: 700,
              lineHeight: "6.4rem",
              color: "#FFFFFF",
            }}
          >
            Venha fazer parte do time Delta
          </Typography>
          <Typography
            style={{ fontSize: "1.6rem", fontWeight: 400, color: "#FFFFFF" }}
          >
            Fazemos o melhor para você realizar seus sonhos
          </Typography>

          <div style={{ flexDirection: "row" }}>
            <button
              style={{
                backgroundColor: "#019CAD",
                color: "#FFFFFF",
                fontSize: "1.2rem",
                padding: "1rem 4rem",
                border: "none",
                marginTop: "2rem",
                cursor: "pointer",
              }}
            >
              Entrar em contato
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontSize: "1.2rem",
                padding: "1rem 4rem",
                borderWidth: "0.2rem",
                borderColor: "#FFFFFF",
                marginTop: "2rem",
                marginLeft: "2rem",
                cursor: "pointer",
              }}
            >
              Saiba mais
            </button>
          </div>
        </Grid>
        <Grid item xs>
          <img
            width="900px"
            src="/concurso.png"
            alt=""
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "8rem",
              paddingRight: "8rem",
              borderRadius: "50rem",
            }}
          ></img>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#FCFCFC",
          height: "100vh",
          display: "flex",
          padding: "0 10rem",
        }}
      >
        <Grid
          item
          container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "5.6rem",
              fontWeight: 700,
              lineHeight: "6.4rem",
              color: "#051340",
            }}
          >
            Falando um pouco sobre nós!
          </Typography>
          <Typography
            style={{
              fontSize: "1.6rem",
              fontWeight: 400,
              color: "#94A2B3",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquam faucibus magna in ultricies. Etiam pretium maximus massa non
            mattis. Praesent et sapien felis. Donec facilisis metus purus,
            consectetur semper erat mattis cursus.
          </Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              paddingTop: "3.6rem",
            }}
          >
            <div style={{ maxWidth: "400px" }}>
              <img src="/relogio.svg" alt="relogio"></img>
              <Typography
                style={{
                  fontSize: "2rem",
                  color: "#051340",
                  fontWeight: 700,
                  paddingTop: "1rem",
                }}
              >
                24/7
              </Typography>
              <Typography style={{ color: "#94A2B3" }}>
                Estamos focados em ajudar vocês a realizarem o sonho de vocês
              </Typography>
            </div>

            <div style={{ maxWidth: "400px" }}>
              <img src="/pc.svg" alt="relogio"></img>
              <Typography
                style={{
                  fontSize: "2rem",
                  color: "#051340",
                  fontWeight: 700,
                  paddingTop: "1rem",
                }}
              >
                Pensamento digital
              </Typography>
              <Typography style={{ color: "#94A2B3" }}>
                Estamos focados em ajudar vocês a realizarem o sonho de vocês
              </Typography>
            </div>
            <div style={{ maxWidth: "400px" }}>
              <img src="/foguete.svg" alt="relogio"></img>
              <Typography
                style={{
                  fontSize: "2rem",
                  color: "#051340",
                  fontWeight: 700,
                  paddingTop: "1rem",
                }}
              >
                Pesamento além
              </Typography>
              <Typography style={{ color: "#94A2B3" }}>
                Estamos focados em ajudar vocês a realizarem o sonho de vocês
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ backgroundColor: "#F8F9FC", height: "100vh", display: "flex" }}
      >
        <Grid
          item
          container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ maxWidth: 345, maxHeight: 500, marginRight: "4rem" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  pdf
                </Avatar>
              }
              title="Prova ENEM 2020"
              subheader="14 de setembro, 2020"
            />
            <CardMedia
              component="img"
              height="194"
              image="/enem.png"
              alt="Enem 2020"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                O Exame Nacional do Ensino Médio é uma prova de admissão à
                educação superior realizada pelo Instituto Nacional de Estudos e
                Pesquisas Educacionais Anísio Teixeira, autarquia vinculada ao
                Ministério da Educação do Brasil, e foi criada em 1998
                inicialmente para avaliar a qualidade do ensino médio no país.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <a href="/teste.pdf">
                  {" "}
                  <DonwloadIcon />
                </a>
              </IconButton>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, maxHeight: 500, marginRight: "4rem" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  pdf
                </Avatar>
              }
              title="Prova ENEM 2019"
              subheader="14 de setembro, 2020"
            />
            <CardMedia
              component="img"
              height="194"
              image="/enem.png"
              alt="Enem 2020"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                O Exame Nacional do Ensino Médio é uma prova de admissão à
                educação superior realizada pelo Instituto Nacional de Estudos e
                Pesquisas Educacionais Anísio Teixeira, autarquia vinculada ao
                Ministério da Educação do Brasil, e foi criada em 1998
                inicialmente para avaliar a qualidade do ensino médio no país.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <a href="/teste.pdf">
                  {" "}
                  <DonwloadIcon />
                </a>
              </IconButton>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, maxHeight: 500, marginRight: "4rem" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  pdf
                </Avatar>
              }
              title="Prova ENEM 2018"
              subheader="14 de setembro, 2020"
            />
            <CardMedia
              component="img"
              height="194"
              image="/enem.png"
              alt="Enem 2020"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                O Exame Nacional do Ensino Médio é uma prova de admissão à
                educação superior realizada pelo Instituto Nacional de Estudos e
                Pesquisas Educacionais Anísio Teixeira, autarquia vinculada ao
                Ministério da Educação do Brasil, e foi criada em 1998
                inicialmente para avaliar a qualidade do ensino médio no país.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <a href="/teste.pdf">
                  {" "}
                  <DonwloadIcon />
                </a>
              </IconButton>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345, maxHeight: 500, marginRight: "4rem" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  pdf
                </Avatar>
              }
              title="Prova ESA 2020"
              subheader="14 de setembro, 2020"
            />
            <CardMedia
              component="img"
              height="194"
              image="/esa.png"
              alt="ESA 2020"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                A formação da Escola de Sargentos das Armas concede um titulo de
                nível superior (tecnólogo) para o aluno formado. O mesmo poderá
                ser aproveitado em outros concursos que requeiram nível
                superior, como forma de ingresso, por exemplo: Polícia Federal,
                Polícia Rodoviária Federal, Policia Civil e demais.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <a href="/teste.pdf">
                  {" "}
                  <DonwloadIcon />
                </a>
              </IconButton>
              <a href="/teste.pdf">Gabarito</a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
