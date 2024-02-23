import React from "react";
import Grid from '@mui/material/Grid';
import { ISkillCategory } from '../../types/skills';
import { Typography } from '@mui/material';

interface ISkillBlockProps {
    categories: ISkillCategory[];
}

const SkillBlock = ({ categories }: ISkillBlockProps) => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
        >
            {categories.map(category =>
                <Grid
                    item
                    container
                    xs={12}
                    sm={12}
                    md={12}
                    lg={6}
                    xl={6}
                    key={category.name}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        container
                        xs={12}
                        key={category.name}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        p={4}
                    >
                        <Typography variant="h5">{category.name}</Typography>
                    </Grid>
                    {category.items.map(item =>
                            <Grid item key={item.name} p={2}>
                                <Grid
                                    item
                                    sx={{
                                        border: '2px solid',
                                        borderColor: '#EEE',
                                        borderRadius: 5,
                                    }}
                                >
                                    <img
                                        src={item.logo}
                                        alt=""
                                        style={{
                                            margin: '10px',
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    container
                                    justifyContent="center"
                                    alignItems="center"
                                    pt={2}
                                >
                                    <Typography variant="body2">{item.name}</Typography>
                                </Grid>
                            </Grid>
                        )
                    }
                </Grid>
            )}
        </Grid>
    );
};

export default SkillBlock;