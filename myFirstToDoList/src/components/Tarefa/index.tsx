import { TouchableOpacity, View, Text } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './styles'
import { useState } from 'react';

type Props = {
    tarefa: string,
    onRemove: () => void,
    stateConcluidas: number,
    setConcluidas: (value: number) => void 
}


export function Tarefa({ tarefa, onRemove, stateConcluidas, setConcluidas }: Props) {
    const [concluida, setConcluida] = useState<boolean>(false)

    function handleCheckBoxPress(isChecked: boolean) {
        setConcluida(isChecked);

        if (isChecked) {
            setConcluidas(stateConcluidas + 1)
        } else {
            setConcluidas(stateConcluidas - 1)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={concluida ? styles.tarefaConcluida : styles.tarefa}>
                <BouncyCheckbox
                    isChecked={concluida}
                    onPress={(isChecked: boolean) => handleCheckBoxPress(isChecked)}
                    fillColor={concluida ? '#AB11F9' : '#0080FF'} />
                {tarefa}
            </Text>
            <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    <Ionicons name="trash-bin-outline" size={24} color='#FFF' />
                </Text>
            </TouchableOpacity>
        </View>
    )
}