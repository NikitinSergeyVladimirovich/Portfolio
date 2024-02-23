import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import React from "react";
import Card from "./card";
import man from "../images/man.svg";

const AboutMe = () => {
    return (
        <Card
            title={null}
        >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                px={4}
                py={10}
            >
                <Grid
                    item
                    xs={12}
                    md={12}
                    xl={6}
                    pb={2}
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item pb={3}>
                        <Typography
                            variant='h4'
                            align='center'
                        >
                            Привет, <br></br>
                            меня зовут Сергей.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='h5'
                            align='center'
                            pb={2}
                        >
                            Познакомился с миром IT еще в школе, к сзнательному возрасту <br></br> и я понял, что мне это нравится.
                        </Typography>
                        <Typography
                            variant='h5'
                            align='center'
                        >
                            С тех пор я изучил множество языков, <br></br> фреймворков, подходов и методик <br></br> разработки ПО и теперь готов <br></br> применять свои знания.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={12}
                    xl={6}
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <img
                           src={man}
                           alt=""
                           style={{
                               margin: '10px',
                           }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

export default AboutMe;