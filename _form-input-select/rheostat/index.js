import ReactDOM from 'react-dom'
import Rheostat from 'rheostat';

import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'rheostat/lib/themes/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);

import 'rheostat/initialize';

function App () {

    return  <Rheostat
        min={1}
        max={100}
        values={[1, 100]}
    />
}

ReactDOM.render(<App />, mountNode)