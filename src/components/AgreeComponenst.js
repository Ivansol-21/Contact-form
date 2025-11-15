export const AgreeComponenst = (ask, name, required) => {
    const $termsAndConditions = document.createElement('label'),
        $input = document.createElement('input');

    $input.type = 'checkbox';
    $input.name = name;
    $input.required = required;
    $input.className = 'mr-2';

    $termsAndConditions.className = 'flex items-center mb-4 text-slate-400';

    $termsAndConditions.appendChild($input);
    $termsAndConditions.append(ask);

    return $termsAndConditions;
};