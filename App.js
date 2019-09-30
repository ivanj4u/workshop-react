import React from 'react';
import {ThemeProvider, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const App = () => {
    return (
        <ThemeProvider>
            <Button
                icon={
                    <Icon
                    name = "music"
                    size = {15}
                    color= "white"
                    />
                }
            title="Home"
            />
        </ThemeProvider>
    )
}

export default App;
