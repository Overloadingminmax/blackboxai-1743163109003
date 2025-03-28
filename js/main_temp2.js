// Initialize Fabric.js canvas
const canvas = new fabric.Canvas('memeCanvas', {
  backgroundColor: '#000000',
  preserveObjectStacking: true,
  width: 600,
  height: 400
});

// Create default COPE meme background
const createDefaultBackground = () => {
  const bgRect = new fabric.Rect({
    width: canvas.width,
    height: canvas.height,
    fill: 'black',
    selectable: false
  });

  const copeText = new fabric.Text('COPE MEME', {
    fontFamily: 'Bangers',
    fontSize: 60,
    fill: 'rgba(138, 43, 226, 0.3)',
    originX: 'center',
    originY: 'center',
    left: canvas.width/2,
    top: canvas.height/2,
    selectable: false
  });

  canvas.add(bgRect, copeText);
  canvas.renderAll();
};

createDefaultBackground();

// Add text to meme
document.getElementById('addTextButton').addEventListener('click', function() {
  const text = document.getElementById('memeText').value;
  if (!text) return;

  const fontSize = document.getElementById('fontSize').value || 40;
  const fontColor = document.getElementById('fontColor').value || '#ffffff';

  const memeText = new fabric.Text(text, {
    left: 50,
    top: 50,
    fontFamily: 'Bangers',
    fontSize: fontSize,
    fill: fontColor,
    stroke: '#000000',
    strokeWidth: 2,
    shadow: '5px 5px 10px rgba(0,0,0,0.5)',
    padding: 10,
    textAlign: 'center'
  });

  canvas.add(memeText);
  canvas.setActiveObject(memeText);
  document.getElementById('memeText').value = '';
});

// Add emoji sticker functionality
document.querySelectorAll('.sticker').forEach(sticker => {
  sticker.addEventListener('click', function() {
    const emojiText = new fabric.Text(this.dataset.emoji, {
      fontSize: 40,
      left: 100,
      top: 100,
      selectable: true,
      fill: getRandomColor()
    });
    canvas.add(emojiText);
  });
});

// Helper function for random colors
function getRandomColor() {
  const colors = ['#8a2be2', '#00bfff', '#ff1493', '#00ff00', '#ffff00'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Export meme as PNG
document.getElementById('exportButton').addEventListener('click', function() {
  const link = document.createElement('a');
  link.download = 'cope-meme.png';
  link.href = canvas.toDataURL({
    format: 'png',
    quality: 1
  });
  link.click();
});

// Console joke for crypto enthusiasts
console.log('%cWAGMI! COPE to the moon! 🚀', 
  'color: #8a2be2; font-size: 20px; font-weight: bold;');
console.log('%c(Not financial advice)', 
  'color: #ff1493; font-style: italic;');