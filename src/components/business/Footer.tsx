import React, { FunctionComponent, useState } from "react";
// import CreateInviteCode from "./CreateInviteCode";
 
const Footer: FunctionComponent<any> = () => {
  // const [visible, setVisible] = useState(false);
  // U02SEp6ML8ng/xwqdjGysA==
  // i1KYvZRQgN9QYrbMlnAymw==

  return ( 
    <div className="footer w-full">
      <div className="disc-list">
        <div className="flex-center">
          <p className="disc-item">
            <span className="label-item">备案号：</span><span className="text-item"><a href="https://beian.miit.gov.cn">蜀ICP备17032259号-1</a></span>
          </p>
          <p className="disc-item">
            <span className="label-item">&copy; 2021 —— 2023 </span><span className="text-item">本网站服务由阿里云提供</span>
          </p>
        </div>
        <div className="flex-center">
          <p className="disc-item">
            <span className="label-item">联系方式：</span><span className="text-item">13120829590</span>
          </p>
          <p className="disc-item">
            <span className="label-item">地址：</span><span className="text-item">上海市</span>
          </p>
        </div>
        {/* <div className="flex-center">
          <p className="disc-item">
            <span className="label-item">生成邀请码：</span>
            <button className="base-button text-button" onClick={() => setVisible(true)}>get invitecode</button>
          </p>
        </div> */}
      </div>
      {/* <CreateInviteCode visible={visible} close={() => setVisible(false)}></CreateInviteCode> */}
    </div>
    );
}
 
export default Footer;