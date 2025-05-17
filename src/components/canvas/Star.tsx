import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, Loader } from "@react-three/drei";
import { random } from "maath";
import { Object3D, Vector3 } from "three";

//@ts-expect-error I don't know what the props type
const Stars = (props) => {
    const ref = useRef<Object3D>();
    const [sphere] = useState(() => {
        const stars = random.inSphere(new Float32Array(100), { radius: 1.0 })
        if (stars.some(v => isNaN(v))) throw new Error("Invalid positions data");
        return stars;
    });

    // to avoid creating rotation on every frame
    const rotation = useMemo(() => new Vector3(0.5, 0.33, 0), []);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x += rotation.x * delta;
            ref.current.rotation.y += rotation.y * delta;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className='w-full min-h-screen absolute inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }} gl={{ powerPreference: 'high-performance' }}>
                <Suspense fallback={<Loader />}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
