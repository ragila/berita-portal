import React, { Component } from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import { Grid, Image } from 'semantic-ui-react';

export default class Berita extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={11}>
            <Card />
          </Grid.Column>

          <Grid.Column width={5}>
            <Image src="/images/wireframe/media-paragraph.png" />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
