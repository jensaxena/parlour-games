import React from 'react';
import ReactDOM from 'react-dom';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <figure className="clearfix">
          <img src="/public/images/th-wallpaper-greyscale-100x100.jpg" alt="" />
          <figcaption>
            <h2>Tarot</h2>
            <p>The answers you seek may be in the cards.</p>
          </figcaption>
        </figure>
        <figure className="clearfix">
          <img src="/public/images/th-curtain-greyscale-100x100.jpg" alt="" />
          <figcaption>
            <h2>Death Oracle</h2>
            <p>O, capricious fate! What lies in store?</p>
          </figcaption>
        </figure>
        <figure className="clearfix">
          <img src="/public/images/th-cloud-greyscale-100x100.jpg" alt="" />
          <figcaption>
            <h2>Get Help</h2>
            <p>Advice. Results not guaranteed.</p>
          </figcaption>
        </figure>
      </main>
    )
  }
}
