import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleDirection: boolean;
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Resize canvas to fill window
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Initialize stars
    function initStars() {
      if (!canvas) return;
      const stars: Star[] = [];
      const starCount = Math.floor(canvas.width * canvas.height / 8000);
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.01 + 0.005,
          twinkleDirection: Math.random() > 0.5
        });
      }
      
      starsRef.current = stars;
    }
    
    // Animation loop
    let animationFrameId: number;
    
    function animate() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      starsRef.current.forEach(star => {
        if (!ctx) return;
        
        // Handle twinkling effect
        if (star.twinkleDirection) {
          star.opacity += star.twinkleSpeed;
          if (star.opacity >= 1) {
            star.twinkleDirection = false;
          }
        } else {
          star.opacity -= star.twinkleSpeed;
          if (star.opacity <= 0.3) {
            star.twinkleDirection = true;
          }
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Occasionally draw a halo around larger stars
        if (star.size > 1.5 && star.opacity > 0.7) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.2})`;
          ctx.fill();
        }
        
        // Move stars
        star.y += star.speed;
        
        // Reset stars that go off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
          star.size = Math.random() * 2 + 0.5;
          star.speed = Math.random() * 0.5 + 0.1;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 starBackground"
      style={{ background: 'transparent' }}
    />
  );
};

export default StarBackground; 