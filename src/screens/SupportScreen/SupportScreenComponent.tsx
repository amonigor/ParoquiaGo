import React from 'react';

import { GenericScreen } from '../GenericScreen';
import { ScrollView, View } from 'react-native';

import { styles } from './SupportScreenStyle';
import { SupportCardComponent } from '../../components/SupportCard/SupportCardComponent';

export const SupportScreenComponent = (): JSX.Element => {
  return (
    <GenericScreen title="Suporte">
      <View style={styles.container}>
        <ScrollView>
          <SupportCardComponent
            title="Centro diocesano de pastoral PE.Lúcio Floro"
            text="Horário de Atendimento: 2ª a 6ª feira das 8h às 12h e das 13h às 17h"
            tel="(13) 3228-8882"
          />
          <SupportCardComponent
            title="Asseosoria de Comuunicação da Diocese dee Santos"
            email="comunicacao.diocesedesantos@gmail.com"
          />
          <SupportCardComponent
            title="Cúria dioceesana de Santos"
            text="Horário de atendimento da Cúria: 2ª a 6ª - Das 8h as 12h e das 13h as 17h"
            tel="(13) 3228-8888"
            email="certidoes@curiadesantos.com.br"
            address="Av. Conselheiro Rodrigues Alves, 254 - Santos"
            link="https://www.diocesedesantos.com.br/index.php/diocese/curia-diocesana"
          />
        </ScrollView>
      </View>
    </GenericScreen>
  );
};
