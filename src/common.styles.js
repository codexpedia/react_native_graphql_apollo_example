import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  rowItem: {
      flexWrap: "wrap",
      flexDirection: 'row',
      paddingVertical: 5
  },
  rowItemText: {
    fontSize: 12
  },
  propertyText: {
    fontFamily: 'Cochin',
    fontWeight: 'bold'
  },
  horizontalLine: {
    height: 2,
    width: '100%',
    backgroundColor: 'black'
  }
})
