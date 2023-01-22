import type { MouseEventHandler } from 'react';

export interface IProgressButtonProps {
  show: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}
