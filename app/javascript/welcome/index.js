class WelcomePage extends React.Component {
  render() {
    return (
      <h1>hello <span>{this.props.name}</span></h1>
    )
  }
}

module.exports = WelcomePage
