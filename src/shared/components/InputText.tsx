
import { TextField } from '@material-ui/core';
import * as React from 'react';
import { ReduxFormInputProps } from '../interfaces';

export const InputText: React.SFC<ReduxFormInputProps> = ({input, label, type, meta}: ReduxFormInputProps)  => (
    <TextField {...input} type={type} label={label} error={meta.error}/>
);
