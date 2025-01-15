// Get references to the DOM elements
const canvas = document.getElementById('signatureCanvas');  // Canvas element for drawing
const ctx = canvas.getContext('2d');  // 2D context for drawing on the canvas
const clearBtn = document.getElementById('clearBtn');  // Button to clear the canvas
const saveBtn = document.getElementById('saveBtn');  // Button to save the canvas content
const colorOptions = document.querySelectorAll('.color-circle');  // Color picker options
const fileFormatSelect = document.getElementById('fileFormat');  // Dropdown to select image format

// Set initial drawing color
let currentColor = '#000000';  // Default color is black
let drawingPath = [];  // Array to store all drawing paths

// Track mouse events for drawing
let drawing = false;  // Flag to track if drawing is in progress
let lastX = 0;  // Last X position of the mouse
let lastY = 0;  // Last Y position of the mouse
let lineWidth = 2;  // Line width for drawing (set to 2 for smoothness)

// Set up the canvas for drawing
function setupCanvas() {
  canvas.addEventListener('mousedown', startDrawing);  // Start drawing when mouse is pressed
  canvas.addEventListener('mousemove', draw);  // Track mouse movements to draw
  canvas.addEventListener('mouseup', stopDrawing);  // Stop drawing when mouse is released
  canvas.addEventListener('mouseout', stopDrawing);  // Stop drawing when mouse leaves the canvas

  // Set the background to white
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill the canvas with a white background
}

// Start drawing when mouse is pressed
function startDrawing(e) {
  drawing = true;  // Set drawing flag to true
  drawingPath.push({ color: currentColor, points: [] });  // Start a new path for drawing
  [lastX, lastY] = [e.offsetX, e.offsetY];  // Set initial drawing coordinates
}

// Stop drawing when mouse is released or moves out of the canvas
function stopDrawing() {
  drawing = false;  // Set drawing flag to false
  ctx.beginPath();  // Begin a new path to prevent connecting to previous paths
}

// Draw on the canvas with smoother curves
function draw(e) {
  if (!drawing) return;  // Don't draw if not in drawing mode

  // Store the points of the current path being drawn
  drawingPath[drawingPath.length - 1].points.push({ x: e.offsetX, y: e.offsetY });

  // Set the line properties for smoothness
  ctx.lineWidth = lineWidth;  // Line width
  ctx.lineJoin = 'round';  // Smooth corners
  ctx.lineCap = 'round';  // Smooth end points
  ctx.strokeStyle = currentColor;  // Set the current stroke color

  const currentPoint = { x: e.offsetX, y: e.offsetY };

  // Smooth the drawing using quadratic curves to reduce sharp angles
  if (drawingPath[drawingPath.length - 1].points.length > 1) {
    const prevPoint = drawingPath[drawingPath.length - 1].points[drawingPath[drawingPath.length - 1].points.length - 2];

    // Calculate control points for the curve
    const controlPointX = (prevPoint.x + currentPoint.x) / 2;
    const controlPointY = (prevPoint.y + currentPoint.y) / 2;

    // Begin a new path and draw a quadratic curve between points
    ctx.beginPath();
    ctx.moveTo(prevPoint.x, prevPoint.y);
    ctx.quadraticCurveTo(controlPointX, controlPointY, currentPoint.x, currentPoint.y);  // Smooth curve
    ctx.stroke();  // Draw the stroke
  }

  // Update the last mouse position
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Change the drawing color based on selected color
function selectColor(color) {
  currentColor = color;  // Update current color
  updateDrawingColor(color);  // Change the color of all previous drawings
}

// Update the color of all previous drawings on the canvas
function updateDrawingColor(color) {
  drawingPath.forEach(path => {
    path.color = color;  // Set the new color for each path
  });
  redrawCanvas();  // Redraw the canvas with updated colors
}

// Redraw the entire canvas with updated colors
function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
  ctx.fillStyle = '#FFFFFF';  // Set the background to white again
  ctx.fillRect(0, 0, canvas.width, canvas.height);  // Maintain the white background

  drawingPath.forEach(path => {
    ctx.strokeStyle = path.color;  // Set the stroke color to the color of the current path
    ctx.lineWidth = lineWidth;  // Set the line width for smoothness
    ctx.lineJoin = 'round';  // Smooth corners
    ctx.lineCap = 'round';  // Smooth end points
    path.points.forEach((point, index) => {
      if (index === 0) {
        ctx.beginPath();  // Start a new path for each point
        ctx.moveTo(point.x, point.y);  // Move to the first point
      } else {
        ctx.lineTo(point.x, point.y);  // Draw a line to the current point
        ctx.stroke();  // Stroke the line
      }
    });
  });
}

// Clear the canvas when the clear button is clicked
clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the entire canvas
  ctx.fillStyle = '#FFFFFF';  // Set the background to white
  ctx.fillRect(0, 0, canvas.width, canvas.height);  // Maintain the white background
  drawingPath = [];  // Clear the history of the drawing paths
});

// Save and download the canvas content when the save button is clicked
saveBtn.addEventListener('click', () => {
  const format = fileFormatSelect.value;  // Get the selected file format (PNG, JPEG, etc.)

  // Set a white background for GIF and JPEG formats
  const imageURL = canvas.toDataURL('image/' + format, 1.0);  // Convert canvas to image data URL

  // Create an invisible anchor element for downloading the image
  const link = document.createElement('a');
  link.href = imageURL;  // Set the image URL as the download link
  link.download = 'signature.' + format;  // Set the default file name for the download
  link.click();  // Trigger the download
});

// Initialize color selection events for the color options
colorOptions.forEach(colorCircle => {
  const color = colorCircle.style.backgroundColor;  // Get the background color of the circle
  colorCircle.addEventListener('click', () => selectColor(color));  // Set the color on click
});

// Initialize the canvas setup for drawing
setupCanvas();
