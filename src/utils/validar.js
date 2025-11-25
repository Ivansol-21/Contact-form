export const validar = (ev, $wrapper, required) => {
    const value = ev.target.value.trim() || ev.target.type === 'checkbox' ? ev.target.checked ? 'checked' : '' : '';
    let $error = $wrapper.querySelector('.field-error');
    if (required && value === '' || ev.target.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        if (!$error) {
            $error = document.createElement('span');
            $error.className = 'field-error text-red-500 text-sm mt-1 block';
            $wrapper.appendChild($error);
            if (ev.target.type === 'email') {
                $error.textContent = 'Please enter a valid email address';
            } else if (ev.target.type === 'checkbox') {
                $error.textContent = 'To submit this form, please consent to being contacted';
            } else {
                $error.textContent = 'This field is required';
            }
        }
        return false;
    } else {
        if ($error) $error.remove();
        return true;
    }
}