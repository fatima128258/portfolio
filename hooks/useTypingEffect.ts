"use client";

import { useEffect, useState } from "react";

export function useTypingEffect(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseMs = 1800
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(pause);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [words, index, text, deleting, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
