// --- Camera Test ---
const webcamFeed = document.getElementById('webcam-feed');
const startCameraBtn = document.getElementById('start-camera-btn');
const cameraStatus = document.getElementById('camera-status');
let currentStream; // To store the camera stream so we can stop it later

startCameraBtn.addEventListener('click', async () => {
    if (currentStream) {
        // If camera is already running, stop it
        currentStream.getTracks().forEach(track => track.stop());
        webcamFeed.srcObject = null;
        startCameraBtn.textContent = 'Start Camera';
        cameraStatus.textContent = 'Camera stopped.';
        return;
    }

    try {
        cameraStatus.textContent = 'Requesting camera access...';
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        currentStream = stream; // Store the stream
        webcamFeed.srcObject = stream;
        cameraStatus.textContent = 'Camera active!';
        startCameraBtn.textContent = 'Stop Camera'; // Change button text
    } catch (error) {
        console.error('Error accessing camera:', error);
        if (error.name === 'NotAllowedError') {
            cameraStatus.textContent = 'Camera access denied. Please allow camera in your browser settings.';
        } else if (error.name === 'NotFoundError') {
            cameraStatus.textContent = 'No camera found on this device.';
        } else {
            cameraStatus.textContent = `Error: ${error.message}`;
        }
    }
});

// --- Keyboard Test (Basic) ---
const keyboardInput = document.getElementById('keyboard-input');
const pressedKeysDiv = document.getElementById('pressed-keys');
const pressedKeySet = new Set(); // To keep track of currently pressed keys

keyboardInput.addEventListener('keydown', (event) => {
    if (!pressedKeySet.has(event.key)) {
        pressedKeySet.add(event.key);
        updatePressedKeysDisplay();
    }
});

keyboardInput.addEventListener('keyup', (event) => {
    pressedKeySet.delete(event.key);
    updatePressedKeysDisplay();
});

function updatePressedKeysDisplay() {
    pressedKeysDiv.textContent = 'Pressed: ' + Array.from(pressedKeySet).join(', ');
    if (pressedKeySet.size === 0) {
        pressedKeysDiv.textContent = 'Release all keys to clear.';
    }
}

// Initial state for keyboard test
updatePressedKeysDisplay();


// --- Mouse Test (Basic Drawing) ---
const mouseCanvas = document.getElementById('mouse-canvas');
const mouseCtx = mouseCanvas.getContext('2d');
const mouseStatus = document.getElementById('mouse-status');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

mouseCanvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Set initial position
    mouseStatus.textContent = `Mouse clicked at (${lastX}, ${lastY})`;
});

mouseCanvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    mouseStatus.textContent = `Mouse moving at (${e.offsetX}, ${e.offsetY})`;
    mouseCtx.beginPath();
    mouseCtx.moveTo(lastX, lastY);
    mouseCtx.lineTo(e.offsetX, e.offsetY);
    mouseCtx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

mouseCanvas.addEventListener('mouseup', () => {
    isDrawing = false;
    mouseStatus.textContent += ' (Released)';
});

mouseCanvas.addEventListener('mouseout', () => {
    isDrawing = false; // Stop drawing if mouse leaves canvas
});


// --- Speaker Test ---
const playSoundBtn = document.getElementById('play-sound-btn');
const testAudio = document.getElementById('test-audio');
const speakerStatus = document.getElementById('speaker-status');

playSoundBtn.addEventListener('click', () => {
    if (testAudio.paused) {
        testAudio.play()
            .then(() => {
                speakerStatus.textContent = 'Playing test sound...';
                playSoundBtn.textContent = 'Stop Sound';
            })
            .catch(error => {
                speakerStatus.textContent = `Error playing sound: ${error.message}`;
                console.error('Error playing audio:', error);
            });
    } else {
        testAudio.pause();
        testAudio.currentTime = 0; // Rewind to start
        speakerStatus.textContent = 'Test sound stopped.';
        playSoundBtn.textContent = 'Play Test Sound';
    }
});

// Update button text when audio finishes
testAudio.addEventListener('ended', () => {
    speakerStatus.textContent = 'Test sound finished.';
    playSoundBtn.textContent = 'Play Test Sound';
});

// Update button text if audio is paused by user/browser
testAudio.addEventListener('pause', () => {
    if (testAudio.currentTime !== 0) { // Only change if not rewound
        speakerStatus.textContent = 'Test sound paused.';
        playSoundBtn.textContent = 'Play Test Sound';
    }
});