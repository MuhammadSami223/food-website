// next.config.js
module.exports = {
  // other configurations...

  // Add your shell command in a separate script or use backticks for inline shell commands
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Your other webpack configurations...
    }

    // Your other webpack configurations...

    return config;
  },
};
