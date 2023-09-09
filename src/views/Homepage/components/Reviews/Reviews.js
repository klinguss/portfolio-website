import React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import illustrator from '../Skills/svg/illustrator.png';
const mock = [
  {
    title: 'Creation',
    subtitle:
      'Experienced with Adobe Software such as After Effects, Premiere Pro, Photoshop and Illustrator',
    icon: illustrator.src,
  },
  {
    title: 'Programming',
    subtitle:
      'Background knowledge of Python and JavaScript, with hands on tutoring for A Level Computer Science',
    icon: 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
  },
  {
    title: 'Web development',
    subtitle:
      'Self-taught for front-end and back-end development, in which currently tryout on PaLM API and Firebase',
    icon: 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
  },
];

const Skills = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              component={'a'}
              href={''}
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
                flexDirection={'column'}
                display={'flex'}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box
                    component={Avatar}
                    width={{ xs: 60, md: 80 }}
                    height={{ xs: 60, md: 80 }}
                    marginBottom={2}
                    src={item.icon}
                  />
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
