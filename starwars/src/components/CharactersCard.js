import React from 'react';
import styled from 'styled-components';

const Card = styled.div `
  background: #FFF;
  margin: 10px auto;
  width: 300px;
  text-align: left;
  padding: 10px 0;
`;

const CharactersCard = (props) => {
  return (
    <Card>
      <p><strong>Name:</strong> {props.value.name}</p>
      <p><strong>Gender:</strong> {props.value.gender}</p>
      <p><strong>Birth Year:</strong> {props.value.birth_year}</p>
      <p><strong>Skin Color:</strong> {props.value.skin_color}</p>
      <p><strong>Eye Color:</strong> {props.value.eye_color}</p>
      <p><strong>Hair Color:</strong> {props.value.hair_color}</p>
      <p><strong>Height:</strong> {props.value.height}</p>
    </Card>
  )
}

export default CharactersCard;