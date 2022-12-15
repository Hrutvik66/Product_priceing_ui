// Next Head
import Head from "next/head";

const Message = () => {
  return (
    <div>
      <Head>
        <title>Message</title>
        {/* Script tag fro Lottie */}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <div className="h-screen bg-white flex justify-center items-center">
        {/* Lottie Player */}
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_snmbndsh.json"
          background="transparent"
          speed="1"
          autoplay
          style={{ width: "1000px", height: "700px" }}
        ></lottie-player>
      </div>
    </div>
  );
};

export default Message;
