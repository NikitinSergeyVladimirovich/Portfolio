import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from "@mui/material/Link";
import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import Card from "./card";

const Footer = () => {
    return ( 
        <Card title={null}>
            <Grid
                item
                xs={1}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Link
                    href="mailto:serega06503043@gmail.com"
                >
                    <IconButton size={'large'}>
                        <AlternateEmailIcon />
                    </IconButton>
                </Link>
            </Grid>
            <Grid
                item
                xs={1}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Link
                    href="https://github.com/NikitinSergeyVladimirovich"
                >
                    <IconButton size={'large'}>
                        <GitHubIcon />
                    </IconButton>
                </Link>
            </Grid>
            <Grid
                item
                xs={1}
                container
                justifyContent="center"
                alignItems="center"
            >
                <Link
                    href="https://t.me/seregaNiki"
                >
                    <IconButton size={'large'}>
                        <TelegramIcon />
                    </IconButton>
                </Link>
            </Grid>
        </Card>
    );
};

export default Footer;