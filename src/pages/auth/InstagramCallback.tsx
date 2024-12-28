import { useEffect } from 'react';

export const InstagramCallback = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const state = params.get('state');
    const error = params.get('error');
    const error_description = params.get('error_description');

    if (error) {
      window.opener?.postMessage(
        { 
          type: 'instagram-auth-error', 
          error,
          error_description 
        },
        window.location.origin
      );
    } else if (code) {
      window.opener?.postMessage(
        { 
          type: 'instagram-auth-success',
          code,
          state
        },
        window.location.origin
      );
    }

    // Close the popup window
    window.close();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-gray-600">Processing Instagram authentication...</p>
    </div>
  );
};