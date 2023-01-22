import { useEffect, useState } from 'react';
import type { UseAnimate } from './types';

export default (
  conditional: any,
  trueClasses: string[],
  falseClasses: string[],
): UseAnimate => {
  const [animations, setAnimation] = useState<string[]>([]);

  useEffect(() => {
    setAnimation(conditional ? trueClasses : falseClasses);
  }, [conditional, trueClasses, falseClasses]);

  return [animations];
};
