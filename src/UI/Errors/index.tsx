import React from 'react';

import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

import { CustomError } from '../../types';

type Props = {
  error?: CustomError;
};

const UIError: React.FC<Props> = ({ error }) => {
  return (
    <>
      {error && error.messages?.length > 0 && (
        <Grid item>
          {error.messages.map((message, key) => (
            <Alert severity='error' key={key}>
              {message}
            </Alert>
          ))}
        </Grid>
      )}
    </>
  );
};

export default UIError;
