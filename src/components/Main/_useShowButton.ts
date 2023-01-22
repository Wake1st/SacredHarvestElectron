import { useEffect, useState } from 'react';

type UseShowButton = [
  showButton: boolean,
];

export default (hasDecision: boolean): UseShowButton => {
  const [showButton, setShowButton] = useState(true);

  useEffect(
    () => setShowButton(!hasDecision),
    [hasDecision],
  );

  return [showButton];
};
