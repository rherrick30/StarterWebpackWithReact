import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const HomePage = (props) => {
    return(
        <div>
            Starting Point                
        </div>
    );
}

HomePage.propTypes = {
};

const mapStateToProps = (state) =>{
    return {
        /*artists: state.artists*/
    };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        /*actions: bindActionCreators(artistActions, dispatch)*/
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);



