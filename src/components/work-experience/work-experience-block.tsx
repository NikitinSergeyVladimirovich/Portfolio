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
                    alignItems="start"
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
                            <Grid item xs={12} pb={4}>
                                <Typography variant="h5">{ job.name }</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" pb={4}>{ job.time }</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" pb={4}>{ job.description }</Typography>
                            </Grid>
                            <Grid item xs={12} pb={4}>
                                {job.blockTechnologyShort?.map((item) =>
                                    <>
                                        <Typography variant="h5" pb={2}>{ Object.keys(item)[0] + ': ' + Object.values(item).map(i => i) } </Typography>
                                    </>
                                )}
                            </Grid>
                            <Grid item xs={12} pb={4}>
                                {job.blockTechnologyDescription?.map((item) =>
                                    <>
                                        {item.map(i => 
                                            <Typography variant="h5" pb={2}>{ i }</Typography>
                                        )}
                                    </>
                                )}
                            </Grid>
                            <Grid item xs={12} pb={4}>
                                {job.blockTechnology?.map((item, key) =>
                                    <>
                                        <Typography variant="h5" pb={2}>{`${key += 1}. `}{ Object.keys(item)[0] }</Typography>
                                        { Object.values(item)[0]?.map((i, keys) =>
                                            <>
                                                <Typography variant="h5" pb={2} pl={4}>{`${key}.${keys += 1} `}{ i }</Typography>
                                            </>
                                        )}
                                    </>
                                )}
                            </Grid>
                            <Grid item xs={12} pb={4}>
                                {job.projectsUnderDevelopment?.map((item) =>
                                    <>
                                        <Typography variant="h5" pb={2}>{ '- ' + item }</Typography>
                                    </>
                                )}
                            </Grid>
                        </Grid>
                </Grid>
            )}
        </Grid>
    );
};

export default WorkExperienceBlock;