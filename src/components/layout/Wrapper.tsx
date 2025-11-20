import { ReactNode } from 'react';

import '@/styles/components/layout/_wrapper.scss'

type Props = {
  children: ReactNode;
};

export default function Wrapper({ children }: Props) {
  return <div className="wrapper">{children}</div>;
}
