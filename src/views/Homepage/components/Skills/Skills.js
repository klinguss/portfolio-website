/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Quizmify from './svg/Quizmify.png';
import todolist from './svg/todolist.png';
import BusinessEdTech from './svg/BusinessEdTech.png';
import Portfolio from './svg/Portfolio.png';

const mock = [
  {
    image: <img src={Portfolio.src}></img>,
    description: 'A portfolio website using Material UI with NextJS ',
    title: 'Portfolio Website',
    color: '#183167',
    button: 'GitHub',
    Link: 'https://github.com/klinguss/portfolio-website',
  },
  {
    image: <img src={Quizmify.src}></img>,
    description:
      'Create user-friendly website for generating AI multiple choice and open-ended questions with keep track the common topics using TypeScript, TailwindCSS, NextAuth and OpenAi',
    title: 'AI Quizmify',
    color: '#CE371F',
    button: 'GitHub',
    Link: 'https://github.com/klinguss/quizmify',
  },
  {
    image: <img src={todolist.src} />,
    description: 'Simple to-do list ',
    title: 'To-Do List',
    button: 'Visit',
    color: '#ECB3BE',
    Link: 'https://todolist-b8ul.onrender.com/',
  },
  {
    image: <img src={BusinessEdTech.src}></img>,
    description: 'Coming soon',
    title: 'EdTech Web',
    button: 'Coming Soon',
    color: '#000000',
  },
];

const Folio = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 2,
                '&:hover': {
                  '& img': {
                    transform: 'scale(1.2)',
                  },
                },
              }}
            >
              <Box
                height={1}
                width={1}
                src={item.image}
                alt="..."
                minHeight={{ xs: 400, md: 600 }}
                sx={{
                  transition: 'transform .7s ease !important',
                  transform: 'scale(1.0)',
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.3)' : 'none',
                }}
              >
                {item.image}
              </Box>
              <Box
                position={'absolute'}
                bottom={0}
                left={0}
                right={0}
                padding={3}
                sx={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${item.color})`,
                }}
              >
                <Typography
                  variant={'h4'}
                  fontWeight={700}
                  sx={{ color: 'common.white' }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant={'h6'}
                  fontWeight={700}
                  sx={{ color: 'common.white' }}
                  gutterBottom
                >
                  {item.description}
                </Typography>
                <Button
                  size={'large'}
                  variant={'contained'}
                  color={'secondary'}
                  target="_blank"
                  component="a"
                  href={item.Link}
                >
                  {item.button}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Folio;
