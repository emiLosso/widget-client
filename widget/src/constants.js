import Environment from './environment'

const baseApiV3Url = `${Environment.serverUrl}/api/v3`

const Constants = {
    // ripio endpoint process checkout
    checkoutUrl: `${baseApiV3Url}/checkoutmodel/`,
};

export default Constants;
