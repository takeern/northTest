import { getProvider } from "../../utils";
import { useEffect, useState } from "react";
import * as ethers from 'ethers';


export default () => {
  const [provider, setProvider] = useState<ethers.providers.JsonRpcProvider>();
  
  const init = async () => {
    const pr = await getProvider();

    setProvider(pr);
  }
  
  useEffect(() => {
    init();
  }, []);

  return {
    provider
  };
}