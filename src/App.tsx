import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <div className="app-wrap">
        <div className="wrap-card">
          <h3 className="card-title">Title</h3>
          <p className="card-desc">
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Porro consequatur dolore asperiores. Laudantium, laboriosam.
            Laudantium delectus tenetur corrupti fuga fugiat.
          </p>
          <div className="card-features">
            <p className="features-title">Top features</p>
            <div className="features-wrap">
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className="wrap-item">
                  <p className="item-title">Features title</p>
                  <div className="item-divider" />
                  <p className="item-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione odit labore suscipit ea ex voluptates vitae tempore
                    blanditiis consequatur harum?
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
