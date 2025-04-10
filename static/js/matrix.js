document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Set canvas size initially and on resize
  window.addEventListener('resize', resizeCanvas);
  
  // Fill background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const letters = 'アァイィウエエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const matrix = letters.split('');
  
  const fontSize = 14;
  const columns = Math.ceil(canvas.width / fontSize);
  let drops = [];
  
  
  function initDrops() {
    drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
  }
  
  initDrops();
  
  function draw() {
   
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    
    for (let i = 0; i < drops.length; i++) {
      // Random character
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      
      
      if (Math.random() > 0.8) {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.8)'; 
      } else {
        ctx.fillStyle = 'rgba(0, 200, 0, 0.5)';
      }
      
      // Draw character
      ctx.font = `${fontSize}px monospace`;
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      // Reset drop to top with random condition
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      // Move drop down
      drops[i]++;
    }
  }
  

  setTimeout(function() {

    setInterval(draw, 33);
  }, 500);
});
