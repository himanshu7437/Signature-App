document.getElementById('generateBtn').addEventListener('click', generateFonts);

const fonts = [
    { name: 'Mrs Saint Delafield', class: 'mrs-saint-delafield-regular', family: '"Mrs Saint Delafield", serif' },
    { name: 'Lavishly Yours', class: 'lavishly-yours-regular', family: '"Lavishly Yours", serif' },
    { name: 'Arizonia', class: 'arizonia-regular', family: '"Arizonia", serif' },
    { name: 'Rouge Script', class: 'rouge-script-regular', family: '"Rouge Script", serif' },
    { name: 'Alex Brush', class: 'alex-brush-regular', family: '"Alex Brush", serif' },
    { name: 'Amita', class: 'amita-regular', family: '"Amita", serif' },
];

function generateFonts() {
    const textInput = document.getElementById('textInput').value;
    const container = document.getElementById('fontStylesContainer');
    container.innerHTML = '';  // Clear previous designs

    fonts.forEach((font, index) => {
        const fontDesignDiv = document.createElement('div');
        fontDesignDiv.classList.add('fontDesign');
        
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 100;
        const ctx = canvas.getContext('2d');
        
        // Apply the correct font-family and size to the canvas
        ctx.font = `30px ${font.family}`;
        ctx.fillText(textInput, 10, 50);

        fontDesignDiv.appendChild(canvas);

        // Download button
        const downloadBtn = document.createElement('button');
        downloadBtn.classList.add('downloadBtn');
        downloadBtn.textContent = 'Download';
        downloadBtn.addEventListener('click', function () {
            const link = document.createElement('a');
            link.download = `fontDesign-${index}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
        
        fontDesignDiv.appendChild(downloadBtn);
        container.appendChild(fontDesignDiv);
    });
}
