//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs[0].focus();

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        const value = e.target.value;

        if (!/^[0-9]$/.test(value)) {
            e.target.value = "";
            return;
        }

        if (index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

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

