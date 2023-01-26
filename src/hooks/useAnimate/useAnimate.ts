import { useEffect, useState } from 'react';
import type { UseAnimate } from './types';

export default (
  conditional: any,
  trueClasses: string[],
  falseClasses: string[],
): UseAnimate => {
  const [animations, setAnimation] = useState<string[]>([]);
  const [pastConditional, setPastConditional] = useState();

  useEffect(() => {
    if (conditional !== pastConditional) {
      setAnimation(conditional ? trueClasses : falseClasses);
      setPastConditional(conditional);
    }
  }, [
    pastConditional,
    conditional,
    trueClasses,
    falseClasses,
  ]);

  return [animations];
};
