import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { error } = query;

  return {
    props: {
      error: error ? decodeURIComponent(error as string) : null,
    },
  };
};

const AuthError = ({ error }) => {
  return (
    <div>
      <p>Authentication Error</p>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AuthError;
