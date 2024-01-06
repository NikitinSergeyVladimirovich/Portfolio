import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type Props = {
    title: string|null;
    children: ReactNode,
}

const Card = ({
    title,
    children,
}: Props) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: 'rgb(255, 255, 255, 0.7)',
                    borderRadius: 3,
                }}
                xs={10}
                md={10}
                lg={8}
                xl={8}
                py={2}
            >
                <Grid item pb={2}>
                    <Typography variant="h4">{ title }</Typography>
                </Grid>
                { children }
            </Grid>
        </Box>
    );
};

export default Card;