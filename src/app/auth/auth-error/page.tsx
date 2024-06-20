import React from 'react';

export default function AuthError({ err }) {
  return (
    <div>
      <p>Authentication Error</p>
      <p>{err}</p>
    </div>
  );
}
