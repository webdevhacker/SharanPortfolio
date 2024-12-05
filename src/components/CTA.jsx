import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have anything in mind? <br className='sm:block hidden' />
      </p><br></br>
      <p className="cta-subtext">
      My inbox is always ready to help you regarding any questions related to web development.
      </p>
      <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:i.kumar.sharan@gmail.com'} className='btn'>
        Say Hello
      </Link>
    </section>
  );
};

export default CTA;
