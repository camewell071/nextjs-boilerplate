import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <title>NextJS Boilerplate</title>
      <link rel="shortcut icon" href="/img/favicon.ico" />
      <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
      />
    </Head>
  );
};

export default Meta;
