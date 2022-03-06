import React from 'react';
import "./login.css";
// import "./quotes.css"

const API="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class Quotes extends React.Component{
  state={
    quotes:[{quote:"If the wind will not serve, take to the oars.","author":"Latin Proverb",
           author:"Kevin Kruse"}],
    index:0
}
  
  componentDidMount(){
    fetch(API).then(res=>res.json())
    .then(res=>{
      this.setState({
        quotes:res.quotes
      },this.getRandomIndex)
    })
    
  }
  
  getRandomIndex=()=>{
    const {quotes} = this.state;
    
    if(quotes.length >0){
    const index=Math.floor(Math.random()* quotes.length);
    this.setState({
      index
    })
  }
  }
  
  
  render() {
    const{quotes,index }=this.state;
    
    const quote=quotes[index];
    
    const tweetURL =`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;
    
    
    console.log(index)
    return (
       <div className="wrapper d-flex align-items-center justify-content-center vh-100" style={{display: "flex",
        justifyContent: "center" , marginTop: "25px",
        backgroundImage:"https://cutewallpaper.org/21/website-background-images-hd/3d-background-images-for-websites-1920x1080-Local-SEO-company.jpg"
        }}>
      <div className="abc" id="quote-box" style={{border: "1px solid black", borderRadius: "12px"}}>
     {
          quote && (
          <div className="mb-4" style={{
          display: "flex",justifyContent:" space-around",flexDirection:"column" ,padding:"15px"}} >
              <h5 id="text"><i className="fas fa-quote-left"></i>{quote.quote}</h5>
              <strong>
              <cite className="d-block text-right" id="author">
                -{quote.author}
                
              </cite>
              </strong>
          </div>
          )
    }
        <div className="d-flex justify-content-between" style={{display: "flex",justifyContent: "space-around", paddingBottom: "25px"}}>
          <a id="tweet-quote" className="btn btn-sm btn-primary" target="_blank" href={tweetURL}><i className="fab fa-twitter"></i>twitter</a>
      <button className="btn btn-sm btn-primary" onClick={this.getRandomIndex}><i className="fas fa-random" id="new-quote"></i>Get  Quote</button></div>
        
    </div>
      
        </div>
      
    )
  }
  }

export default Quotes
    