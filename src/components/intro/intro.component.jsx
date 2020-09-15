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
            href='https://discord.com/channels/753501117085909034/753501117085909036'
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
          around the corner let’s end the year right by building some meaningful
          projects during the month of October.{' '}
          <span role='img' aria-label='ghost'>
            👻
          </span>{' '}
          <br /> The goal is to create something that is a positive contribution
          to the world.
          <br />
          Whether it is a tool for providing people information or some other
          useful purpose it should promote the opportunity for anyone looking to
          advance their problem-solving and design skills in a collaborative
          environment. Not to mention it can certainly give your resume a boost.{' '}
          <span role='img' aria-label='rocket'>
            🚀
          </span>{' '}
          First-time contributors welcome, skilled programmers encouraged.
          Please join us in the spirit of Hacktoberfest and contribute to open
          source!{' '}
        </p>

        <p>Project ideas and discussion can be found in our discord.</p>
      </div>
    </div>
  );
};

export default Intro;
