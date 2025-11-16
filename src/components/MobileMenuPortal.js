import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function MobileMenuPortal({ open, children }) {
  const mountRef = useRef(null);
  if (!mountRef.current && typeof document !== 'undefined') {
    const el = document.createElement('div');
    el.className = 'mobile-portal-root';
    mountRef.current = el;
  }

  useEffect(() => {
    if (!mountRef.current) return;
    document.body.appendChild(mountRef.current);
    return () => {
      if (mountRef.current && document.body.contains(mountRef.current)) {
        document.body.removeChild(mountRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (open) {
      // lock scroll when menu is open
      const prevOverflow = document.body.style.overflow;
      const prevTouch = document.body.style.touchAction;
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.touchAction = prevTouch;
      };
    }
  }, [open]);

  if (!open || !mountRef.current) return null;
  return createPortal(children, mountRef.current);
}
