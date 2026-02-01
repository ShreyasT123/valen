'use client';

import { useRef, useState } from 'react';
import './globals.css';

function ValentinePage() {
  // Pages:
  // 0 = Intro page
  // 1 = Question page
  // 2 = Yes page
  const [page, setPage] = useState(0);

  const [messageIndex, setMessageIndex] = useState(0);
  const [yesSize, setYesSize] = useState(20);

  // 🎵 Audio reference
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const messages = [
    'No 😢',
    'Are you sure? 💔',
    'Pleaseee 🥺',
    "Don't break my heart 😭",
    'Say yes already 💘',
  ];

  // ✅ Intro button click → start music + go to Valentine question
  function handleStartClick() {
    audioRef.current?.play(); // start looping music
    setPage(1);
  }

  function handleNoClick() {
    setMessageIndex((prev) => (prev + 1) % messages.length);
    setYesSize((prev) => prev * 1.5);
  }

  function handleYesClick() {
    setPage(2);
  }

  return (
    <div style={styles.container}>
      {/* 🎵 Hidden looping background music */}
      <audio ref={audioRef} loop>
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      {/* ===================== PAGE 0 (INTRO) ===================== */}
      {page === 0 && (
        <>
          <h1 style={styles.title}>Heyyyy 👀💗</h1>
          <h2 style={styles.subtitle}>I want to ask you something...</h2>

          <button onClick={handleStartClick} style={styles.yesButton}>
            Okay 😳
          </button>
        </>
      )}

      {/* ===================== PAGE 1 (VALENTINE QUESTION) ===================== */}
      {page === 1 && (
        <>
          <h1 style={styles.title}>Will you be my Valentine? 💖</h1>

          <img
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGh1d21ucmVkZWpnZGJqNndtYmwxYWg5c3FudXoyN3VvN3I0MndldCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif"
            width={300}
            height={300}
            alt="Cute Valentine"
            style={styles.gif}
          />

          <div style={styles.buttonRow}>
            <button
              onClick={handleYesClick}
              style={{
                ...styles.yesButton,
                fontSize: `${yesSize}px`,
              }}
            >
              YES 💘
            </button>

            <button onClick={handleNoClick} style={styles.noButton}>
              {messages[messageIndex]}
            </button>
          </div>
        </>
      )}

      {/* ===================== PAGE 2 (YES PAGE) ===================== */}
      {page === 2 && (
        <>
          <h1 style={styles.title}>YAYYY!! 💞💞</h1>
          <h2 style={styles.subtitle}>I knew you'd say YES 😍</h2>

          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb21rcGFuOWV2am10d29zaGFqdm9pOGQ0OXUyMjZiN3lkcWVucjFraSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/9XY4f3FgFTT4QlaYqa/giphy.gif"
            width={300}
            height={300}
            alt="Happy Valentine"
            style={styles.gif}
          />
        </>
      )}
    </div>
  );
}

export default ValentinePage;



const styles = {
  container: {
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(135deg, #ff9ec1 0%, #ffc6e3 50%, #ffe6f0 100%)',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    padding: '20px',
    overflow: 'hidden',
  },

  title: {
    fontSize: '3.5rem',
    fontWeight: 700,
    color: '#c41e6e',
    marginBottom: '16px',
    textShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    letterSpacing: '-0.5px',
  },

  subtitle: {
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#e83a7f',
    marginBottom: '32px',
  },

  gif: {
    width: '300px',
    maxWidth: '90vw',
    borderRadius: '24px',
    marginBottom: '40px',
    boxShadow: '0px 12px 32px rgba(196, 30, 110, 0.25)',
    border: '4px solid rgba(255, 255, 255, 0.6)',
    animation: 'float 3s ease-in-out infinite',
  },

  buttonRow: {
    display: 'flex' as const,
    gap: '24px',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },

  yesButton: {
    background: 'linear-gradient(135deg, #ff4d88 0%, #ff1493 100%)',
    color: 'white',
    padding: '16px 32px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    fontSize: '1.1rem',
    fontWeight: 600,
    boxShadow: '0px 6px 20px rgba(255, 77, 136, 0.3)',
    transform: 'translateY(0)',
  },

  noButton: {
    background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
    color: 'white',
    padding: '16px 32px',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '1.05rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
  },
};
