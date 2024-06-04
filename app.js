document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('1Button');
    const Zähler = document.getElementById('Zähler');
    let number = 0;

     // Sound-Basis
     const synth = new Tone.Synth({
     oscillator: {
        type: 'triangle'
    },
    envelope: {
        attack: 0.1,
        decay: 0.2, 
        sustain: 0.5, 
        release: 1
    }
}).toDestination();

 // Delay
 const delay = new Tone.FeedbackDelay('10n', 0.2).toDestination();
 synth.chain(delay);

    button.addEventListener('click', () => {
        synth.triggerAttackRelease('C4', '8n');
        console.log('Hello World');
        // Zähler
        number += 1;
        Zähler.textContent = number;
    });
});
