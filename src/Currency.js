import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { fetchExchangeRate } from './apolloClient';
import commonStyles from './common.styles.js';

export default class Currency extends Component {

  constructor(props) {
    super(props);
    this.state ={ isLoading: true, error: false }
  }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      try {
        const usdRates = await fetchExchangeRate('USD');
        console.log("componentDidMount() USD exchange rates: " + JSON.stringify(usdRates))
        this.setState({
          isLoading: false,
          dataSource: usdRates.data.rates
        });
      } catch (e) {
        this.setState({
          isLoading: false,
          error: true,
        });
      }
    })

  }

  render(){

    if (this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={({currency}, index) => currency.toString()}
        />
      </View>
    );

  }

    renderItem(item) {
        const data = item.item
        return (
            <View>
                <View style={commonStyles.rowItem}>
                    <Text style={[commonStyles.propertyText, commonStyles.rowItemText]}>Name:</Text><Text style={commonStyles.rowItemText}> {data.name}</Text>
                </View>
                <View style={commonStyles.rowItem}>
                    <Text style={[commonStyles.propertyText, commonStyles.rowItemText]}>Currency:</Text><Text style={commonStyles.rowItemText}> {data.currency}</Text>
                </View>
                <View style={commonStyles.rowItem}>
                    <Text style={[commonStyles.propertyText, commonStyles.rowItemText]}>Rate:</Text><Text style={commonStyles.rowItemText}> {data.rate}</Text>
                </View>
                <View style={commonStyles.horizontalLine}></View>
            </View>
        )
    }


}

