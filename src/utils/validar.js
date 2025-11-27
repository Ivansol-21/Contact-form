export const validar = (inputOrName, required = false) => {
    // Si viene el target de blur/change
    let inputs = [];
    
    if (typeof inputOrName === "string") {
        // Es un nombre: caso radios o checkbox
        inputs = [...document.querySelectorAll(`[name="${inputOrName}"]`)];
    } else {
        // Es un input individual
        inputs = [inputOrName];
    }
    
    const field = inputs[0];
    const type = field.type;
    const name = field.name;
    const wrapper = field.closest("div");
    const errorEl = wrapper.querySelector(".field-error");
    
    let isValid = true;
    let message = "";
    
    // -----------------------------
    // TEXT / EMAIL / TEXTAREA
    // -----------------------------
    if (type === "text" || type === "textarea" || type === "email") {
        const value = field.value.trim();

        if (required && value === "") {
            isValid = false;
            message = "This field is required";
        }

        if (isValid && type === "email" && value !== "") {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                isValid = false;
                message = "Please enter a valid email address";
            }
        }
    }

    // -----------------------------
    // CHECKBOX
    // -----------------------------
    if (type === "checkbox") {
        if (required && !field.checked) {
            isValid = false;
            message = "To submit this form, please consent to being contacted";
        }
    }

    // -----------------------------
    // RADIOS
    // -----------------------------
    if (type === "radio") {
        const checked = inputs.some(r => r.checked);
        if (required && !checked) {
            isValid = false;
            message = "Please select an option";
        }
    }

    // -----------------------------
    // MOSTRAR / OCULTAR ERROR
    // -----------------------------

    if (!isValid) {
        field.classList.add("border-red-500/60");
        errorEl.textContent = message;
        errorEl.className = "field-error w-full text-red-500/60 text-sm mt-1 block";
        return false;
    } else {
        field.classList.remove("border-red-500/60");
        errorEl.textContent = "";
        errorEl.className = "field-error hidden";
        return true;
    }
};
