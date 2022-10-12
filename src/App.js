import { useState } from 'react';

function App() {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  const [five, setFive] = useState(false)
  const [six, setSix] = useState(false)

  return (<>
    <div className="home">
      <div className="topbar">
        <img src={require('./logo.png')} alt="Logo" />
        <div className='lang'>
          <select>
            <option>Bahasa Indonesia</option>
            <option>English</option>
          </select>
        </div>
        <button>Sign In</button>
      </div>
      <div className="start">
        <div>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className='input-box'>
            <input type="text" placeholder='Email address' />
            <button>Get Started &#8250;</button>
          </div>
        </div>
      </div>
    </div>
    <div className='content right'>
      <div className='text'>
        <h1>Enjoy on your TV.</h1>
        <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
      </div>
      <div className='image'>
        <img src={require('./tv.png')} alt="TV" />
      </div>
    </div>
    <div className='content left'>
      <div className='text'>
        <h1>Download your shows to watch offline.</h1>
        <h2>Save your favorites easily and always have something to watch.</h2>
      </div>
      <div className='image'>
        <img src={require('./hp.jpg')} alt="HP" />
      </div>
    </div>
    <div className='content right'>
      <div className='text'>
        <h1>Watch everywhere.</h1>
        <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
      </div>
      <div className='image'>
        <img src={require('./device.png')} alt="Device" />
      </div>
    </div>
    <div className='content left'>
      <div className='text'>
        <h1>Create profiles for kids.</h1>
        <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
      </div>
      <div className='image'>
        <img src={require('./kids.png')} alt="Kids" />
      </div>
    </div>
    <div className='faq'>
      <div className='faq-box'>
        <h1>Frequently Asked Questions</h1>
        <h2 onClick={() => {setOne(!one); setTwo(false); setThree(false); setFour(false); setFive(false); setSix(false)}}>What is Netflix? <span className={one ? '' : 'rotate'}>&#10005;</span></h2>
        <div className={one ? 'answer' : 'answer hide'}>
          <h2>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, 
              and more on thousands of internet-connected devices.</h2>
          <h2>You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. 
              There's always something new to discover and new TV shows and movies are added every week!</h2>
        </div>
        <h2 onClick={() => {setTwo(!two); setOne(false); setThree(false); setFour(false); setFive(false); setSix(false)}}>How much does Netflix cost? <span className={two ? '' : 'rotate'}>&#10005;</span></h2>
        <div className={two ? 'answer' : 'answer hide'}>
          <h2>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. 
              Plans range from IDR54,000 to IDR186,000 a month. No extra costs, no contracts.</h2>
        </div>
        <h2 onClick={() => {setThree(!three); setTwo(false); setOne(false); setFour(false); setFive(false); setSix(false)}}>Where can I watch? <span className={three ? '' : 'rotate'}>&#10005;</span></h2>
        <div className={three ? 'answer' : 'answer hide'}>
          <h2>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal 
              computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming 
              media players and game consoles.</h2>
          <h2>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the 
              go and without an internet connection. Take Netflix with you anywhere.</h2>
        </div>
        <h2 onClick={() => {setFour(!four); setTwo(false); setThree(false); setOne(false); setFive(false); setSix(false)}}>How do I cancel? <span className={four ? '' : 'rotate'}>&#10005;</span></h2>
        <div className={four ? 'answer' : 'answer hide'}>
          <h2>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. 
              There are no cancellation fees - start or stop your account anytime.</h2>
        </div>
        <h2 onClick={() => {setFive(!five); setTwo(false); setThree(false); setFour(false); setOne(false); setSix(false)}}>What can I watch on Netflix? <span className={five ? '' : 'rotate'}>&#10005;</span></h2>
        <div className={five ? 'answer' : 'answer hide'}>
          <h2>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. 
              Watch as much as you want, anytime you want.</h2>
        </div>
        <h2 onClick={() => {setSix(!six); setTwo(false); setThree(false); setFour(false); setFive(false); setOne(false)}}>Is Netflix good for kids? <span className={six ? '' : 'rotate'}>&#10005;</span></h2>
        <div className={six ? 'answer' : 'answer hide'}>
          <h2>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows 
              and movies in their own space.</h2>
          <h2>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and 
              block specific titles you don't want kids to see.</h2>
        </div>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className='input-box'>
          <input type="text" placeholder='Email address' />
          <button>Get Started &#8250;</button>
        </div>
      </div>
    </div>
    <div className='footer'>
      <p>Questions? Call <span>007-803-321-2130</span></p>
      <div className='footer-span'>
        <span>FAQ</span>
        <span>Help Center</span>
        <span>Account</span>
        <span>Media Center</span>
        <span>Investor Relations</span>
        <span>Jobs</span>
        <span>Redeem Gift Cards</span>
        <span>Buy Gift Cards</span>
        <span>Ways to Watch</span>
        <span>Terms of Use</span>
        <span>Privacy</span>
        <span>Cookie Preferences</span>
        <span>Corporate Information</span>
        <span>Contact Us</span>
        <span>Speed Test</span>
        <span>Legal Notices</span>
        <span>Only on Netflix</span>
      </div>
      <div className='lang'>
        <select>
          <option>Bahasa Indonesia</option>
          <option>English</option>
        </select>
      </div>
      <span>&copy; 2022 Muhammad Laksmana Indra - Netflix Landing Page Clone</span>
    </div>
  </>);
}

export default App;
