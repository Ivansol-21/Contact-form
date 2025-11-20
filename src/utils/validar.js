export const validar = (ev, $wrapper, required) => {
    const value = ev.target.value.trim() || ev.target.type === 'checkbox' ? ev.target.checked ? 'checked' : '' : '';
    let $error = $wrapper.querySelector('.field-error');
    if (required && value === '' || ev.target.getAttribute('type') === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        if (!$error) {
            $error = document.createElement('span');
            $error.className = 'field-error text-red-500 text-sm mt-1 block';
            $wrapper.appendChild($error);
            $error.textContent = 'Este campo es requerido.';
        }
        return false;
    } else {
        if ($error) $error.remove();
        return true;
    }
}