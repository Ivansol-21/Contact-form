import { formatID } from "../utils/formatID.js";
import { validar } from "../utils/validar.js";

export const FieldText = (label, name, type, placeholder, required) => {
    const $input = document.createElement('input'),
        $label = document.createElement('label'),
        $wrapper = document.createElement('div'),
        $error = document.createElement('span');
    
    $label.setAttribute('for', formatID(label));
    $label.textContent = label;
    $label.className = 'text-slate-400 cursor-pointer';

    $input.type = type;
    $input.name = name;
    $input.id = formatID(label);
    $input.dataset.required = required ? 'true' : 'false';
    $input.placeholder = placeholder;
    $input.className = 'mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 hover:border-teal-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 cursor-pointer';
    // $input.setAttribute('autocomplete', 'off');

    $error.className = 'field-error hidden';
    $error.id = `${name}-error`;


    $wrapper.appendChild($label);
    $wrapper.appendChild($input);
    $wrapper.appendChild($error);
    $wrapper.className = 'mb-4 grow';
    
    if (type === 'email') $wrapper.className = 'mb-4 w-full';


    $input.addEventListener('blur', ev => validar(ev.target, required));

    return $wrapper;
}