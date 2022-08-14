interface ShiftByProps {
  /**
   * The x value to translate.
   */
  x?: number;
  /**
   * The y value to translate.
   */
  y?: number;
  /**
   * The element to translate.
   */
  children: React.ReactNode | string | number;
}

/**
 * A component to translate an element to get closer to pixel perfect.
 */

export default function ShiftBy({ x = 0, y = 0, children }: ShiftByProps) {
  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
