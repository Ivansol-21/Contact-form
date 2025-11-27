import icon from '../assets/images/icon-success-check.svg'

export const SuccesState = () => {
    const $wrapper = document.createElement('div'),
        $iconCheck = document.createElement('img'),
        $title = document.createElement('h2'),
        $message = document.createElement('p');


    $iconCheck.src = icon;
    $iconCheck.alt = 'Icono de check de exito';
    $title.textContent = 'Message Sent!';
    $title.className = 'font-bold text-white';
    
    $message.textContent = "Thanks for completing the form. We'll be in touch soon!";
    $message.className = 'text-green-200 w-full';
    
    $wrapper.id = 'success-state';
    $wrapper.appendChild($iconCheck);
    $wrapper.appendChild($title);
    $wrapper.appendChild($message);
    $wrapper.className = 'flex flex-wrap gap-2 fixed top-4 p-6 shadow-md rounded-xl max-w-lg w-1/1 bg-gray-700';
    return $wrapper;
};