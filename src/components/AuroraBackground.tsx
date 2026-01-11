"use client";
import { useRef, useEffect } from "react";

export default function AuroraBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Light mode colors (Pastel Purple, Blue, Pink)
        const gradients = [
            { color: [80, 87, 230], x: 0.2, y: 0.2, r: 0, vx: 0.002, vy: 0.003 }, // Brand Color
            { color: [96, 165, 250], x: 0.8, y: 0.3, r: 0, vx: -0.003, vy: 0.002 },  // Soft Blue
            { color: [130, 137, 240], x: 0.5, y: 0.8, r: 0, vx: 0.001, vy: -0.004 },  // Lighter Brand Variant
            { color: [244, 114, 182], x: 0.4, y: 0.5, r: 0, vx: -0.002, vy: 0.001 }, // Soft Pink
        ];

        function animate() {
            if (!ctx || !canvas) return;

            // Clear with light base
            ctx.fillStyle = "#f8fafc"; // Slate-50
            ctx.fillRect(0, 0, width, height);

            gradients.forEach(g => {
                // Move
                g.x += g.vx;
                g.y += g.vy;

                // Bounce
                if (g.x <= -0.2 || g.x >= 1.2) g.vx *= -1;
                if (g.y <= -0.2 || g.y >= 1.2) g.vy *= -1;

                const px = g.x * width;
                const py = g.y * height;
                const radius = Math.min(width, height) * 0.6; // Large spread

                // Draw radial gradient
                const grd = ctx.createRadialGradient(px, py, 0, px, py, radius);
                grd.addColorStop(0, `rgba(${g.color[0]}, ${g.color[1]}, ${g.color[2]}, 0.4)`);
                grd.addColorStop(0.5, `rgba(${g.color[0]}, ${g.color[1]}, ${g.color[2]}, 0.1)`);
                grd.addColorStop(1, "transparent");

                ctx.fillStyle = grd;
                ctx.globalCompositeOperation = "multiply"; // Blend mode for watercolor effect
                ctx.beginPath();
                ctx.arc(px, py, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Subtle Overlay Grid
            ctx.globalCompositeOperation = "source-over";
            ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
            ctx.lineWidth = 1;
            const gridSize = 60;

            // Draw some vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }
            // Draw some horizontal lines
            for (let y = 0; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
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

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-[-10] w-full h-full"
        />
    );
}
