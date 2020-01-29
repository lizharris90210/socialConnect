import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <div className="mobile-logo">
            <img src="/img/logo.png" className="mobile-img" alt="Logo"/>
          </div>
          <p className='lead-landing'>
            Create a profile and connect with fellow musicians
          </p>
          <div className='button-box'>
            <div className="button-box__button register">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Link to='/register'>
                REGISTER
              </Link>
            </div>
            <div className="button-box__button login">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <Link to='/login'>
                LOGIN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
