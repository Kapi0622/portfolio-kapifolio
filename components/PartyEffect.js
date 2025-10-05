"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PartyEffect = ({ isActive, onStop }) => {
  const [items, setItems] = useState([]);
  const [effectType, setEffectType] = useState(null);
  const containerRef = useRef(null);

  // 利用可能な画像リスト
  const images = [
    '/images/resourses/cpp.png',
    '/images/resourses/csharp.png',
    '/images/resourses/github.png',
    '/images/resourses/python.png',
    '/images/resourses/react.png',
    '/images/resourses/ruby.png',
    '/images/resourses/SAKITO.png',
    '/images/resourses/html.png',
    '/images/resourses/css.png',
    '/images/resourses/gopher.png',
    '/images/resourses/slack.png',
    '/images/resourses/vscode.png',
    '/images/resourses/vs.png',
    '/images/resourses/unity.png',
    '/images/resourses/rails.png',
    '/images/resourses/docker.png',
    '/images/resourses/nextjs.png',
  ];

  // ランダムなエフェクトタイプを選択
  useEffect(() => {
    if (isActive && !effectType) {
      const types = ['rain', 'billiard'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      setEffectType(randomType);
    } else if (!isActive) {
      setEffectType(null);
      setItems([]);
    }
  }, [isActive, effectType]);

  // 雨エフェクト
  useEffect(() => {
    if (!isActive || effectType !== 'rain') return;

    const interval = setInterval(() => {
      const newItem = {
        id: Date.now() + Math.random(),
        image: images[Math.floor(Math.random() * images.length)],
        x: Math.random() * window.innerWidth,
        duration: 2 + Math.random() * 3,
      };
      setItems(prev => [...prev, newItem]);

      // アイテムを一定時間後に削除
      setTimeout(() => {
        setItems(prev => prev.filter(item => item.id !== newItem.id));
      }, (newItem.duration + 1) * 1000);
    }, 300);

    return () => clearInterval(interval);
  }, [isActive, effectType]);

  // ビリヤードエフェクト
  useEffect(() => {
    if (!isActive || effectType !== 'billiard') return;

    const initialItems = Array.from({ length: 10 }, (_, i) => ({
      id: Date.now() + i,
      image: images[Math.floor(Math.random() * images.length)],
      x: Math.random() * (window.innerWidth - 60),
      y: Math.random() * (window.innerHeight - 60),
      vx: (Math.random() - 0.5) * 400,
      vy: (Math.random() - 0.5) * 400,
      rotation: Math.random() * 360,
    }));
    setItems(initialItems);

    let animationFrameId;
    const updatePositions = () => {
      setItems(prevItems =>
        prevItems.map(item => {
          let newX = item.x + item.vx * 0.016;
          let newY = item.y + item.vy * 0.016;
          let newVx = item.vx;
          let newVy = item.vy;
          let newRotation = item.rotation + 5;

          // 画面端での反射
          if (newX <= 0 || newX >= window.innerWidth - 60) {
            newVx = -newVx;
            newX = newX <= 0 ? 0 : window.innerWidth - 60;
          }
          if (newY <= 0 || newY >= window.innerHeight - 60) {
            newVy = -newVy;
            newY = newY <= 0 ? 0 : window.innerHeight - 60;
          }

          return {
            ...item,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: newRotation,
          };
        })
      );
      animationFrameId = requestAnimationFrame(updatePositions);
    };

    animationFrameId = requestAnimationFrame(updatePositions);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isActive, effectType]);

  if (!isActive) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <AnimatePresence>
        {effectType === 'rain' &&
          items.map(item => (
            <motion.div
              key={item.id}
              initial={{ y: -100, x: item.x, opacity: 1, rotate: 0 }}
              animate={{
                y: window.innerHeight + 100,
                rotate: 360,
                opacity: [1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: item.duration,
                ease: 'linear',
                opacity: {
                  times: [0, 0.9, 1],
                  duration: item.duration,
                },
              }}
              className="absolute"
              style={{
                width: '50px',
                height: '50px',
              }}
            >
              <img
                src={item.image}
                alt="party item"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </motion.div>
          ))}

        {effectType === 'billiard' &&
          items.map(item => (
            <motion.div
              key={item.id}
              className="absolute"
              style={{
                x: item.x,
                y: item.y,
                width: '60px',
                height: '60px',
                rotate: item.rotation,
              }}
            >
              <img
                src={item.image}
                alt="party item"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default PartyEffect;
