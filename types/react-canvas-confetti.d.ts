declare module 'react-canvas-confetti' {
  import { ComponentType } from 'react';
  
  interface ConfettiProps {
    onInit?: (instance: any) => void;
    refConfetti?: (instance: any) => void;
    style?: React.CSSProperties;
  }

  const ReactCanvasConfetti: ComponentType<ConfettiProps>;
  export default ReactCanvasConfetti;
} 