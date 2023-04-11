import { useState } from 'react';

function MyComponent() {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleClick = () => {
    setIsEnabled(!isEnabled);
  };
 

  return (
    <div>
      <input type="text" placeholder='enter' disabled={!isEnabled} />
    
      <input type="text" placeholder='enter the name' disabled={isEnabled} />

      <button onClick={handleClick} 
      >
        {isEnabled ? 'Disableaaaaa' : 'Enableaaaa'}
      </button>
    </div>
  );
}

export default MyComponent;
