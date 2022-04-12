import { View, SafeAreaView, Button } from "react-native";
import { Layout, Card, Text } from "@ui-kitten/components";

export const ProposalsPage = ({ navigation }) => {
    const theme = useTheme();
    const chaFooter = (props: any, info: any) => {
      return(
        <View {...props} style={{...props.style, flexDirection: 'row', justifyContent: 'space-evenly', padding: 8}}>
          <Text style={{color: theme['color-info-default']}}>For: {info.for}</Text>
          <Text style={{color: theme['color-danger-default']}}>Against: {info.against}</Text>
        </View>
      );
    };
    const cardItem = (info: any) => {
      return(
        <Card
          style={{borderColor: theme['color-primary-default'], marginVertical: 4}}
          footer={props => chaFooter(props, {for: 10, against: 3})}
          >
  
          <Text category='s2' numberOfLines={4} ellipsizeMode='tail'>{info.item.desc}</Text>
        </Card>
      );
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Layout style={{ flex: 1, padding: 16 }}>
          <Card
            disabled='true'
            style={{borderColor: theme['color-primary-default'], margin: 8, padding: 8}}>
            <Button size='medium'>Create Proposal</Button>
          </Card>
          <List
            contentContainerStyle={{paddingHorizontal: 8, paddingVertical: 4}}
            renderItem={cardItem}/>
        </Layout>
      </SafeAreaView>
    );
  };