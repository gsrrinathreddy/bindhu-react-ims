import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function IMSButton() {
  return (
    <Stack spacing={2} direction="row">
      
      <Button variant="CakesOrdered">Contained</Button>
      <Button variant="CakesRestoked">Outlined</Button>
    </Stack>
  );
}