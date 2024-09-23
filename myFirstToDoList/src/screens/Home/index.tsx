import { View, Text, TextInput, TouchableOpacity, Alert, FlatList, Image } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { Tarefa } from '../../components/Tarefa';
import Ionicons from '@expo/vector-icons/Ionicons';



export function Home() {
    const [tarefa, setTarefa] = useState<string>('');
    const [tarefas, setTarefas] = useState<string[]>([])
    const [concluidas, setConcluidas] = useState<number>(0)

    function handleAddTarefas() {
        if (!tarefa)
            return Alert.alert('Digite uma tarefa')
        if (tarefas.includes(tarefa))
            return Alert.alert('Essa tarefa já foi adicionada')

        setTarefas(prevState => [...prevState, tarefa])
        setTarefa('')
    }

    function handleRemoveTarefas(tarefa: string) {
        Alert.alert('Reomver', `Deseja realmente remover a tarefa ${tarefa}`, [
            {
                text: 'Sim',
                onPress: () => setTarefas(tarefas.filter(itemTarefa => itemTarefa !== tarefa))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../img/logo.png')} />
            <View style={styles.form}>
                <TextInput
                    style={styles.inputAdicionarTarefas}
                    placeholder={'Adicione uma nova tarefa'}
                    placeholderTextColor={'#FFF'}
                    onChangeText={setTarefa}
                    value={tarefa}
                />
                <TouchableOpacity style={styles.buttonForm} onPress={handleAddTarefas}>
                    <Text style={styles.textButtonForm}>
                        <Ionicons name="add-circle-outline" size={24} color="#FFF" />
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navList}>
                <Text style={styles.textNavList1}>Criadas {tarefas.length}</Text>
                <Text style={styles.textNavList2}>Concluidas {concluidas}</Text>
            </View>

            <FlatList
                data={tarefas}
                keyExtractor={item => item}
                renderItem={({ item }) =>
                    <Tarefa
                        key={item}
                        tarefa={item}
                        onRemove={() => handleRemoveTarefas(item)}
                        stateConcluidas={concluidas}
                        setConcluidas={setConcluidas}
                    />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Nenhuma tarefa foi adicionada</Text>
                )}
            />
        </View>
    )
}