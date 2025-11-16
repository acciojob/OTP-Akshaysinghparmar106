//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

// Apply behavior to each field
inputs.forEach((input, index) => {

    // When typing a number
    input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9]/g, ''); // Allow only digits

        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();  // Move to next input
        }
    });

    // Backspace behavior
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value === '') {
                if (index > 0) {
                    inputs[index - 1].value = ''; 
                    inputs[index - 1].focus();    // Move back to previous input
                }
            }
        }
    });
});

// Auto-focus the first box
inputs[0].focus();
