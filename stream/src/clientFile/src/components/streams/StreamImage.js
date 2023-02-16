import React from 'react';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import { createStreamImage } from '../../actions';

class StreamImage extends React.Component {
    onClick = imageValue => {
        this.props.createStreamImage(imageValue);
    }

    render() { 
        return (
            <div>
                <StreamForm onClick={this.onClick} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{ createStreamImage })(StreamImage);