import * as React from 'react';

import type { INarationProps } from './types';
import './styles.css';

// soundEffect: {
//   name: 'whispers',
// }

const Naration = ({ text }: INarationProps) => (
  <div className="naration fade-in-down">
    {text}
  </div>
);

export default Naration;
