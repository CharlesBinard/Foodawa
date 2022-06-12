import React from 'react';

import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

type Props = {
  errors?: string[];
};

const UIErrors: React.FC<Props> = ({ errors }) => {
  return (
    <>
      {errors && errors.length > 0 && (
        <Grid item>
          {errors.map((error, key) => (
            <Alert severity='error' key={key}>
              {error}
            </Alert>
          ))}
        </Grid>
      )}
    </>
  );
};

export default UIErrors;
