import { ReactNode } from 'react';

import '@/styles/components/layout/Wrapper.scss'

type Props = {
  children: ReactNode;
};

export default function Wrapper({ children }: Props) {
  return <div className="wrapper">{children}</div>;
}
