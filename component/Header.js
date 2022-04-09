const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text> {props.title} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor:'darslateblue'
    },
    text: {
        colour: '#fff',
        fontSize: 23,
        textAlign: 'center',
    }
})