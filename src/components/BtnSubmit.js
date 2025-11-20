export const BtnSubmit = (text) => {
    const $button = document.createElement('button');
    $button.type = 'submit';
    $button.textContent = text;
    $button.className = 'bg-green-600 text-white font-bold py-2 px-4 rounded grow w-1/1 cursor-pointer hover:shadow-[inset_0px_0px_100px_rgba(0,0,0,0.5)]';

    
    return $button;
};