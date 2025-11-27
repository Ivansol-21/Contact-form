import { validar } from '../utils/validar.js';

export const AgreeComponenst = (ask, name, required) => {
    const $termsAndConditions = document.createElement('label'),
        $input = document.createElement('input'),
        $wrapper = document.createElement('div'),
        $error = document.createElement('span');

    $input.type = 'checkbox';
    $input.name = name;
    $input.className = 'mr-4';
    $input.value = $input.checked;
    $input.dataset.required = required ? 'true' : 'false';

    $wrapper.className = 'flex flex-wrap items-center mb-4 text-slate-400 w-1/1';
    $termsAndConditions.className = 'items-center w-1/1 cursor-pointer';

    $error.className = 'field-error hidden';
    $error.id = `${name}-error`;

    $termsAndConditions.appendChild($input);
    $termsAndConditions.append(ask);
    $wrapper.appendChild($termsAndConditions);
    $wrapper.appendChild($error);

    $input.addEventListener('change', ev => {
        $input.value = $input.checked;
        validar(ev.target, required)
    });

    return $wrapper;
};