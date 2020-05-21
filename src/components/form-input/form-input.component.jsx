import React from 'react';

import {FormInputContainer} from './form-input.styles';

const FormInput = ({handleChange, ...otherProps}) => (
    <div className="form-input">
        <FormInputContainer onChange={handleChange} {...otherProps} />
    </div>
);

export default FormInput;