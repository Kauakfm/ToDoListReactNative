import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    logo: {
        marginLeft: '35%',
        marginBottom: 30,
        marginTop: 48
    },
    inputAdicionarTarefas: {
        flex: 1,
        height: 60,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginRight: 5,
        marginBottom: 30
    },
    buttonForm: {
        width: 60,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#0080FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonForm: {
        fontSize: 26,
        color: '#FFF'
    },
    listEmptyText: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    navList: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50
    },
    textNavList1: {
        fontSize: 18,
        color: '#0080FF',
        fontWeight: 'bold'
    },
    textNavList2: {
        fontSize: 18,
        color: '#AB11F9',
        fontWeight: 'bold'
    }
})