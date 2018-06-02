import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Container from '../src/components/container/Container';
import Background from '../src/components/background/Background';
import Content from '../src/components/content/Content';
import HorizontalScrollLayout from '../src/components/horizontalScrollLayout/HorizontalScrollLayout';
import styles from './index.css';

const background1 = require('./img/background1.jpg');
const background2 = require('./img/background2.jpg');
const background3 = require('./img/background3.jpg');

storiesOf('Fixed Background Examples', module)
  .add('Image background and text content', withInfo({})(() => (
    <div>
      <Container>
        <Background>
          <img src={background1} className={styles.backgroundImage} alt="background1" />
        </Background>
        <Content className={styles.fullscreenCentered}>
          <h1 className={styles.contentText}>Scrolling</h1>
        </Content>
      </Container>
      <Container>
        <Background>
          <img src={background2} className={styles.backgroundImage} alt="background2" />
        </Background>
        <Content className={styles.fullscreenCentered}>
          <h1 className={styles.contentText}>Changes</h1>
        </Content>
      </Container>
      <Container>
        <Background>
          <img src={background3} className={styles.backgroundImage} alt="background3" />
        </Background>
        <Content className={styles.fullscreenCentered}>
          <h1 className={styles.contentText}>Background</h1>
        </Content>
      </Container>
    </div>
  )))
  .add('Text background and image content', withInfo({})(() => (
    <div>
      <Container>
        <Content>
          <img src={background1} className={styles.backgroundImage} alt="background1" />
        </Content>
        <Background bringToFront className={styles.fullscreenCentered}>
          <h1 className={styles.contentText}>Scrolling</h1>
        </Background>
      </Container>
      <Container>
        <Content>
          <img src={background2} className={styles.backgroundImage} alt="background2" />
        </Content>
        <Background bringToFront className={styles.fullscreenCentered}>
          <h1 className={styles.contentText}>Changes</h1>
        </Background>
      </Container>
      <Container>
        <Content>
          <img src={background3} className={styles.backgroundImage} alt="background3" />
        </Content>
        <Background bringToFront className={styles.fullscreenCentered}>
          <h1 className={styles.contentText}>Content</h1>
        </Background>
      </Container>
    </div>
  )))
  .add('Background with no content', withInfo({})(() => (
    <div>
      <Container className={styles.fullscreenCentered}>
        <Background>
          <img src={background1} className={styles.backgroundImage} alt="background1" />
        </Background>
      </Container>
      <Container className={styles.fullscreenCentered}>
        <Background>
          <img src={background2} className={styles.backgroundImage} alt="background2" />
        </Background>
      </Container>
      <Container className={styles.fullscreenCentered}>
        <Background>
          <img src={background3} className={styles.backgroundImage} alt="background3" />
        </Background>
      </Container>
    </div>
  )))
  .add('Horizontal scroll layout', withInfo({})(() => (
    <HorizontalScrollLayout>
      <Container className={styles.fullscreenCentered}>
        <Background>
          <img src={background1} className={styles.backgroundImage} alt="background1" />
        </Background>
        <Content>
          <h1 className={styles.contentText}>Scrolling</h1>
        </Content>
      </Container>
      <Container className={styles.fullscreenCentered}>
        <Background>
          <img src={background2} className={styles.backgroundImage} alt="background2" />
        </Background>
        <Content>
          <h1 className={styles.contentText}>Changes</h1>
        </Content>
      </Container>
      <Container className={styles.fullscreenCentered}>
        <Background>
          <img src={background3} className={styles.backgroundImage} alt="background3" />
        </Background>
        <Content>
          <h1 className={styles.contentText}>Background</h1>
        </Content>
      </Container>
    </HorizontalScrollLayout>
  )))
  .add('Between normal elements', withInfo({})(() => (
    <div>
      <img src={background1} className={styles.backgroundImage} alt="background1" />
      <Container className={styles.fullscreenCentered}>
        <Background>
          <img src={background2} className={styles.backgroundImage} alt="background2" />
        </Background>
      </Container>
      <img src={background3} className={styles.backgroundImage} alt="background3" />
    </div>
  )));
