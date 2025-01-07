# Text Processor Web Application

## Overview
This web application provides a sophisticated text processing system that converts text through various numerical and alphabetical transformations using a predefined character mapping system. The application processes input through five distinct stages, each performing unique operations on the data.

## Project Structure
```
├── index.html
├── style.css
├── script.js
└── README.md
```

## Setup

### HTML Structure
Create an `index.html` file with the following structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Soal Coding Test</title>
    <link rel="stylesheet" href="style.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Soal Coding Test</h1>
    <p>Inputkan kalimat abjad:</p>
    <input type="text" id="inputText" placeholder="Masukkan kalimat" />
    <button onclick="processText()">Proses</button>

    <section id="soal1">
      <h2>Soal 1: Konversi ke Angka</h2>
      <div class="output" id="output1"></div>
    </section>

    <section id="soal2">
      <h2>Soal 2: Operasi Matematika</h2>
      <div class="output" id="output2"></div>
    </section>

    <section id="soal3">
      <h2>Soal 3: Konversi ke Abjad</h2>
      <div class="output" id="output3"></div>
    </section>

    <section id="soal4">
      <h2>Soal 4: Operasi Matematika Ulang</h2>
      <div class="output" id="output4"></div>
    </section>

    <section id="soal5">
      <h2>Soal 5: Operasi pada Huruf</h2>
      <div class="output" id="output5"></div>
    </section>
  </body>
</html>
```

### Required Files

1. **script.js**
   - Contains all the JavaScript logic for text processing
   - Includes character mapping and conversion functions
   - Handles the processing of all five stages

2. **style.css**
   - Contains styling for the application
   - Recommended to style the following elements:
     - Input field and button
     - Section containers
     - Output displays
     - Headers and text elements

## Features

### 1. Text to Number Conversion (Soal 1)
- Converts input text to numbers using a predefined character mapping
- Each character (A-Z, a-z) maps to a specific number (0-9)
- Spaces are converted to 0
- Output displayed in `output1` div

### 2. Mathematical Operations (Soal 2)
- Performs alternating addition and subtraction operations
- Processes numbers sequentially
- Displays result in `output2` div

### 3. Number to Letter Conversion (Soal 3)
- Converts numerical results back to letters
- Handles negative numbers
- Shows conversion in `output3` div

### 4. Mathematical Recalculation (Soal 4)
- Recalculates sums using specific algorithm
- Converts results back to letters
- Displays in `output4` div

### 5. Letter to Mathematical Operations (Soal 5)
- Final processing stage
- Converts to letters to mathematical operations
- Shows results in `output5` div

## Technical Implementation

### Character Mapping System
```javascript
const kamus = {
    A: 0, B: 1, C: 1, /* ... */
    a: 9, b: 8, c: 8, /* ... */
    " ": 0
};
```

### Key Functions

1. `convertToNumbers(text)`
2. `alternateMath(numbers)`
3. `convertToAbjad(num)`
4. `processSoal4(abjad)`
5. `processSoal5(num)`

## Usage Instructions

1. Open `index.html` in a web browser
2. Enter text in the input field
3. Click "Proses" button
4. View results in the five output sections

## Example Usage
```
Input: "HELLO"
Soal 1: [3, 2, 5, 5, 6]
Soal 2: -1
Soal 3: "A"
Soal 4: "A B C"
Soal 5: 3
```

## Installation Steps

1. Create a new directory for the project
2. Create the three required files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Copy the provided code into each file
4. Open `index.html` in a web browser

## Browser Compatibility
- Works in modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Responsive design for various screen sizes

## Development Notes
- All processing is done client-side
- No server requirements
- Can be hosted on any static web server