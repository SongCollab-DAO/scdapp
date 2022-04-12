export const WelcomePage = ({navigation}) => {

    return (
      <Layout style={styles.container}>
        <Button
          raised='true'
          accessoryLeft={profile.loading ? loadingIndicator : ""}
        >Connect To Wallet</Button>
        <Text style={styles.text}>
          Welcome to the Charity DAO example
        </Text>
      </Layout>
    );
   };
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       padding: 20,
     },
     text: {
       paddingTop: 10,
     },
     indicator: {
       justifyContent: 'center',
       alignItems: 'center',
     },
   });