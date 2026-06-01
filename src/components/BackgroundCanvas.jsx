import { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * 99999,
      y: Math.random() * 99999,
      r: Math.random() * 1.2 + 0.3,
      sp: Math.random() * 0.3 + 0.05,
      tw: Math.random() * Math.PI * 2
    }));
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * 99999,
      y: Math.random() * 99999,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.1,
      color: Math.random() > 0.5 ? '0,245,196' : '123,97,255'
    }));

    let t = 0;
    const drawCanvas = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.005;
      
      stars.forEach(s => {
        s.tw += 0.008;
        const a = 0.4 + Math.sin(s.tw) * 0.3;
        ctx.beginPath();
        ctx.arc((s.x + t * s.sp * 10) % W, (s.y + t * s.sp * 5) % H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,234,246,${a})`;
        ctx.fill();
      });
      
      particles.forEach(p => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x % W, p.y % H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });
      
      ctx.strokeStyle = 'rgba(0,245,196,0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 80) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 80) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      
      animationFrameId = requestAnimationFrame(drawCanvas);
    };

    drawCanvas();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef}></canvas>;
};

export default BackgroundCanvas;
