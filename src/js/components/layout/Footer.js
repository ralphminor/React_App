import React from 'react';

export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "3em",
    };
    return (
      <footer style={footerStyles}>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; 2017 Ralph Minor</p>
          </div>
        </div>
      </footer>
    );
  }
}