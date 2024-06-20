import React from 'react';
import { useRouter } from 'next/router';

export default function AuthError() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <p>Authentication Error</p>
      {error && <p>{decodeURIComponent(error)}</p>}
    </div>
  );
}
