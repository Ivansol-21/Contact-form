import { validar } from '../utils/validar.js';

export const RadioOpcions = (ask, name, options, required) => {
    const $wrapper = document.createElement('div'),
        $question = document.createElement('p'),
        $error = document.createElement('span');
    
    $wrapper.appendChild($question);

    options.forEach(e => {
        const $label = document.createElement('label'),
            $input = document.createElement('input');
        
        $input.type = 'radio';
        $input.name = name;
        $input.value = e;
        $input.className = 'w-4';
        $input.dataset.required = required ? 'true' : 'false';
        $input.addEventListener('change', () => validar(name, required));


        $label.className = 'flex grow gap-2 text-slate-400 border-gray-300 border rounded-md px-6 py-2 cursor-pointer hover:border-teal-500 shadow-sm';
        $label.appendChild($input);
        $label.appendChild(document.createTextNode(e));
        
        $question.textContent = ask;
        $question.className = 'text-slate-400 mb-2 grow w-1/1';

        $wrapper.appendChild($label);
    });

    $error.className = 'field-error hidden';
    $error.id = `${name}-error`;
    $wrapper.appendChild($error);

    $wrapper.addEventListener('click', (e) => {
        if (e.target.type === 'radio') {
            let $labels = $wrapper.querySelectorAll(`label`);
            $labels.forEach(label => label.classList.remove('bg-teal-50', 'border-teal-500'));
            if (e.target.checked) {
                e.target.parentElement.classList.add('bg-teal-50', 'border-teal-500');
            }
        }
    })

    $wrapper.className = 'flex flex-wrap gap-x-4 grow movile:gap-y-4';

    return $wrapper;
};