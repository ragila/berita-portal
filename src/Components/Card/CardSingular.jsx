import React from "react";
import { Card, Icon, Grid, Image, GridColumn } from "semantic-ui-react";
import "./style.css";
import { Link } from "react-router-dom";

const CardSingular = props => {
  const extra = (
    <a>
      <Icon name="user" />
      Lihat Lebih Banyak
    </a>
  );
  //   console.log(props.lempar.posts, '>>>>>>>>>>>>ini PROPS!!!');
  return (
    <div>
      {props.lempar.posts.map(datum => {
        return (
          <Grid container spacing={8}>
            <Grid.Column width={6}>
              <Image src={datum.seo.image} />
            </Grid.Column>
            <Grid.Column width={10}>
              <p>{datum.seo.title}</p>
              <p>{datum.seo.description}</p>
              <p>{datum.author.display_name}</p>
              <p>
                <Link to={`/${datum.slug}`}>Read more ...</Link>
              </p>
            </Grid.Column>
          </Grid>
        );
      })}
    </div>
  );
};

export default CardSingular;
