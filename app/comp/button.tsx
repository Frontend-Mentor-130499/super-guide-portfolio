import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className='w-fit text-[16px] tracking-widest text-white underline decoration-green decoration-2 underline-offset-10 hover:text-green uppercase'>
      {children}
    </button>
  );
};

export default Button;
