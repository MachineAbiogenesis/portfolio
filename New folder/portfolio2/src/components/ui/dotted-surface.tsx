import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, ...props }: DottedSurfaceProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SEPARATION = 100;
        const AMOUNTX = 50;
        const AMOUNTY = 50;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            10000,
        );
        camera.position.z = 1000;
        camera.position.y = 500;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // CRITICAL: Style the canvas to prevent stacking in StrictMode
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';

        // Capture container in closure for cleanup
        const container = containerRef.current;
        container.appendChild(renderer.domElement);

        const positions: number[] = [];
        const colors: number[] = [];
        const geometry = new THREE.BufferGeometry();

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                const y = 0;
                const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
                positions.push(x, y, z);
                // Purple/violet theme colors (matching website accent)
                // RGB: #a855f7 = (168, 85, 247) normalized to 0-1
                colors.push(0.66, 0.33, 0.97);
            }
        }

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage),
        );
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // Create round glowing particle texture
        const canvas = document.createElement('canvas');
        const size = 64;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext('2d')!;

        // Draw radial gradient for glow effect
        const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        gradient.addColorStop(0, 'rgba(168, 85, 247, 1)');    // Bright center
        gradient.addColorStop(0.2, 'rgba(168, 85, 247, 0.8)'); // Mid glow
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.3)'); // Outer glow
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');     // Fade to transparent

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);

        const texture = new THREE.CanvasTexture(canvas);

        const material = new THREE.PointsMaterial({
            size: 12, // Larger size for better visibility
            vertexColors: true,
            transparent: true,
            opacity: 1.0, // Full opacity for brighter glow
            sizeAttenuation: true,
            map: texture,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let count = 0;
        let animationFrameId: number | null = null;
        let isAnimating = true;

        const animate = () => {
            if (!isAnimating) return;

            const positionAttribute = geometry.attributes.position;
            const positions = positionAttribute.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const index = i * 3;
                    positions[index + 1] =
                        (Math.sin((ix + count) * 0.3) * 50) +
                        (Math.sin((iy + count) * 0.5) * 50);
                    i++;
                }
            }

            positionAttribute.needsUpdate = true;
            renderer.render(scene, camera);

            count += 0.1;
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        animate();

        return () => {
            isAnimating = false;
            window.removeEventListener('resize', handleResize);

            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }

            geometry.dispose();
            material.dispose();
            if (material.map) material.map.dispose(); // Cleanup texture
            renderer.dispose();

            // Use captured container variable for reliable cleanup
            if (container && renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn('pointer-events-none fixed inset-0 z-0', className)}
            {...props}
        />
    );
}
