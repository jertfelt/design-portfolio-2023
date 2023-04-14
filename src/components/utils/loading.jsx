import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ClientOnlyPortal from "./ClientOnlyPortal";

const Loading = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true)
    const handleComplete = (url) => (url === router.asPath) && setLoading(false)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
  }
  })
  return loading && (<div>Loading....{/*I have an animation here*/}</div>);
}
 
export default Loading;

const Backdrop = styled.div`

  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

`

const Modal = styled.div`
padding:4rem;
h2{
  font-size:5rem;
  color: white;
}

background-color: transparent;
position: absolute;
top: 10%;
right: 10%;
bottom: 10%;
left: 10%;


.lds-heart {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: #fff;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: #fff;
}
.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
`

export const LoadingSection = () => {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
      setLoading(false);
    }, 2000);
    }
  }, [loading]);
  return (


<ClientOnlyPortal selector="#modal">
<Backdrop className="backdrop">
  <Modal className="modal">

   <div className="lds-heart"><div></div></div>

  </Modal>
  <style jsx>{`
  
    :global(body) {
      overflow: hidden;
    }
   
    
  `}</style>
</Backdrop>
</ClientOnlyPortal>
  )
  
 
}

