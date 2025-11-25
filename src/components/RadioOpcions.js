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
        $label.className = 'flex grow gap-1 text-slate-400 border-gray-300 border rounded-md px-2 py-2 cursor-pointer hover:border-teal-500';
        $question.textContent = ask;
        $question.className = 'text-slate-400 mb-2 grow w-1/1';

        $label.prepend($input);
        $wrapper.appendChild($label);
    });

    $wrapper.addEventListener('click', (e) => {
        if (e.target.type === 'radio') {
            let $labels = $wrapper.querySelectorAll(`label`);
            console.log($labels);
            $labels.forEach(label => label.classList.remove('bg-teal-50', 'border-teal-500'));
            if (e.target.checked) {
                e.target.parentElement.classList.add('bg-teal-50', 'border-teal-500');
            }
        }
    })

    $wrapper.className = 'flex flex-wrap justify-center gap-x-4 grow movile:gap-y-4';

    return $wrapper;
};