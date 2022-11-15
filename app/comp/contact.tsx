import FormField from './textfield';
import FormArea from './textarea';
import Button from './button';
import Navbar from './navbar';

const ContactForm = () => {
  return (
    <div className='bg-grey-900 text-white w-screen pb-10'>
      <div className='container mx-auto flex p-16 justify-around border-b-1 border-b-white border-solid'>
        <div className='w-[450px] flex flex-col gap-4'>
          <h3 className='text-xl font-bold'>Contact</h3>
          <p className='text-sm font-medium text-grey-100'>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <div className='w-[450px] grid grid-col-1 gap-6'>
          <FormField
            placeholder='name'
            error={false}
          />
          <FormField
            placeholder='email'
            error={false}
          />
          <FormArea placeholder='Message' />
          <div className='justify-self-end mt-8'>
            <Button>Send Message</Button>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ContactForm;
