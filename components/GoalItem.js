import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable 
        android_ripple={{color: '#dddddd'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem }
      >

        <Text style={styles.goalText}>{props.text}</Text> 
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    width: '100%',
    marginBottom: 15,
    color: '#fff',
    backgroundColor: '#5e0acc',
    
    borderRadius: 15,
    borderWidth: 1,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#FFF',
    fontSize: 20,
    padding: 10,
  },
});