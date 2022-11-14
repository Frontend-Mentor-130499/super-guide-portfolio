import cn from 'classnames';
import styles from './textfield.module.css';

interface Props {
  placeholder: string;
  error: boolean;
}

const FormField = ({ placeholder, error = true }: Props) => {
  return (
    <div
      className={cn(styles.inputWrapper, {
        [styles.error]: error,
      })}
    >
      <input
        type='text'
        placeholder={placeholder}
        className={cn(
          'appearance-none',
          'bg-grey-900',
          'text-white',
          'uppercase',
          'px-5',
          'py-3',
          'pb-6',
          'w-full',
          'border-b-1',
          'border-solid',
          'focus:outline-none',
          'focus:border-b-green',
          {
            'border-b-white': !error,
          },
          {
            'border-b-red': error,
          }
        )}
      />
    </div>
  );
};

export default FormField;
