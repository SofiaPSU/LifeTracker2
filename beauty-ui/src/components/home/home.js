import './home.css';

var background = <img src="https://images.unsplash.com/photo-1598412795976-9c195182ee01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" alt="background"/>

export default function home(){
    return(
        <div className="page1">
            <div className="welcomePage">
                <div className="title">
                    Making Beauty Sustainable
                </div>
                <div className="sub-text">
                    Donate or Recycle Your Makeup Products, learn More About SustainabilityThe beauty industry creates 120 billion units of packaging every year. In 2015, research found that packaging accounted for 146 million tonnes of plastic every year.
                </div>
                <button className="register-button">
                    Register
                </button>
                <div className="footer-text">
                    We accept most skincare and makeup products for donations and recycling. We priotize  the products that most people use as part of their daily routine. Whether they come in paper, plastic, or glass, we will gladly accept them. Here are some of examples of what we accept....
                </div>
                <div>
                   {background}
                </div>
            </div>
        </div>
    )
}


