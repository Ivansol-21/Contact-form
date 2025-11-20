import { validar } from '../utils/validar.js';

export const AgreeComponenst = (ask, name, required) => {
    const $termsAndConditions = document.createElement('label'),
        $input = document.createElement('input'),
        $wrapper = document.createElement('div');

    $input.type = 'checkbox';
    $input.name = name;
    $input.className = 'mr-4';

    $wrapper.className = 'flex flex-wrap items-center mb-4 text-slate-400 w-1/1';
    $termsAndConditions.className = 'items-center w-1/1 cursor-pointer';

    $termsAndConditions.appendChild($input);
    $termsAndConditions.append(ask);
    $wrapper.appendChild($termsAndConditions);

    $input.addEventListener('change', ev => validar(ev, $wrapper, required));

    return $wrapper;
};