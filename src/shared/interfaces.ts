import * as React from 'react';
import { WrappedFieldMetaProps } from 'redux-form';

export interface ReduxFormInputProps {
    input: any;
    label: any;
    type: any;
    meta: WrappedFieldMetaProps;
    children?: React.ReactNode;
}
