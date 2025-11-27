import { validar } from "./validar.js";

export const enviar = (formData) => {

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

    console.log("FORM OK, ENVIAR!");
};
