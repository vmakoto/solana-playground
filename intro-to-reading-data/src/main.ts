import {
    Connection,
    PublicKey,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const run = async () => {
    const publicKey = new PublicKey("9a63vQrQAptN1jLG6zfRUYHXgkyNLomHYhhBbMmNM7ia");

    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    const balanceInLamports = await connection.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
    );
}

run()
