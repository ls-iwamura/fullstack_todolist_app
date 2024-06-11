import {useEffect, useState} from 'react';

export default function Home() {
  const [a] = useState('a');
  if (a === 'a')
    useEffect(() => {
      console.log(a);
    }, []);
  return <main></main>;
}
