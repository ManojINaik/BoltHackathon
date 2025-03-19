import {
  OrbitControls,
  PerspectiveCamera,
} from "drei";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import React, { useRef, useEffect } from "react";
import { Suspense } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { AnimationMixer, AnimationClip, LoopRepeat } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface ModelProps {
  modelPath: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  animationName?: string;
  animationStartTime?: number;
  animationEndTime?: number;
  scrollProgress?: number;
}

const Model = ({
  modelPath,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  autoRotate = true,
  animationName,
  animationStartTime = 0,
  animationEndTime = 10,
  scrollProgress = 0,
}: ModelProps): JSX.Element => {
  const gltf = useLoader(GLTFLoader as any, modelPath) as GLTF;
  const modelRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionRef = useRef<THREE.AnimationAction | null>(null);
  const { scene, animations } = gltf;

  // Store the current scroll-based animation time for smoother transitions
  const timeRef = useRef<number>(animationStartTime);

  useEffect(() => {
    if (scene) {
      console.log("Processing model materials...");

      // Create texture loader for loading screen texture
      const textureLoader = new THREE.TextureLoader();

      // Load the local bolt.png image as a texture
      const screenTexture = textureLoader.load("/images/bolt.png");
      screenTexture.anisotropy = 16;
      screenTexture.needsUpdate = true;

      // Configure texture to fit properly on screen
      screenTexture.wrapS = THREE.ClampToEdgeWrapping;
      screenTexture.wrapT = THREE.ClampToEdgeWrapping;
      screenTexture.repeat.set(0.85, 0.85); // Slightly scaled down
      screenTexture.offset.set(0.075, 0.075); // Center the image

      // Preload the Bolt_new.png texture so it's ready
      textureLoader.load(
        "/models/Bolt_new.png",
        (texture) => {
          console.log("✅ Bolt_new.png loaded successfully");

          // Configure the texture
          const angleInRadians = 178.9977 * (Math.PI / 180);
          texture.rotation = angleInRadians;
          texture.center.set(0.5, 0.5); // Set center point for rotation
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.anisotropy = 16;
          texture.needsUpdate = true;

          // Direct approach to apply the texture to material.002
          applyTextureToSpecificMaterial(texture);
        },
        undefined,
        (error) => console.error("❌ Error loading Bolt_new.png:", error)
      );

      // Direct approach to apply the texture to material.002
      const applyTextureToSpecificMaterial = (texture: THREE.Texture) => {
        console.log("🔍 Searching for material.002 in the model...");
        let materialFound = false;

        // DIRECT APPROACH: Apply to any material named material.002 or containing "Base color"
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            console.log(`Checking mesh: ${object.name}`);

            // Handle material array
            if (Array.isArray(object.material)) {
              object.material.forEach((mat, index) => {
                console.log(`Material[${index}]: ${mat.name || "unnamed"}`);

                // Check if this is the target material
                if (
                  mat.name === "material.002" ||
                  mat.name.includes("material.002") ||
                  mat.name.toLowerCase().includes("base") ||
                  mat.name.toLowerCase().includes("color") ||
                  mat.name.toLowerCase().includes("base color")
                ) {
                  console.log(`🎯 Found target material: ${mat.name}`);

                  // Apply texture with the specific rotation angle
                  if (mat instanceof THREE.MeshStandardMaterial) {
                    mat.map = texture;
                    mat.roughness = 0.1;
                    mat.metalness = 0.9;
                    mat.needsUpdate = true;
                    materialFound = true;
                  }
                }
              });
            }
            // Handle single material
            else if (object.material) {
              console.log(`Material: ${object.material.name || "unnamed"}`);

              // Check if this is the target material
              if (
                object.material.name === "material.002" ||
                object.material.name.includes("material.002") ||
                object.material.name.toLowerCase().includes("base") ||
                object.material.name.toLowerCase().includes("color") ||
                object.material.name.toLowerCase().includes("base color")
              ) {
                console.log(
                  `🎯 Found target material: ${object.material.name}`
                );

                // Apply texture with the specific rotation angle
                if (object.material instanceof THREE.MeshStandardMaterial) {
                  object.material.map = texture;
                  object.material.roughness = 0.1;
                  object.material.metalness = 0.9;
                  object.material.needsUpdate = true;
                  materialFound = true;
                }
              }
            }
          }
        });

        if (!materialFound) {
          console.warn(
            "⚠️ Could not find material.002 in the model. Applying to all materials as fallback..."
          );

          // FALLBACK: Apply to all materials as a last resort
          scene.traverse((object) => {
            if (object instanceof THREE.Mesh) {
              if (Array.isArray(object.material)) {
                object.material.forEach((mat) => {
                  if (mat instanceof THREE.MeshStandardMaterial) {
                    console.log(
                      `⚡ Applied texture to material: ${mat.name || "unnamed"}`
                    );
                    mat.map = texture;
                    mat.needsUpdate = true;
                  }
                });
              } else if (
                object.material instanceof THREE.MeshStandardMaterial
              ) {
                console.log(
                  `⚡ Applied texture to material: ${
                    object.material.name || "unnamed"
                  }`
                );
                object.material.map = texture;
                object.material.needsUpdate = true;
              }
            }
          });
        } else {
          console.log("✅ Successfully applied texture to material.002!");
        }
      };

      // Helper function to get all materials from the scene
      const getAllMaterials = (): THREE.Material[] => {
        const materials: THREE.Material[] = [];

        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => materials.push(mat));
            } else {
              materials.push(object.material);
            }
          }
        });

        return materials;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene, gltf.parser]);

  useEffect(() => {
    if (scene && animations && animations.length > 0) {
      console.log(
        "Available animations in model:",
        animations.map((a) => a.name).join(", ")
      );

      // Create animation mixer
      if (!mixerRef.current) {
        mixerRef.current = new AnimationMixer(scene);
      }

      // Stop any previously running animations
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }

      // Only proceed with animation if animationName is provided
      if (!animationName) {
        console.log("No animation name provided - static pose mode");
        return;
      }

      // Try to find the requested animation, or use the first one available
      let clip: AnimationClip | undefined;

      // First look for exact match
      clip = animations.find((anim) => anim.name === animationName);
      console.log(
        "Looking for animation:",
        animationName,
        "Found:",
        clip ? "yes" : "no"
      );

      // If no exact match, try case-insensitive match
      if (!clip) {
        clip = animations.find(
          (anim) => anim.name.toLowerCase() === animationName.toLowerCase()
        );
        console.log(
          "Trying case-insensitive match. Found:",
          clip ? "yes" : "no"
        );
      }

      // If still no match, try to find an animation containing "Animation"
      if (!clip) {
        const animationClip = animations.find(
          (anim) => anim.name && anim.name.includes("Animation")
        );
        if (animationClip) {
          clip = animationClip;
          console.log(
            "Found animation containing 'Animation':",
            animationClip.name
          );
        }
      }

      // If still no match, use the first animation
      if (!clip && animations.length > 0) {
        clip = animations[0];
        console.log("Using first available animation:", clip.name);
      }

      if (clip) {
        actionRef.current = mixerRef.current.clipAction(clip);
        actionRef.current.clampWhenFinished = true;
        actionRef.current.setLoop(LoopRepeat, Infinity);
        // Use a faster timeScale to make the animation more noticeable
        actionRef.current.timeScale = 2.0;
        actionRef.current.reset().play();
        console.log("Animation started:", clip.name);

        // Force an update of the mixer to ensure animation runs
        mixerRef.current.update(1);
      } else {
        console.warn("No animations found in model");
      }
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [scene, animations, animationName]);

  useEffect(() => {
    // Skip if we don't have a mixer or action
    if (!mixerRef.current || !actionRef.current) {
      return;
    }

    // If animation name is undefined, ensure animation is stopped (static pose)
    if (!animationName) {
      actionRef.current.stop();
      return;
    }

    // Update target time based on scroll progress
    if (scrollProgress >= 0 && scrollProgress <= 1) {
      const duration = animationEndTime - animationStartTime;
      const targetTime = animationStartTime + duration * scrollProgress;

      // Store the target time in our ref
      timeRef.current = targetTime;

      // Ensure animation is not paused when scrolling
      if (actionRef.current.paused) {
        actionRef.current.paused = false;
      }

      // Log animation progress for debugging
      if (
        scrollProgress === 0 ||
        scrollProgress === 1 ||
        scrollProgress === 0.5
      ) {
        console.log(
          `Target animation time: ${targetTime.toFixed(
            2
          )}, Progress: ${scrollProgress}`
        );
      }
    }
  }, [scrollProgress, animationStartTime, animationEndTime, animationName]);

  useFrame(({ clock }) => {
    // Auto-rotate the model if enabled
    if (autoRotate && modelRef.current) {
      // Make rotation smoother by updating less aggressively
      const targetRotation =
        rotation[1] + Math.sin(clock.getElapsedTime() * 0.15) * 0.1;
      modelRef.current.rotation.y +=
        (targetRotation - modelRef.current.rotation.y) * 0.05;
    }

    // Always update the animation mixer with smooth transitions if it exists
    if (mixerRef.current && actionRef.current && animationName) {
      const delta = clock.getDelta();

      // Apply smooth transition to the animation time
      const currentTime = mixerRef.current.time;
      const targetTime = timeRef.current;
      const lerpFactor = 0.05; // Lower for smoother transitions

      // Calculate the new time with smoothing
      const newTime = currentTime + (targetTime - currentTime) * lerpFactor;

      // Set the new time directly on the mixer
      mixerRef.current.setTime(newTime);

      // Still need to update the mixer with delta time
      mixerRef.current.update(delta);

      // Debug - log animation state periodically
      if (Math.floor(clock.getElapsedTime() * 10) % 100 === 0) {
        console.log(
          "Animation running:",
          !actionRef.current.paused,
          "Current time:",
          currentTime.toFixed(2),
          "Target time:",
          targetTime.toFixed(2),
          "TimeScale:",
          actionRef.current.timeScale
        );
      }
    }
  });

  return (
    <group
      ref={modelRef}
      position={position}
      rotation={[rotation[0], rotation[1], rotation[2]]}
      scale={[scale, scale, scale]}
    >
      <primitive object={gltf.scene} />
    </group>
  );
};

interface ThreeModelProps {
  modelPath: string;
  width?: string;
  height?: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  autoRotate?: boolean;
  className?: string;
  animationName?: string;
  animationStartTime?: number;
  animationEndTime?: number;
  scrollProgress?: number;
}

const ThreeModel = ({
  modelPath,
  width = "100%",
  height = "100%",
  position = [0, -0.3, 0],
  rotation = [0.1, 0, 0],
  scale = 1,
  autoRotate = true,
  className,
  animationName,
  animationStartTime = 6.0,
  animationEndTime = 8.75,
  scrollProgress = 0,
}: ThreeModelProps): JSX.Element => {
  return (
    <ModelContainer className={className} style={{ width, height }}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={0.9} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2.5}
          /* eslint-disable-next-line react/no-unknown-property */
          castShadow
        />
        <pointLight position={[-10, 5, -10]} intensity={1.0} />
        <directionalLight
          position={[5, 8, -10]}
          intensity={1.2}
          /* eslint-disable-next-line react/no-unknown-property */
          castShadow
        />
        <pointLight position={[0, -10, 0]} intensity={0.6} />
        <hemisphereLight intensity={0.7} />
        <PerspectiveCamera position={[0, 0, 6]} fov={45} />
        <Suspense fallback={null}>
          <Model
            modelPath={modelPath}
            position={position}
            rotation={rotation}
            scale={scale}
            autoRotate={autoRotate}
            animationName={animationName}
            animationStartTime={animationStartTime}
            animationEndTime={animationEndTime}
            scrollProgress={scrollProgress}
          />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </ModelContainer>
  );
};

const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default ThreeModel;
