import React from 'react';
import './intro.style.scss';

const Intro = () => {
  return (
    <div>
      <div className='intro-container'>
        <h1>Welcome</h1>
        <p>
          East Bay React is an online{' '}
          <a
            className='discord-a-tag'
            href='https://www.meetup.com/east-bay-react/'
          >
            group
          </a>{' '}
          where people can discuss, share, teach, and learn all things{' '}
          <a className='react-tag' href='https://reactjs.org/'>
            React.js
          </a>{' '}
          . You can find our discord{' '}
          <a
            className='discord-tag'
            href='https://discord.com/channels/753501117085909034/753501117085909036'
          >
            {' '}
            here
          </a>
          .
        </p>
      </div>
      <div className='divider'></div>
      <div className='text-container-top'>
        <h2>
          <span role='img' aria-label='celebrate'>
            🎊
          </span>{' '}
          The Year of Open Source{' '}
          <span role='img' aria-label='celebrate'>
            🎊
          </span>
        </h2>
      </div>
      <div className='text-container'>
        <p>
          With{' '}
          <a
            className='hacktoberfest'
            href='https://hacktoberfest.digitalocean.com/'
          >
            Hacktoberfest
          </a>{' '}
          all wrapped up, there is still plenty opportunities contributing to
          open source!{' '}
          <span role='img' aria-label='ghost'>
            👻
          </span>{' '}
          <br />
          Open source promotes the opportunity for anyone looking to advance
          their problem-solving and design skills in a collaborative
          environment. Not to mention it can give your resume a boost.{' '}
          <span role='img' aria-label='rocket'>
            🚀
          </span>{' '}
          Please join us in the spirit of Hacktoberfest to better the world by
          contributing to meaningful projects. First-time contributors welcome,
          skilled programmers encouraged. Please checkout{' '}
          <a className='hacktoberfest' href='https://openoakland.org/'>
            OpenOakland
          </a>
          , a local open-source non-profit with some awesome projects that
          revolve around public topics and issues.{' '}
        </p>
      </div>
    </div>
  );
};

export default Intro;
