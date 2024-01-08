import "./AboutPage.css";

function AboutPage() {
  return (
    <section className="consistent-padding">
      <h2 className="text-align-center">About the project</h2>
      <div className="container about-container">
        <h3 className="text-align-center">Genereal overview</h3>
        <p className=" about-paragraph">
          This is a simple fullstack project made with React, Express and
          MongoDB aimed to showcase mainly CRUD operations, integration of
          Stripe payment processor and automatic emails.
        </p>
        <p className="about-paragraph">
          User can register, log in to their account, edit their account, post
          products, update and delete posts.
        </p>
        <p className="about-paragraph"></p>
      </div>
    </section>
  );
}
export default AboutPage;
