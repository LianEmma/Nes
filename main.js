

    function openModal() {
        document.getElementById("proposalModal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("proposalModal").style.display = "none";
    }

    function acceptProposal() {
        alert("Yay! I'm so happy. You said YES!");
        closeModal();
    }

    function declineProposal() {
        alert("Oh no! I’ll keep trying...");
        closeModal();
    }
    
    document.querySelector(".proposal-button").addEventListener("click", openModal);

