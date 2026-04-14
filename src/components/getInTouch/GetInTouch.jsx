import "./getInTouch.css"

function GetInTouch() {
  return (
    <section className="get-in-touch">
      <h2 className="get-in-touch__title">Get in Touch</h2>
      <p className="get-in-touch__text">
        We&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
      </p>

      <ul className="get-in-touch__list">
        <li className="get-in-touch__item">
          <span className="get-in-touch__label">Email:</span>
          <a href="mailto:aimrmike5@gmail.com" className="get-in-touch__link">
            aimrmike5@gmail.com
          </a>
        </li>
        <li className="get-in-touch__item">
          <span className="get-in-touch__label">Phone:</span>
          <a href="tel:+2348109433307" className="get-in-touch__link">
            +234 810 943 3307
          </a>
        </li>
      </ul>
    </section>
  );
}

export default GetInTouch