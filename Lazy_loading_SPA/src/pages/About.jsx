export default function About() {
  return (
    <div className="card">
      <h1>About This Project 💡</h1>
      <p>
        This project is built using React and React Router.
      </p>
      <p>
        It implements dynamic code splitting using 
        <strong> React.lazy() </strong> and 
        <strong> Suspense </strong> for better optimization.
      </p>
      <p>
        The goal is to enhance user experience by loading 
        resources only when needed.
      </p>
    </div>
  );
}
