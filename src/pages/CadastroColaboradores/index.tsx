import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FormCadastroColaborador from '../../components/FormCadastroColaborador';
import { Box, Button } from '@mui/material';

interface Props {
	token: any
}

export default function CadastroColaboradores({ token }: Props) {
  const navegar = useNavigate();

  return (
    <Box >
      <FormCadastroColaborador token={token} />
      <Button 
        sx={{ mt: 2 }}
        variant="contained"
        endIcon={<KeyboardBackspaceIcon />}
        onClick={() => navegar(-1)} />
    </Box>
  );
}