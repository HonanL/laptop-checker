Hardware Test Application
This is a simple, web-based application designed to help you test the basic functionalities of your computer's hardware components: Camera, Keyboard, Mouse, and Speakers. It provides a user-friendly interface to quickly verify if these peripherals are working as expected.

Features
Camera Test: Start and stop your webcam feed to check if your camera is functioning correctly.

Keyboard Test: Type into an input field and see which keys are being pressed in real-time.

Mouse Test: Draw on a canvas to test mouse movement, clicks, and drag functionality. Supports touch input for touch-enabled devices.

Speaker Test: Play a test sound to verify your audio output.

How to Use
Open the Application: Open the index.html file (or the provided URL if hosted) in a modern web browser (e.g., Chrome, Firefox, Edge, Safari).

Camera Test:

Click the "Start Camera" button.

If prompted, allow camera access in your browser.

You should see your webcam feed appear in the video area.

Click "Stop Camera" to turn off the feed.

Troubleshooting: If the camera doesn't start, ensure you've granted camera permissions to your browser and that no other application is currently using your camera.

Keyboard Test:

Click inside the "Type here to test your keyboard..." input field.

Start typing. The "Pressed:" status will show all currently pressed keys.

Release all keys to clear the display.

Mouse Test:

Click and drag your mouse (or use your finger on a touchscreen) on the white canvas area.

You should see lines drawn on the canvas, indicating successful mouse/touch input.

The status will show the coordinates of your mouse/touch actions.

Speaker Test:

Click the "Play Test Sound" button.

You should hear a test audio clip playing through your speakers or headphones.

Click "Stop Sound" to pause the audio.

Troubleshooting: If you don't hear sound, check your system's volume, speaker connections, and ensure the browser has permission to play audio.

Technologies Used
HTML5: For the basic structure of the web page.

Tailwind CSS: A utility-first CSS framework for styling and responsive design.

JavaScript (ES6+): For handling all interactive functionalities, including camera access (navigator.mediaDevices.getUserMedia), event listeners for keyboard and mouse, and audio playback.

Potential Issues & Troubleshooting
Camera/Microphone Permissions: Browsers will ask for explicit permission to access your camera or microphone. Always grant these permissions when prompted for the tests to work.

No Camera/Microphone Found: If your device doesn't have a built-in camera or microphone, or if they are not properly installed/recognized by your operating system, the respective tests might report "No camera found" or similar errors.

Ad-Blockers/Extensions: Some browser extensions (like ad-blockers or privacy extensions) might interfere with media playback or camera access. If you encounter issues, try temporarily disabling them.

Audio Playback: Browsers often require a user interaction (like clicking a button) before they allow audio to play automatically. This application is designed with that in mind, so clicking the "Play Test Sound" button is necessary.

Canvas Drawing: The mouse canvas has a fixed height. If you resize the browser window significantly, the drawing area's aspect ratio might change, but its functionality should remain.
