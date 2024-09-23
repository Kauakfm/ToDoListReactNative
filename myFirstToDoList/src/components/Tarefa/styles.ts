import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    tarefa: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
    },
    buttonRemove: {
        width: 56,
        height: 56,
        borderRadius: 5,

        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    tarefaConcluida: {
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        textDecorationLine: 'line-through', 
        color: '#999'
    }
})