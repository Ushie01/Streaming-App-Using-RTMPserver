import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import Google from './assets/google.png';
import history from '../history';
import Loading from './Loading';


class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:process.env.REACT_APP_AUTH_KEY,
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }


  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId(),
        this.auth.currentUser.get().gv.tX);
    } else {
      this.props.signOut();
    } 
  };


  onSignInClick = () => {
    this.auth.signIn();
    if (this.auth.signIn()) {
      history.push('/')
    } else {
      <Loading />
    }
  };


  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else {
      return (
        <button onClick={this.onSignInClick} disabled={this.isSignedIn} className='flex 
        items-center justify-center mb-8 py-2 space-x-3 w-full border-4 rounded-xl shadow-sm
        hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150'
        >
          <img src={Google} alt={Google} className="w-5"/>
          <span className='text-black'>Log in with Google</span>
        </button>
      );
    } 
  }


  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}


const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};


export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
