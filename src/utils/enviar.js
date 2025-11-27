import { validar } from "./validar.js";
import { SuccesState } from "../components/SuccesState.js";

export const enviar = (form) => {

    const fields = [
        { name: "firstName", required: true },
        { name: "lastName", required: true },
        { name: "email", required: true },
        { name: "query", required: true },
        { name: "message", required: true },
        { name: "agree", required: true }
    ];

    let allValid = true;

    fields.forEach(f => {
        const inputs = document.querySelectorAll(`[name="${f.name}"]`);
        if (inputs.length === 1) {
            if (!validar(inputs[0], f.required)) allValid = false;
        } else {
            // radios o grupo
            if (!validar(f.name, f.required)) allValid = false;
        }
    });

    if (!allValid) return;

    const $app = document.querySelector("#app");

    $app.appendChild(SuccesState());

    form.reset();
    
    const $radios = document.querySelectorAll(`[type="radio"]`);
    $radios.forEach(radio => {
        radio.parentElement.classList.remove('bg-teal-50', 'border-teal-500');
    });
    
    setTimeout(() => {
        const $successMessage = document.querySelector("#success-state");
        if ($successMessage) {
            $app.removeChild($successMessage);
        }
    }, 3000);
};
