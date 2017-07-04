import '../welcome/index.scss'

import WelcomePage from '../welcome/index'
import assign from 'object-assign'

const WelcomeApp = {
  init(options) {
    assign(this, {}, options);

    ReactDOM.render(
      <WelcomePage {...this} />,
      document.body.appendChild(document.createElement('div'))
    )
  }
}

module.exports = WelcomeApp
