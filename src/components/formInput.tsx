import { TextField } from '@mui/material';
import type { TextFieldProps } from '@mui/material/TextField';

type FormInputProps = TextFieldProps & {
  inputLabel: string;
};

const FormInput = ({ inputLabel, ...rest }: FormInputProps) => {
    return (
        <TextField
            fullWidth
            label={inputLabel}
            margin="normal"
            variant="outlined"
            {...rest}
        />
    );
};

export default FormInput;
