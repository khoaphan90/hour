import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>
            <Input 
                label="Username" 
                value={username} 
                onChangeText={setUsername}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            <Input 
                secureTextEntry
                label="Password" 
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false} 
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ username, password })} />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 18,
        color: 'red',
        marginLeft: 15,
    },
});

export default AuthForm;