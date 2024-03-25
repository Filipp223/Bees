import "./css/popular/popular.css";
import honey1 from './img/honey1.png';
import honey2 from './img/honey2.png';
import honey3 from './img/honey3.png';

function Main() {
  return (
    <main className="main">
        <section className="popular container">
            <h2 className="popular__title text-primary">Most Popular</h2>
            <div className="popular__card card">
                <img className="card-img-top" src={honey1} alt="Card image cap"/>
                <div className="card-body">
                  <h3 className="card-title text-primary">Linden honey</h3>
                  <p className="card-text text-muted">Delicious fresh linden honey. One of the sweetest types of honey</p>
                  <a href="#" className="btn btn-primary">Add</a>
                </div>
              </div>
            <div className="popular__card card">
                <img className="card-img-top" src={honey2} alt="Card image cap"/>
                <div className="card-body">
                  <h3 className="card-title text-primary">Sea buckthorn honey</h3>
                  <p className="card-text text-muted">Fruity-sweet. For lovers of delicate and unobtrusive taste</p>
                  <a href="#" className="btn btn-primary">Add</a>
                </div>
              </div>
            <div className="popular__card card">
                <img className="card-img-top" src={honey3} alt="Card image cap"/>
                <div className="card-body">
                  <h3 className="card-title text-primary">Acacia honey</h3>
                  <p className="card-text text-muted">The most useful kind of honey. Rich in vitamins</p>
                  <a href="#" className="btn btn-primary">Add</a>
                </div>
              </div>
        </section>    
    </main>
  )
}

export default Main;