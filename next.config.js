const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
module.exports = (phase) => {

    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: "dan11102003net",
                mongodb_password: "RtOZexqRhdBFxI4x",
                mongodb_clusternname: "cluster0",
                mongodb_database: "my-site-dev",
              },
        }
    }
    return{
        env: {
            mongodb_username: "dan11102003net",
            mongodb_password: "RtOZexqRhdBFxI4x",
            mongodb_clusternname: "cluster0",
            mongodb_database: "my-site",
          },
    }
  
};
