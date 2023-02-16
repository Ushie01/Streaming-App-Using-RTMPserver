import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
import Header from '../Header';

class StreamCreate extends React.Component {
  state = { success: true };
  onSubmit = formValues => {
    this.props.createStream(formValues);    
  };

  render() {
    return (
      <div>
        <Header />
          <div className='space-y-6 mt-3'>
          <h3 className='text-5xl font-sans'>Create a Stream</h3>
            <StreamForm onSubmit={this.onSubmit} />  
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
