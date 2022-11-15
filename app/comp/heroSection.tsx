import Image from 'next/image';
import Button from './button';

import styles from './hero.module.css';

const HeroSection = () => {
  return (
    <div
      className={`relative container mx-auto w-screen flex flex-col justify-center gap-16 border-b-1 border-white border-solid ${styles.hero}`}
    >
      <div className='relative z-10 flex flex-col gap-4'>
        <h1 className='text-white text-xl font-bold'>Nice to meet you!</h1>
        <h1 className='text-white text-xl font-bold'>
          I’m{' '}
          <span className='border-b-green border-b-6 border-solid font-bold'>
            Surya Sai
          </span>
          .
        </h1>
      </div>
      <p className='w-1/4 text-sm font-medium text-grey-100'>
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <Button>Contact me</Button>
      <div className='absolute top-[-6rem] right-0 w-[445px] h-[720px] z-0'>
        <Image
          src='/images/desktop.webp'
          alt='propic'
          fill
        />
      </div>
    </div>
  );
};

export default HeroSection;
