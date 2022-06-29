import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataGridColaborador from "./components/DataGridColaborador";
import FormCadastroColaborador from "./components/FormCadastroColaborador";
import token from './data/token.json';


export default function Aprecierouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<DataGridColaborador/>} />
				<Route path="/cadastro" element={<FormCadastroColaborador token={token} />} />
			</Routes>
		</Router>
	);
}