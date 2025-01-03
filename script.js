document.querySelectorAll(".wrapper").forEach(wrapper => {
    const openSound = document.getElementById("openSound");
    const closeSound = document.getElementById("closeSound");

    wrapper.addEventListener("click", () => {
        wrapper.classList.toggle("open");
        if (wrapper.classList.contains("open")) {
            openSound.play();
        } else {
            closeSound.play();
        }
    });
});
