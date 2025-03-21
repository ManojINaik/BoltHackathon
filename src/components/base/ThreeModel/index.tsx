import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
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
  disableTextureApplication?: boolean;
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
  disableTextureApplication = false,
}: ModelProps): JSX.Element => {
  const gltf = useLoader(GLTFLoader as any, modelPath) as GLTF;
  const modelRef = useRef<THREE.Group>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionRef = useRef<THREE.AnimationAction | null>(null);
  const { scene, animations } = gltf;

  // Store the current scroll-based animation time for smoother transitions
  const timeRef = useRef<number>(animationStartTime);

  useEffect(() => {
    if (scene && !disableTextureApplication) {
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
      screenTexture.offset.set(0.075, 0.075);

      // Preload the Bolt_new.png texture so it's ready
      textureLoader.load(
        "/models/Bolt_new.png",
        (texture) => {
          console.log("✅ Bolt_new.png loaded successfully");

          // Configure the texture
          const angleInRadians = 0; // Reset rotation to fix upside down issue
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

        // Log all materials for debugging
        console.log("All materials in the model:");
        scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat, idx) => {
                console.log(
                  `Mesh ${object.name}, Material[${idx}]: ${
                    mat.name || "unnamed"
                  }`
                );
              });
            } else if (object.material) {
              console.log(
                `Mesh ${object.name}, Material: ${
                  object.material.name || "unnamed"
                }`
              );
            }
          }
        });

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
                  mat.name === "Material.002" ||
                  mat.name === "material.002" ||
                  mat.name.includes("Material.002") ||
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
                object.material.name === "Material.002" ||
                object.material.name === "material.002" ||
                object.material.name.includes("Material.002") ||
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

        if (modelPath.includes("earth-cartoon")) {
          // Apply website color theme to Earth model
          scene.traverse((object) => {
            if (object instanceof THREE.Mesh && object.material) {
              // Check if it's a material we should apply color to
              if (
                object.material.name.includes("material.002") ||
                object.material.name.includes("material.004")
              ) {
                // For blue parts (oceans)
                object.material.color.set("#9CB1FC"); // Using primary.blue from the theme
              } else if (
                object.material.name.includes("material.001") ||
                object.material.name.includes("material.003")
              ) {
                // For green parts (land)
                object.material.color.set("#BFEFDE"); // Using primary.green from the theme
              }
              object.material.needsUpdate = true;
            }
          });
          console.log("✅ Applied website color theme to Earth model");
        } else {
          console.log("✅ Successfully applied texture to material.002!");
        }
      };
    }
  }, [scene, gltf.parser, disableTextureApplication]);

  useEffect(() => {
    if (scene && animations && animations.length > 0) {
      // Log all available animations with detailed information
      if (modelPath.includes("earth-cartoon")) {
        console.log("========== EARTH MODEL ANIMATIONS ==========");
        animations.forEach((anim, index) => {
          console.log(
            `Animation ${index}: ${anim.name}, Duration: ${anim.duration}, UUID: ${anim.uuid}`
          );
        });
        console.log("============================================");
      }

      // Create animation mixer
      if (!mixerRef.current) {
        mixerRef.current = new AnimationMixer(scene);
      }

      // Stop any previously running animations
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }

      // Only proceed with animation if animationName is provided
      if (!animationName && !modelPath.includes("earth-cartoon")) {
        console.log("No animation name provided - static pose mode");
        return;
      }

      // Try to find the requested animation, or use the first one available
      let clip: AnimationClip | undefined;

      // SPECIAL HANDLING FOR EARTH MODEL
      if (modelPath.includes("earth-cartoon")) {
        if (animations.length === 0) {
          console.warn("Earth model has no animations!");
          return;
        }

        // Always use the animation with index 1 if it exists, otherwise index 0
        const animationIndex = animations.length > 1 ? 1 : 0;
        clip = animations[animationIndex];

        console.log(
          `EARTH MODEL: Using animation at index ${animationIndex}:`,
          clip.name,
          "Duration:",
          clip.duration,
          "Tracks:",
          clip.tracks.length
        );
      } else {
        // Normal animation lookup for other models

        // First look for exact match
        clip = animations.find((anim) => anim.name === animationName);
        console.log(
          "Looking for animation:",
          animationName,
          "Found:",
          clip ? "yes" : "no"
        );

        // If no exact match, try case-insensitive match
        if (!clip && animationName) {
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
      }

      if (clip) {
        // Log if this is for Earth model
        if (modelPath.includes("earth-cartoon")) {
          console.log(
            "EARTH ANIMATION SETUP: Using clip:",
            clip.name,
            "Duration:",
            clip.duration,
            "Tracks:",
            clip.tracks.map((t) => t.name).join(", ")
          );
        }

        actionRef.current = mixerRef.current.clipAction(clip);
        actionRef.current.clampWhenFinished = false;
        actionRef.current.setLoop(LoopRepeat, Infinity);

        // Set appropriate timeScale based on model type
        if (modelPath.includes("earth-cartoon")) {
          actionRef.current.timeScale = 1.0; // Normal speed for Earth
          // Make sure we're not in paused state
          actionRef.current.paused = false;
          // Enable animation immediately for Earth
          actionRef.current.enabled = true;
          // Set animation weight to ensure it's visible
          actionRef.current.weight = 1;
          console.log("EARTH ANIMATION: Action created and ready to play");
        } else {
          actionRef.current.timeScale = 1.0;
        }

        actionRef.current.reset().play();
        console.log(
          `Animation started: ${clip.name} (${modelPath.split("/").pop()})`
        );

        // Force an update of the mixer to ensure animation runs
        mixerRef.current.update(0.1);
      } else {
        console.warn(`No animations found in model: ${modelPath}`);
      }
    } else if (modelPath.includes("earth-cartoon")) {
      console.warn("Earth model: No animations available or scene not loaded");
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [scene, animations, animationName, modelPath]);

  useEffect(() => {
    // Skip if we don't have a mixer or action
    if (!mixerRef.current || !actionRef.current) {
      return;
    }

    // For Earth model, we always want the animation to play, regardless of animationName
    if (modelPath.includes("earth-cartoon")) {
      // Make sure action is not stopped for Earth
      if (!actionRef.current.isRunning()) {
        actionRef.current.play();
      }
      return;
    }

    // For other models, standard behavior:
    // If animation name is undefined, ensure animation is stopped
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
  }, [
    scrollProgress,
    animationStartTime,
    animationEndTime,
    animationName,
    modelPath,
  ]);

  useFrame((state) => {
    // Auto-rotate the model if enabled
    if (autoRotate && modelRef.current) {
      // Earth model will have continuous rotation at fixed speed
      if (modelPath.includes("earth-cartoon")) {
        modelRef.current.rotation.y += 0.005; // Constant rotation for Earth
      } else {
        // For other models like laptop, use subtle oscillation
        const targetRotation =
          rotation[1] + Math.sin(state.clock.getElapsedTime() * 0.15) * 0.1;
        modelRef.current.rotation.y +=
          (targetRotation - modelRef.current.rotation.y) * 0.05;
      }
    }

    // Always update the animation mixer with smooth transitions if it exists
    if (
      mixerRef.current &&
      actionRef.current &&
      (animationName || modelPath.includes("earth-cartoon"))
    ) {
      const delta = state.clock.getDelta();

      // For Earth model, let the animation play continuously without scroll influence
      if (modelPath.includes("earth-cartoon")) {
        // Force Earth model animation to play continuously
        if (actionRef.current.paused) {
          console.log("Unpausing Earth animation");
          actionRef.current.paused = false;
        }

        // Force Earth animation to be enabled
        if (!actionRef.current.enabled) {
          console.log("Enabling Earth animation");
          actionRef.current.enabled = true;
        }

        // Update continuously
        mixerRef.current.update(delta);

        // Log animation time periodically for debugging (less frequently)
        if (Math.floor(state.clock.getElapsedTime()) % 10 === 0) {
          console.log(
            "Earth animation time:",
            mixerRef.current.time.toFixed(2)
          );
        }
      } else {
        // For other models like laptop, use scroll-based animation timing
        const currentTime = mixerRef.current.time;
        const targetTime = timeRef.current;

        // Reduced smoothing factor for slower, more gentle transitions
        const lerpFactor = 0.04; // Reduced for slower, smoother transitions

        // Calculate the new time with smoothing
        const newTime = currentTime + (targetTime - currentTime) * lerpFactor;

        // Set the new time directly on the mixer
        mixerRef.current.setTime(newTime);

        // Still need to update the mixer with delta time
        mixerRef.current.update(delta);
      }

      // Debug - log animation state periodically (but less frequently)
      if (Math.floor(state.clock.getElapsedTime()) % 30 === 0) {
        console.log(
          `Model: ${modelPath.split("/").pop()}, Animation running:`,
          !actionRef.current.paused,
          "TimeScale:",
          actionRef.current.timeScale,
          "Enabled:",
          actionRef.current.enabled,
          "Weight:",
          actionRef.current.weight,
          "Time:",
          mixerRef.current.time.toFixed(2)
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
  disableTextureApplication?: boolean;
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
  animationStartTime = 3.0,
  animationEndTime = 8.75,
  scrollProgress = 0,
  disableTextureApplication = false,
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
            disableTextureApplication={disableTextureApplication}
          />
        </Suspense>
        {/* Note: Camera and controls are created automatically in the older version */}
      </Canvas>
    </ModelContainer>
  );
};

const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default ThreeModel;
