import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../api';

export class Home extends Component {
  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    console.log('x');
    const values = await API.getAllValues();
    console.log("ASD");
    console.log(values.data);
  }
  render() {
    return (
      <div>
        HomePage
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
