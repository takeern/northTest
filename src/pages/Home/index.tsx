import React, { useEffect } from "react";
import logo from '../../static/img/logo.svg';
import styles from './index.less';
import { useWeb3React } from '@web3-react/core'
import { injected } from "../../utils";
import north from "../../north.config";

export default () => {
  const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React();
  console.log('chainId', chainId, account)
  useEffect(() => {
    if (connector !== injected) {
      activate(injected);
    }

    (window as any).res = {
      north
    }
  }, [connector]);

  useEffect(() => {
    if (chainId) {
      north.setTag('chainId', chainId);
    }
  }, [chainId]);

  useEffect(() => {
    if (account) {
      north.setTag('account', account);
    }
  }, [account]);

  return (
    <div className={styles.main}>
      <img src={logo} className={styles.appLogo} />
      <div className={styles.text}>Learn more, goto doc</div>
      <div onClick={() => { (chainId as any).abc.e = 123 }}>test</div>
    </div>
  );
}