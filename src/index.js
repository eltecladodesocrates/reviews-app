import React from 'react';
import ReactDOM from 'react-dom';

class ReviewsApp extends React.Component {

  state = {
    position: 2,
    reviews: [
      {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
          'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
      },
      {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
          'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
      },
      {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
          'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
      },
    ]
  }

  handleReducePosition = () => {
    if (this.state.position !== 0) {
      this.setState((prevState) => ({ position: prevState.position - 1 }))
    } else {
      this.setState(() => ({ position: (this.state.reviews.length - 1) }))
    }
  }

  handleIncreasePosition = () => {
    if (this.state.position !== (this.state.reviews.length - 1)) {
      this.setState((prevState) => ({ position: prevState.position + 1 }))
    } else {
      this.setState(() => ({ position: 0 }))
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Reviews
          reviews={this.state.reviews}
          position={this.state.position}
          handleReducePosition={this.handleReducePosition}
          handleIncreasePosition={this.handleIncreasePosition}
        />
      </div>
    )
  }
}

const Header = () => (
  <h1>Our Reviews</h1>
)

const Reviews = (props) => (
  <div>
    {props.reviews[props.position].name}
    <Review
      key={props.reviews[props.position].id}
      img={props.reviews[props.position].image}
      name={props.reviews[props.position].name}
      job={props.reviews[props.position].job}
      text={props.reviews[props.position].text}
      handleReducePosition={props.handleReducePosition}
      handleIncreasePosition={props.handleIncreasePosition}
    />
  </div>
)

const Review = (props) => (
  <div>
    <img src={props.img} alt="" />
    <h3>{props.name}</h3>
    <p>{props.job}</p>
    <p>{props.text}</p>
    <PrevReview
      handleReducePosition={props.handleReducePosition}
    />
    <NextReview
      handleIncreasePosition={props.handleIncreasePosition}
    />
  </div>
)

const PrevReview = (props) => {


  return (
    <button onClick={() => {
      props.handleReducePosition()
    }}>Prev</button>
  )
}

const NextReview = (props) => {
  return (
    <button onClick={() => {
      props.handleIncreasePosition()
    }}>Next</button>
  )
}

ReactDOM.render(
  <ReviewsApp />,
  document.getElementById('root')
)

