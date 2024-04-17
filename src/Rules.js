import { View, Text, ScrollView, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const Rules = () => {
 
const data = [
    { 
      title: 'RULES OF INHERITANCE \nWhen a Muslim passes away, the amount/property/estate is inheritable after', 
      data: [
       
      ]
    },
    {
      title: '',
      data: [
        { id: '1', name: '1 Paying for the expenses of the funeral' },
        { id: '2', name: '2 Returning of debts' },
        { id: '3', name: '3 Giving away the will (which cannot be more than 1/3\n   of the amount/ property/estate' },
      ]
   
    },
    {
        title: '1. Husband:',
        data: [
          { id: '3', name: '(i) The husband gets 1/2 if no child/ children is/are present' },
          { id: '4', name: '(ii) The husband gets 1/4 if child/ children is/are present' },
        ]
      },
      {
        title: '2. Widow:',
        data: [
          { id: '3', name: '(1) The widow gets 1/4 if no child/ children is/are present ' },
          { id: '4', name: '(2) The widow gets 1/8 if child/ children is/are present' },
          { id: '5', name: '(3) If more than one wife/widow, all the widows share equally out of the 1/4 or 1/8 share.' },
       
        ]
      },
      {
        title: '4. Mother (of the deceased):',
        data: [
          { id: '3', name: '(1) The share of mother is 1/3 in the ABSENCE of child/children or two brothers or two sisters or 1 brother and 1 sister' },
          { id: '4', name: '(2) The share of mother is 1/6 in the PRESENCE of child/children or two brothers or two sisters or 1 brother and 1 sister' },
          { id: '5', name: '(3) If the mother is with father and the widow/wife (or husband) is also present, the mother will get 1/3 of what remains after deducting the share of spouse (wife/wives or husband).' },
        ]
      },
      {
        title: '5. Daughter:',
        data: [
            { id: '3', name: '(1) The share of single i.e. one daughter is 1/2' },
            { id: '4', name: '(2) If the daughters are more than one i.e. two or more, the share is 2/3 to be divided equally among them' },
            { id: '5', name: '(3) If the son is also present with the daughter. The daughter will inherit as residuary. Two parts will go to the son and one part to the daughter' },
         
        ]
      },
      {
        title: '6. Full Sister (Sister from Same Mother and Same Father)',
        data: [
          { id: '3', name: '(1) A full sister will not get the share in inheritance in the \n\t\tpresence of:\n\t(a) Child/Children, or\n\t(b) Child/Children of son, or\n\t(c) Father, or\n\t(d) Father`s father' },
          { id: '4', name: '(2) If the sister is one, she will get 1/2' },
          { id: '5', name: '(3) If the sister is more than one i.e. two or more full sisters, they will get 2/3' },
          { id: '6', name: '(4) If the bother exists along with sister, she inherits as Residuary (with two shares going to the brother(s) and one share to the sister).' },
        ]
      },
      {
        title: 'Law of Increase (Aul):',
        data: [
          { id: '3', name: 'After all the shares are distributed and the sum total exceeds one, the law of increase (Aul) is applied.\nFor example, if the sum of the shares is 15/12 then, 15 represents the number of shares and 12 represents fragments or pieces of the property. In such a scenario, the shares exceed the number of fragments of property.\nThe sum total must be equal to one and, secondly, the respective shares of the Sharers cannot be changed because they are specified in the Quran. Therefore, for making the aggregate unity without changing the respective shares, the fragments of the property are increased by adopting the following method:\n Don`t change the numerator, the denominator will be increased so that it becomes equal to the numerator (total number of shares). With this method, the aggregate of the shares is made equal to one.\nFor example, if the sum is 15/12, we find that denominator is 3 less than the numerator therefore, by adding three to the denominator (12+3) it becomes 15 i.e. equal to the numerator.\nExample:\nA deceased dies leaving her (a) husband, and (b) two full sisters. The normal shares are:\n Husband 1/2 (Sharer)  \nTwo full sisters 2/3 (Sharer)\nHere, the sum total of the shares is not equal to one, it is (1/2 x 2/3) = 7/6 which is greater than unity. Thus the aggregate of the shares of husband and two full sisters may be given as under: \n 3+4 \n1/2+2/3 = Z=7/6 6 \nOr, 3/6+4/6= 7/6\n So by applying the law of increase, one is added to the denominator so it will become (6+1) = 7. Thus, we have increased the number of fragments of property without altering the shares. Now, taking this increased denominator (i.e. 7) as the common denominator, we may allot the respective shares.\n Husband 3/7 \nTwo full sisters 4/7 ' },
      
        ]
      },
   
      {
        title: '8. Law of Return (Radd):\nWhen the sum of shares is less than one, the law of return (radd) is applied.\n When the sum of total shares is less than one, it implies that the number of shares is less than the number of pieces of property. For example, the sum of all the shares is 5/12, meaning by that the shares are 5 whereas the pieces of property are 12.',
        data: [
          { id: '3', name: '(1) The sum total was 5/12, so the residue will be (1-5/12) i.e. 7/12. 7/12 is supposed to be added for example to the share of father and sisters in the proportion of their own shares i.e. in the ratio of 1/6 and 1/2 respectively.' },
          { id: '4', name: '(2) The law of Radd is not applicable to the husband and widow. The remaining amount returns to all the heirs except the husband or widow. However, if the widow (or husband) is the only heir left they will inherit the whole property' },
        ]
      },
      {
        title: 'The Method:\nThe remaining share will be added (except husband or widow) in the same ratio as their own shares:',
        data: [
          { id: '3', name: '(a) Give all the shares to the legal heirs.' },
          { id: '4', name: '(b) If the spouse (husband/wife) exist, his (or her) share is left apart. There share will not be altered as per the law of radd.' },
          { id: '5', name: '(c) After deducting the share of the spouse. E.g., if daughter and mother are left, their shares are 1/6 and 1/2 respectively. Their ratio is 3:1, if the property is 4, the daughter`s share will be 3/4, and the mother`s share will be 1/4.' },
          { id: '6', name: '(d) For example, after deducting the share of widow (1/8) the remainder is (1-1/8) = 7/8. The remaining will be distributed between the daughter and mother in the ratio of 3:1. The shares of the daughter and mother will be 3/4 of 7/8 and 1/4 of 7/8 respectively. \n Example: \n The deceased leaves behind her (a) husband and (b) mother. The property will be inherited as such:\n Husband 1/2 (Sharer)\n Mother 1/3 (Sharer) \n The total shares are 1/2 + 1/3 = 5/6, whereas, the property to be distributed is one. The remaining amount is (1-5/6) i.e. 1/6. The remaining would return back to the heirs.\n But, the spouse will not get back the remaining. In this case, the mother will get the remaining property/amount. Thus, the share of the mother is 1/3 + 1/6 = 1/2.\n Husband 1/2 (Sharer)\m  Mother 1/2 (1/3 as Sharer + 1/6 in return)' },
       
        ]
      },
      {
        title: '9. Residuaries:\n When the deceased has no Sharers present, the property will be inherited by the Residuaries. Secondly, after distribution of the property, a residue remains and the residuary exists, the residue will go to the Residuaries.\n It some cases the Sharers will become the Residuaries e.g., a daughter with son, sister together with brother. The father without children (of the propositus) will become the Residuary.\nThe list of Residuaries is as below \n Descendants:',
           data: [
          { id: '3', name: 'a. Son:\n(i) when the daughter does exist the son takes the entire residue.\n(ii) when son and daughter both exist, the son gets double the share of a daughter.\nAscendants:' },
          { id: '4', name: 'b. Father:\nThe whole residue will go to the father.\nCollaterals: Descendants of Father' },
          { id: '5', name: 'c. Full Brother:\n(i) If the sister does not exist, the full brother inherits the entire residue.\n(ii) If the sister exists along with the brother, the full brother inherits with her but his share is double the share of a sister' },
          { id: '6', name: 'd. Full Sister:\nIn the absence of above-mentioned residuaries, the full sister is treated as Residuary.' },
        ]
      },
    
    
    
    // Add more sections as needed
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 5 }}>
      <Text>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    
    <ScrollView contentContainerStyle={styles.contentContainer}>
         <View style={{ backgroundColor: 'lightgray', padding: 5,fontWeight: 'bold', }}>
      <Text  style={{ backgroundColor: 'lightgray',fontWeight: 'bold'}}>{section.title}</Text>
    </View>
    </ScrollView>
   
  );

  return (
    
    <SectionList
    
      sections={data}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={item => item.id}
    />
  );
};
const styles = StyleSheet.create({
container:{

}
})
export default Rules
