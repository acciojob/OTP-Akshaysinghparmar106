//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

    // Forward typing
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9]/g, "");

        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    // Backspace handling
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "") {
                if (index > 0) {
                    inputs[index - 1].value = "";
                    inputs[index - 1].focus();
                }
            } else {
                input.value = "";
            }
        }
    });
});
