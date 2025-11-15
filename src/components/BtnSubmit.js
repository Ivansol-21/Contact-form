export const BtnSubmit = (text) => {
    const $button = document.createElement('button');
    $button.type = 'submit';
    $button.textContent = text;
    $button.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

    
    return $button;
};