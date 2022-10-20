/*
 * @Author: Amelia
 * @email: zhangshan1@able-elec.com
 * @Date: 2022-09-16 09:59:47
 */
import React, { PureComponent, ReactNode } from 'react';
import Header from '@/components/business/Header';

interface Props {}
interface State {
  scene: any;
}

class Home extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      scene: null,
    }
  }

  componentDidMount(): void {
    this.setState({scene: 'xxx'});
  }

  render(): ReactNode {
    return (
      <Header scene={this.state.scene}></Header>
    )
  }
}

export default Home
