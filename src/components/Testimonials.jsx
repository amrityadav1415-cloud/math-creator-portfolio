export default function Testimonials() {

  const testimonials = [

    {
      name: "Ananya Mishra",
      role: "Senior Secondary Student",
      text: "The learning experience feels modern, structured, and extremely engaging for students preparing academically."
    },

    {
      name: "Aditya Raj",
      role: "Competitive Exam Aspirant",
      text: "The explanation style is clear, professional, and helps build strong conceptual understanding with confidence."
    },

    {
      name: "Sneha Verma",
      role: "Academic Learner",
      text: "Every session feels interactive and motivating. The presentation quality makes studying much more interesting."
    }

  ];

  return (

    <section className="testimonials-section">

      <div className="testimonials-top">

        <span className="section-label">
          Student Testimonials
        </span>

        <h2 className="section-title">
          WHAT STUDENTS
          SAY
        </h2>

      </div>

      <div className="testimonials-grid">

        {testimonials.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <div className="quote-mark">
              "
            </div>

            <p className="testimonial-text">
              {item.text}
            </p>

            <div className="testimonial-user">

              <h3 className="testimonial-name">
                {item.name}
              </h3>

              <span className="testimonial-role">
                {item.role}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}