import "./css/footer/footer.css";

function Footer() {
    return (
        <footer className="footer container">
            <h2 className="footer__title text-primary">Order a callback</h2>
            <form className="footer__form" action="#">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Your email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1">Your name</label>
                    <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Name"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">I consent to data processing</label>
                </div>
                <button type="submit" className="form__button btn btn-primary">Order a callback</button>        
            </form>
        </footer>
    )
}

export default Footer;