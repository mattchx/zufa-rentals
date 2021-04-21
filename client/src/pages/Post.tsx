import React from 'react';
import styled from '@emotion/styled';
import house from '../assets/small-one-storey-house-medium.jpeg';

const Post:React.FC = () => {
  return (
    <>
      <Nav>ZufaApp</Nav>
      <Stack>
        <h1>North Naples Hideaway</h1>
        <h3>$200 USD / night</h3>
        <Img alt="house" src={house} />
        <Section>
          <h3>About</h3>
          <p>
            Best Value in Naples area. Florida is open no lock down here. Masks
            required by individual business owners only. Want a nice private 1
            bedroom 1 bath winter vacation rental in a preserve setting with a
            country feel at the end of a dead end street. Duplex is surrounded
            on 2 sides by Collier County Preserve land. Walk to Panera's, 5
            Guys, Tropical Smoothies, Naples Brewhouse, Maguro Sushi and
            Steakhouse, Bealls, Staples, Bed, Bath and Beyond, Hue Nail Salon,
            Salon Haven, Petco and many other shops at the Gateway Shoppes
            corner of 41 and Wiggins Pass Road. Walgreens, Lemoncello's and
            other restaurants also within walking distance. Nicely Fully turnkey
            furnished Apt with screened lanai with Propane Barbecue grill. Not a
            typical rental full kitchen with small appliances and all cookware
            needed. TV's (2) with Comcast and Comcast Hi speed internet. Queen
            size bed and walk in shower. All linens and towels everything you
            need just bring toothbrush, groceries and laptop or ipad. Beach
            chairs and beach towels available. Beaches 2-3 miles either
            direction.
          </p>
        </Section>
        <Section>
        <h3>Contact</h3>
        </Section>
      </Stack>
    </>
  );
};

export default Post;

const boxShadow = `0px 10px 15px -3px rgba(0, 0, 0, 0.1),
0px 4px 6px -2px rgba(0, 0, 0, 0.05);`

const Nav = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #232323;
  color: #ccc;
`;

const Stack = styled.div`
  padding: 6rem;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: ${boxShadow}
`;

const Section = styled.div`
  margin-top: 3rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: ${boxShadow}
  
`;
