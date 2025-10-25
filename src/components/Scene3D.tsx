import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import ParticleField from './ParticleField';

const Scene3D = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] opacity-40">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <ambientLight intensity={0.3} />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Scene3D;
