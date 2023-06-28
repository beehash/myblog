import React, {Component} from 'react';
import contextRouter from './context';

class Route extends Component<any, any> {
  // static contextType: React.Context<any> = contextRouter;
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      count2: 6,
    }
  }

  updateState = () => {
    this.setState({
      count: this.state.count +1,
      count2: this.state.count2 + 1,
    });
    this.setState({
      count: this.state.count +1,
    });
  }

  render() {
    // const counr = this.context;
    return (
      <div onClick={this.updateState}>
        111222state1: {this.state.count}, state2: {this.state.count2}
        <contextRouter.Consumer>
          {(ctx) => (<span>{ctx && (ctx as any).count}</span>)}
        </contextRouter.Consumer>
      </div>
    );
  }
}
 
export default Route;
