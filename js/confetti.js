const confetti = new JSConfetti()

function showConfetti() {
    confetti.addConfetti()
}

document.getElementById('triggerConfetti').onclick = showConfetti