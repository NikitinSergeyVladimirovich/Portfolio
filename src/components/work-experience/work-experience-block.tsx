import React from "react";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { IWorkExperience } from '../../types/work';

interface IWorkExperienceBlockProps {
    jobs: IWorkExperience[];
}

const WorkExperienceBlock = ({
    jobs,
}: IWorkExperienceBlockProps) => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            width={1}
        >
            {jobs.map(job =>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    xs={12}
                    p={4}
                >
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        item
                        xs={12}
                        md={12}
                        xl={6}
                        pb={2}
                    >
                        <img
                            src={job.logo}
                            alt=""
                            width={"300px"}
                            height={"200px"}
                            style={{
                                padding: '20px',
                                objectFit: "contain",
                                border: '2px solid',
                                borderColor: '#EEE',
                                borderRadius: 15,
                            }}
                        />
                    </Grid>

                        <Grid
                            xs={12}
                            md={12}
                            xl={6}
                            container
                            justifyContent="center"
                            alignItems="center"
                            item
                        >
                            <Grid item xs={12}>
                                <Typography variant="h5">{ job.time }</Typography>
                            </Grid>
                            <Grid item xs={12} py={2}>
                                <Typography variant="h5">{ job.name }</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" pb={2}>{ job.description }</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5">Используемые технологии: { job.technology.join(", ") }</Typography>
                            </Grid>
                        </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default WorkExperienceBlock;