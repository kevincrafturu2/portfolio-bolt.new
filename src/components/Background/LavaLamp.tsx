import React, { useEffect, useRef } from 'react';

const LavaLamp: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const blobs: Blob[] = [];
    const blobCount = 2; // Reduced to 2 bubbles

    class Blob {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      life: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 100 + 50; // Larger bubbles
        this.vx = (Math.random() - 0.5) * 0.5; // Slower movement
        this.vy = (Math.random() - 0.5) * 0.5; // Slower movement
        this.life = Math.random() * 0.3 + 0.7;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < this.radius || this.x > canvas.width - this.radius) this.vx *= -1;
        if (this.y < this.radius || this.y > canvas.height - this.radius) this.vy *= -1;

        this.vx += (Math.random() - 0.5) * 0.02;
        this.vy += (Math.random() - 0.5) * 0.02;

        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > 0.5) {
          this.vx = (this.vx / speed) * 0.5;
          this.vy = (this.vy / speed) * 0.5;
        }
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, `rgba(255, 69, 0, ${this.life * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < blobCount; i++) {
      blobs.push(new Blob());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(26, 15, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      blobs.forEach(blob => {
        blob.update();
        blob.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30"
    />
  );
};

export default LavaLamp;