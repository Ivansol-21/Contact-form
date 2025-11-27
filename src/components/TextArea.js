import { formatID } from "../utils/formatID";
import { validar } from "../utils/validar.js";

export const TextArea = (label, name, placeholder, required) => {
    const $textarea = document.createElement('textarea'),
        $label = document.createElement('label'),
        $wrapper = document.createElement('div'),
        $error = document.createElement('span');

    $label.setAttribute('for', formatID(label));
    $label.textContent = label;
    $label.className = 'text-slate-400 cursor-pointer';
    $textarea.name = name;
    $textarea.id = formatID(label);
    $textarea.placeholder = placeholder;
    $textarea.className = 'mt-1 block w-full resize-none px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 hover:border-teal-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 cursor-pointer';
    $textarea.rows = 4;
    $textarea.cols = 4;
    $textarea.dataset.required = required ? 'true' : 'false';

    $error.className = 'field-error hidden';
    $error.id = `${name}-error`;

    $wrapper.appendChild($label);
    $wrapper.appendChild($textarea);
    $wrapper.appendChild($error);
    $wrapper.className = 'mb-4 grow w-1/1';

    $textarea.addEventListener('blur', ev => validar(ev.target, required));

    return $wrapper;
}