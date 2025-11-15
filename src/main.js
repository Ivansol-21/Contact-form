import './styles.css';
import { FieldText } from './components/FiledText.js';
import { TextArea } from './components/TextArea.js';
import { RadioOpcions } from './components/RadioOpcions.js';
import { AgreeComponenst } from './components/AgreeComponenst.js';
import { BtnSubmit } from './components/BtnSubmit.js';

const $app = document.getElementById('app');
if ($app) {
	const nameField = FieldText('First name', 'name', 'text', '', true),
		lastNameField = FieldText('Last name', 'last-name', 'text', 'Enter your last name', true),
		emalField = FieldText('Email Adress', 'email', 'email', 'Enter your email', true),
		message = TextArea('Message', 'message', 'Enter your message here', true),
		query = RadioOpcions('Query Type', 'query', ['General Enquiry', 'Support Resquest'], true),
		agree = AgreeComponenst('I agree to the terms and conditions', 'terms', true),
		submitButton = BtnSubmit('Submit');

	const $fragment = document.createDocumentFragment(), 
		$form = document.createElement('form'),
		$title = document.createElement('h1');

	$title.textContent = 'Contact Us';
	$title.className = 'text-3xl font-bold mb-6 text-gray-700';
	$form.appendChild($title);

	$form.appendChild(nameField);
	$form.appendChild(lastNameField);
	$form.appendChild(emalField);
	$form.appendChild(query);
	$form.appendChild(message);
	$form.appendChild(agree);
	$form.appendChild(submitButton);

	$fragment.appendChild($form);
	
	$app.appendChild($fragment);
}
