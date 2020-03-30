import React from 'react'; 
import { Feather } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from '@react-navigation/native'; 
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native'; 
import * as MailComposer from 'expo-mail-composer'; 

import logoImg from '../../assets/logo.png'; 
import styles from './styles'; 

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const incidents = route.params.incidents
    const message = `Olá ${incidents.name}, estou entrando em contato, pois gostaria de ajudar no caso "${incidents.title}" com o valor de ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incidents.value)}`; 

    function navigateBack(){
        navigation.goBack(); 
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incidents.title}`,
            recipients: [incidents.email], 
            body: message,
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incidents.whatsapp}&text=${message}`);
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incidents.name} de {incidents.city}/{incidents.uf}</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incidents.description}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>
                        {Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                             currency: 'BRL'
                             }).format(incidents.value)}
                    </Text>
            </View>

            <View style={styles.contactBox}> 
                <Text style={styles.heroTitle}>Salva o dia</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

