"use client";
import { useRef, useEffect } from "react";

interface GeometricBackgroundProps {
    theme?: "light" | "dark";
}

export default function GeometricBackground({ theme = "light" }: GeometricBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Theme Configuration
        const isDark = theme === "dark";
        const colors = ["#8b5cf6", "#60a5fa", "#f472b6"]; // Soft/Pastel colors (work for both)
        const connectionColor = isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)";

        // Create random floating shapes
        const shapes: { x: number, y: number, r: number, dx: number, dy: number, color: string }[] = [];
        for (let i = 0; i < 20; i++) {
            shapes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: Math.random() * 80 + 20,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        function animate() {
            if (!ctx || !canvas) return; // Safety check

            ctx.clearRect(0, 0, width, height);

            shapes.forEach(shape => {
                shape.x += shape.dx;
                shape.y += shape.dy;

                // Bounce off walls
                if (shape.x < -shape.r || shape.x > width + shape.r) shape.dx = -shape.dx;
                if (shape.y < -shape.r || shape.y > height + shape.r) shape.dy = -shape.dy;

                // Draw Soft Focus Circle
                ctx.beginPath();
                ctx.arc(shape.x, shape.y, shape.r, 0, Math.PI * 2);
                ctx.fillStyle = shape.color;
                ctx.globalAlpha = 0.3; // Transparency for glow
                ctx.filter = "blur(60px)"; // Heavy blur for "blob" effect
                ctx.fill();
                ctx.filter = "none";
                ctx.globalAlpha = 1;
            });

            // Draw Connection Lines (Constellation Effect)
            ctx.strokeStyle = connectionColor;
            ctx.lineWidth = 1;

            for (let i = 0; i < shapes.length; i++) {
                for (let j = i + 1; j < shapes.length; j++) {
                    const dx = shapes[i].x - shapes[j].x;
                    const dy = shapes[i].y - shapes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 400) { // Connect if close
                        ctx.beginPath();
                        ctx.moveTo(shapes[i].x, shapes[i].y);
                        ctx.lineTo(shapes[j].x, shapes[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [theme]); // Re-run if theme changes

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 z-[-10] w-full h-full ${theme === "dark" ? "bg-[#0f0f14]" : "bg-slate-50"}`}
        />
    );
}
