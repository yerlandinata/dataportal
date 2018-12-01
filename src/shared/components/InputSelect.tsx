
import { TextField } from '@material-ui/core';
import * as React from 'react';
import { ReduxFormInputProps } from '../interfaces';

export const InputSelect: React.SFC<ReduxFormInputProps> = 
    ({input, label, type, meta, children}: ReduxFormInputProps & {children?: React.ReactNode})  => (
        <TextField select={true} {...input} type={type} label={label} error={meta.error}>
            {children}
        </TextField>
    );
