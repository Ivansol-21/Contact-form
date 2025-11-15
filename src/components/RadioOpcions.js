export const RadioOpcions = (ask, name, options, required) => {
    const $wrapper = document.createElement('div'),
        $question = document.createElement('p');
    
    $wrapper.appendChild($question);

    options.forEach(e => {
        const $label = document.createElement('label'),
            $input = document.createElement('input');
        
        $input.type = 'radio';
        $input.name = name;
        $input.value = e;
        $label.textContent = e;
        $label.className = 'flex grow gap-1 text-slate-400 ml-2 border-gray-300 mr-4 border rounded-md px-2 py-1';
        $question.textContent = ask;
        $question.className = 'text-slate-400 mb-2 grow w-1/1';

        $label.prepend($input);
        $wrapper.appendChild($label);
        $wrapper.className = 'flex flex-wrap mb-4';
    });

    return $wrapper;
};