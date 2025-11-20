import './styles.css';
import { FieldText } from './components/FiledText.js';
import { TextArea } from './components/TextArea.js';
import { RadioOpcions } from './components/RadioOpcions.js';
import { AgreeComponenst } from './components/AgreeComponenst.js';
import { BtnSubmit } from './components/BtnSubmit.js';

const $app = document.getElementById('app');
if ($app) {
	const nameField = FieldText('First name', 'name', 'text', '', true),
		lastNameField = FieldText('Last name', 'last-name', 'text', '', true),
		emalField = FieldText('Email Adress', 'email', 'email', '', true),
		message = TextArea('Message', 'message', '', true),
		query = RadioOpcions('Query Type', 'query', ['General Enquiry', 'Support Resquest'], true),
		agree = AgreeComponenst('I agree to the terms and conditions', 'terms', true),
		submitButton = BtnSubmit('Submit');

	const $fragment = document.createDocumentFragment(),
		$form = document.createElement('form'),
		$title = document.createElement('h1');

	$app.className = 'min-h-screen bg-green-200 flex items-center justify-center p-4';

	$title.textContent = 'Contact Us';
	$title.className = 'w-1/1 text-3xl font-bold mb-6 text-gray-700';
	$form.appendChild($title);
	$form.className = 'flex flex-wrap gap-x-4 gap-y-2 bg-white shadow-md rounded-xl px-8 pt-6 pb-8 max-w-2xl';

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
