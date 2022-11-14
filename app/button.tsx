import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className='text-sm text-white underline decoration-green decoration-2 underline-offset-10 hover:text-green'>
      {children}
    </button>
  );
};

export default Button;
