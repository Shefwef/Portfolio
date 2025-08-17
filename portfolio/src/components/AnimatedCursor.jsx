import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState([]);
  const [cursorVariant, setCursorVariant] = useState('default');
  const moveTimeoutRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Update trail
      setTrail(prev => {
        const newTrail = [newPosition, ...prev.slice(0, 8)];
        return newTrail;
      });
      
      setIsMoving(true);
      
      // Clear existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      // Set new timeout
      moveTimeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const target = e.target;
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select, .cursor-pointer, .group');
      setIsHovering(isInteractive);
      
      // Set cursor variant based on element type
      if (target.matches('a')) {
        setCursorVariant('link');
      } else if (target.matches('button, [role="button"]')) {
        setCursorVariant('button');
      } else if (target.matches('input, textarea')) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
    };
  }, []);

  const getCursorVariants = () => {
    switch (cursorVariant) {
      case 'link':
        return {
          scale: 1.5,
          backgroundColor: '#3b82f6',
          mixBlendMode: 'normal',
        };
      case 'button':
        return {
          scale: 1.2,
          backgroundColor: '#8b5cf6',
          mixBlendMode: 'normal',
        };
      case 'text':
        return {
          scale: 0.8,
          backgroundColor: '#f59e0b',
          mixBlendMode: 'normal',
        };
      default:
        return {
          scale: 1,
          backgroundColor: '#10b981',
          mixBlendMode: 'difference',
        };
    }
  };

  return (
    <>
      {/* Enhanced trail effect */}
      <AnimatePresence>
        {trail.map((position, index) => (
          <motion.div
            key={`trail-${index}`}
            className="fixed top-0 left-0 w-1 h-1 bg-emerald-400 rounded-full pointer-events-none z-[9994]"
            style={{
              x: position.x - 2,
              y: position.y - 2,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ 
              scale: 0,
              opacity: 0,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main cursor dot with enhanced effects */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          backgroundColor: getCursorVariants().backgroundColor,
          mixBlendMode: getCursorVariants().mixBlendMode,
        }}
        animate={{
          scale: isClicking ? 0.3 : getCursorVariants().scale,
          rotate: isMoving ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          rotate: { duration: 0.8, ease: "easeOut" },
        }}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: getCursorVariants().backgroundColor,
            filter: 'blur(4px)',
          }}
          animate={{
            scale: isMoving ? [1, 1.5, 1] : 1,
            opacity: isMoving ? [0.5, 0.8, 0.5] : 0.3,
          }}
          transition={{
            duration: 0.6,
            repeat: isMoving ? Infinity : 0,
          }}
        />
      </motion.div>

      {/* Dynamic outer ring */}
      <motion.div
        className="fixed top-0 left-0 border-2 rounded-full pointer-events-none z-[9998]"
        style={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          width: 40,
          height: 40,
          borderColor: `${getCursorVariants().backgroundColor}60`,
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.4,
          rotate: isMoving ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          rotate: { duration: 1.2, ease: "easeInOut" },
        }}
      />

      {/* Magnetic particles */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: getCursorVariants().backgroundColor,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isMoving ? [0, 1.2, 0] : [0, 0.8, 0],
              opacity: isMoving ? [0, 0.8, 0] : [0, 0.4, 0],
              x: [0, (Math.cos(i * 60 * Math.PI / 180) * (isHovering ? 25 : 15))],
              y: [0, (Math.sin(i * 60 * Math.PI / 180) * (isHovering ? 25 : 15))],
              rotate: [0, 360],
            }}
            transition={{
              duration: isMoving ? 0.8 : 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced glow effect */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9996] blur-xl"
        style={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
          width: 60,
          height: 60,
          backgroundColor: `${getCursorVariants().backgroundColor}15`,
        }}
        animate={{
          scale: isHovering ? 2.5 : (isMoving ? 1.5 : 1),
          opacity: isHovering ? 0.6 : (isMoving ? 0.3 : 0.1),
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 25,
        }}
      />

      {/* Click explosion effect */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9995]"
            style={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`explosion-${i}`}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: getCursorVariants().backgroundColor,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [1, 0.8, 0],
                  x: [0, Math.cos(i * 45 * Math.PI / 180) * 40],
                  y: [0, Math.sin(i * 45 * Math.PI / 180) * 40],
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor text indicator */}
      <AnimatePresence>
        {cursorVariant !== 'default' && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9993] text-xs font-semibold px-2 py-1 rounded-full"
            style={{
              x: mousePosition.x + 20,
              y: mousePosition.y - 30,
              backgroundColor: `${getCursorVariants().backgroundColor}20`,
              color: getCursorVariants().backgroundColor,
              border: `1px solid ${getCursorVariants().backgroundColor}40`,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {cursorVariant.toUpperCase()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
