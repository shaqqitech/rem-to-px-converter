document.addEventListener("DOMContentLoaded", function() {
    const remInput = document.getElementById("remInput");
    const pxInput = document.getElementById("pxInput");

    remInput.addEventListener("input", function() {
        const remValue = parseFloat(remInput.value);
        if (!isNaN(remValue)) {
            const pxValue = remValue * 16; // 1rem is equivalent to 16px
            pxInput.value = pxValue;
        } else {
            pxInput.value = "";
        }
    });

    pxInput.addEventListener("input", function() {
        const pxValue = parseFloat(pxInput.value);
        if (!isNaN(pxValue)) {
            const remValue = pxValue / 16; // 1rem is equivalent to 16px
            remInput.value = remValue;
        } else {
            remInput.value = "";
        }
    });
});
