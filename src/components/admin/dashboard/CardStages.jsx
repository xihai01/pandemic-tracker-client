import { Icon } from '@iconify/react';
import bugFilled from '@iconify/icons-ant-design/bug-filled';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  background: '#ced4da',
  backgroundColor: theme.palette.error.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function CardStages({state}) {
  return (
    <RootStyle>
      <IconWrapperStyle>
        {/* <Icon icon={bugFilled} width={24} height={24} /> */}
        <Icon icon="fluent:channel-alert-16-regular" width="30" height="30" />
        {/* <Icon icon="clarity:building-line" width="30" height="30" /> */}
      </IconWrapperStyle>
      <Typography variant="h3">{state.dashboard.stages}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Stages
      </Typography>
    </RootStyle>
  );
}