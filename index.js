const app = require("./app");

const main = async () => {
  (await app()).listen(process.env.PORT, () =>
    console.info(
      `> listening at ${process.env.PORT} `
    )
  );
};

main();