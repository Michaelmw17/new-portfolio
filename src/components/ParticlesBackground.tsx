import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {

     const [init, setInit] = useState(false);
    
      useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
    
      if (!init) return null;
    

  return (
    <Particles
      id="tsparticles"
      className="w-full h-full"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          color: { value: "#747474ff" },
          links: {
            color: "#b0b0b0ff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: { enable: true, mode: "bounce" },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            value: 80,
            density: { enable: true },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: 3 },
        },
        detectRetina: true,
      }}
    />
  );
}
