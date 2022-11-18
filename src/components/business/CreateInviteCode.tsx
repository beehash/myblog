import Modal from '@/components/base/Modal';
import React, { Component, ReactNode } from 'react'
import UserApi from '@/apis/user';

interface Props {
  visible: Boolean;
  close: () => void;
}
interface State {
  inviteCode: string;
}

const inviteBtnStyle = {
  height: 44+'px',
  lineHeight: 44+ 'px',
  width: 320+ 'px',
  borderRadius: 22 + 'px'
}
class CreateInviteCode extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      inviteCode: ''
    }
  }

  getInviteCode = () => {
    UserApi.getInviteCode().then(res => {
      if(res.success) {
        this.setState({inviteCode: res.result});
      }
      console.log('邀请码:', res);
    });
  }

  render(): ReactNode {
    return (
      <Modal title="创建邀请码" visible={this.props.visible}
      close={this.props.close}
      concealFooter={true}>
        <div className="row mt-16" style={{textAlign: 'center'}}>
          <button
            className="base-button primary-button mb-24"
            style={inviteBtnStyle}
            onClick={this.getInviteCode}>
            创建
          </button><br/>
          { this.state.inviteCode
            && (<p style={{display: 'inline-block', width: 320+'px', textAlign: 'center'}}>
              <span style={{width: 320+'px', display: 'inline-block', wordBreak: 'break-all'}}>
                邀请码：{this.state.inviteCode}
              </span>
            </p>)
          }
        </div>
      </Modal>
    );
  }
}

export default CreateInviteCode
