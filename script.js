const copyButton = document.getElementById("copyButton");
const cssCode = document.getElementById("cssCode");
const message = document.getElementById("message");

copyButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(cssCode.textContent);
        message.textContent = "Code copied successfully!";
        copyButton.textContent = "COPIED!";
    } catch (error) {
        message.textContent = "Не удалось скопировать код.";
    }

    setTimeout(() => {
        copyButton.textContent = "COPY CODE";
        message.textContent = "";
    }, 2000);
});