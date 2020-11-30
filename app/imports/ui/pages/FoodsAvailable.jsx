import React, { Component } from 'react';
import { Container, Card, Image, Label, Icon } from 'semantic-ui-react';

const FoodsAvailable = [
  {
    _id: 1,
    image: 'https://globalassets.starbucks.com/assets/6ab7d70c4fff435faf090a2f1a6f30d5.jpg?impolicy=1by1_wide_1242',
    title: 'Caramel Frapuccino',
    location: 'Starbucks',
    price: '3.75',
  },
  {
    _id: 2,
    image: 'https://dinnerthendessert.com/wp-content/uploads/2015/07/Mushroom-Middle1.jpg',
    title: 'Mushroom Chicken',
    price: '7.50',
    location: 'Panda Express',
  },
  {
    _id: 3,
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2F1515784604%2F1801w-group-of-doughnuts-1-getty.jpg',
    title: 'Donut',
    price: '0.99',
    location: 'Dunkin Donuts',
  },
  {
    _id: 4,
    image: 'https://www.hawaiianbarbecue.com/wp-content/uploads/2016/07/Seafood_Combo_BBQ_Chicken-optimized.png',
    title: 'Seafood Combo',
    price: '10.75',
    location: 'L & L Barbeque',
  },
  {
    _id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8knqBAra5zz7s6midVb5Z6M2T7cQFM1MLA&usqp=CAU',
    title: 'Tamales',
    price: '2.00',
    location: 'Hot Tacos',
  },
  {
    _id: 6,
    image: 'https://www.simplyrecipes.com/wp-content/uploads/2009/09/caesar-salad-horiz-a-1800.jpg',
    title: 'Ceasar Salad',
    price: '13.00',
    location: 'Holo Holo',
  },
];

export default class AdsList extends Component {
  constructor(props) {
    super(props);
    this.state = { ads: [] };
  }

  componentDidMount() {
    // For Testing
    this.setState({
      ads: FoodsAvailable,
    });
  }

  renderItems = () => (
      <Card.Group itemsPerRow={3} stackable={true} doubling={true}>
        {this.state.ads.map(card => (
            <Card key={card._id} className='fluid'>
              <Image
                  size='small'
                  src={card.image}
                  wrapped
                  ui={false}
              />
              <Card.Content>
                <Card.Header>{card.title}</Card.Header>
                <Label attached='bottom right' color='blue'>
                  <Icon name='dollar'/> {card.price}
                </Label>
              </Card.Content>
            </Card>
        ))}
      </Card.Group>
  );

  render() {
    return <Container>{this.renderItems()}</Container>;
  }
}
