import React from "react";
import { Icon, Grid } from "semantic-ui-react";
import "./style.css";
import Loading from "./Loading";

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
      <Grid>
        <Grid.Column width={16}>
          <Loading />
          <Loading />
          <Loading />
          <Loading />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default CardSingular;
