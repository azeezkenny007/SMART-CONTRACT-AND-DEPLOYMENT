const ethers= require('ethers');
const fs= require('fs');
require('dotenv').config()


async function main(){
  const wallet = new ethers.Wallet(process.env.NEW_PRIVATE_KEY);
  const encryptedJsonKey= await  wallet.encrypt(process.env.PRIVATE_KEY_PASSWORD,process.env.NEW_PRIVATE_KEY)
  
  console.log(encryptedJsonKey);

  fs.writeFileSync('./.encrypted.json',encryptedJsonKey);

}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });