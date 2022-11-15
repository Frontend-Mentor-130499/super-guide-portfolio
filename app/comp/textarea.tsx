import cn from 'classnames';
import styles from './textarea.module.css';

interface Props {
  placeholder: string;
}

const FormArea = ({ placeholder }: Props) => {
  return (
    <textarea
      className={cn(
        'border-b-1',
        'bg-grey-900',
        'resize-none',
        'w-full',
        'border-b-1',
        'border-solid',
        'border-b-white',
        'uppercase',
        'px-2',
        'pt-3',
        'pb-8',
        'text-white',
        'focus:outline-none',
        'focus:border-b-green'
      )}
      placeholder={placeholder}
    />
  );
};

export default FormArea;
